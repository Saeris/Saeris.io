import { LogManager } from "aurelia-framework"
import Album from '../models/album'
import Photo from '../models/photo'
import config from '../../config/app.config'

/**
 * TODO:
 * - Add new methods to retrieve more data from Flickr
 * - Integrate with Redux (persist results to store)
 * - Memoize all fetch operations based on store lookups
 */

export default class Flickr {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.endpoint = config.flickr.endpoint
    this.key = config.flickr.key
    this.user = config.flickr.user
  }

  /**
   * Generic fetch method. Generates REST URL from provided method and options,
   * performs the fetch request, and returns the results as JSON.
   */
  async request(method, options, endpoint = this.endpoint, key = this.key ) {
    let params = ``
    Object.entries(options).forEach(([k, v]) => {
      Array.isArray(v) ? params = `${params}&${k}=${v.join()}` : params = `${params}&${k}=${v}`
    })
    const query = `${endpoint}?method=${method}&api_key=${key}${params}&format=json&nojsoncallback=1`
    try {
      this.log.debug(`Fetching request: '${query}'`, options)
      const json = await fetch(query).then(async response => await response.json())
      this.log.debug(`Received json:`, json)
      return await json
    } catch (error) {
      this.log.error(`Failed to complete request.`, error)
    }
  }

  /**
   * Returns an array containing all the albums (and it's photos) for the given user.
   */
  async getAlbums(user = this.user) {
    const options = {
      user_id: user,
      primary_photo_extras: [`url_m`, `url_o`]
    }
    try {
      this.log.debug(`Getting Albums for user: '${user}'...`, options)
      const results = await this.request(`flickr.photosets.getList`, options)
      const albums = await Promise.all(
        results.photosets.photoset.map(async album => new Album(album, await this.getAlbumPhotos(album.id)))
      )
      this.log.debug(`Successfully retrieved albums!`, albums)
      return albums
    } catch (error) {
      this.log.error(`Failed to retrieve albums.`, error)
      return []
    }
  }

  /**
   * Returns an array of all the photos belonging to the given album of the given user.
   */
  async getAlbumPhotos(album, user = this.user) {
    const options = {
      user_id: user,
      photoset_id: album,
      extras: [`tags`, `url_m`, `url_o`]
    }
    try {
      this.log.debug(`Getting Photos for album: '${album}'...`, options)
      const results = await this.request(`flickr.photosets.getPhotos`, options)
      const photos = await Promise.all(results.photoset.photo.map(photo => new Photo(photo)))
      this.log.debug(`Successfully retrieved photos!`, photos)
      return photos
    } catch (error) {
      this.log.error(`Failed to retrieve Photos.`, error)
    }
  }
}
