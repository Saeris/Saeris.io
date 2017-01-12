import { LogManager } from "aurelia-framework"
import Album from '../models/album'
import Photo from '../models/photo'
import config from '../../config/app.config'

export default class Flickr {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.endpoint = config.flickr.endpoint
    this.key = config.flickr.key
    this.user = config.flickr.user
  }

  async request(method, options, endpoint = this.endpoint, key = this.key ) {
    this.log.debug(`Fetching request using: '${method}' with key: '${key}'`, options)
    let params = ``
    Object.entries(options).forEach(([k, v]) => {
      Array.isArray(v) ? params = `${params}&${k}=${v.join()}` : params = `${params}&${k}=${v}`
    })
    const request = `${endpoint}?method=${method}&api_key=${key}${params}&format=json&nojsoncallback=1`
    return await fetch(request).then(response => response.json(), error => this.log.error(`Failed to fetch request: '${request}'`, error))
  }

  async getPhotos(album, user = this.user) {
    this.log.debug(`3. Getting Photos for album: '${album}'`)
    const options = {
      user_id: user,
      photoset_id: album,
      extras: [`tags`, `url_m`, `url_o`]
    }
    return await this.request(`flickr.photosets.getPhotos`, options)
      .then(async response => {
        this.log.debug(`4. Successfully fetched photos.`, response)
        return await response.photoset.photo.map(photo => new Photo(photo))
      }, error => this.log.error(`Failed to fetch photos.`, error))
  }

  async getAlbums(user = this.user) {
    this.log.debug(`1. Getting Albums for user: '${user}'`)
    const options = {
      user_id: user,
      primary_photo_extras: [`url_m`, `url_o`]
    }
    return await this.request(`flickr.photosets.getList`, options)
      .then(async response => {
        this.log.debug(`2. Successfully fetched albums.`, response)
        let albums = await response.photosets.photoset.map(async album =>  {
          let photos = await this.getPhotos(album.id).then(res => res)
          let result = new Album(album, photos)
          this.log.debug(`5. Successfully created album.`, result)
          return result
        })
        return albums
      }, error => this.log.error(`Failed to fetch albums.`, error))
  }
}
