import { inject, LogManager } from "aurelia-framework"
import Store from './store'
import Album from '../models/album'
import Photo from '../models/photo'
import config from '../../config/app.config'

/**
 * TODO:
 * - Add new methods to retrieve more data from Flickr
 * - Integrate with Redux (persist results to store)
 * - Memoize all fetch operations based on store lookups
 */
@inject(Store)
export default class Flickr {
  constructor(store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.store.addReducer(`flickr`, this.flickr)
    this.endpoint = config.flickr.endpoint
    this.key = config.flickr.key
    this.user = config.flickr.user
  }

  initialState = {
    albums: []
  }

  actions = {
    FETCH_ALBUMS: `FETCH_ALBUMS`
  }

  flickr = ( state = this.initialState, action ) => {
    switch (action.type) {
    case this.actions.FETCH_ALBUMS:
      return { ...state, albums: action.payload }
    default:
      return state
    }
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
      primary_photo_extras: [`url_q`, `url_t`, `url_s`, `url_m`, `url_l`, `url_o`]
    }
    const storedAlbums = this.state.getState().flickr.albums
    if (storedAlbums.length) {
      this.log.debug(`Returning existing albums from state...`, storedAlbums)
      return storedAlbums
    }
    try {
      this.log.debug(`Getting Albums for user: '${user}'...`, options)
      const results = await this.request(`flickr.photosets.getList`, options)
      const albums = await Promise.all(
        results.photosets.photoset.map(async album => new Album(album, await this.getAlbumPhotos(album.id)))
      )
      this.log.debug(`Successfully retrieved albums! Persisting to state...`, albums)
      this.store.state.dispatch({ type: this.actions.FETCH_ALBUMS, payload: albums })
      return albums
    } catch (error) {
      this.log.error(`Failed to retrieve albums. Returning stored albums.`, error)
      return storedAlbums
    }
  }

  async getAlbumBySlug(slug, user = this.user) {
    const storedAlbum = this.state.getState().flickr.albums
      .filter(album => album.slug === slug)[0]
    if (storedAlbum) {
      this.log.debug(`Successfully retrieved album!`, storedAlbum)
      return storedAlbum
    }
    try {
      this.log.debug(`Getting Album: '${slug}'...`)
      const albums = await this.getAlbums(user)
      this.log.debug(`Successfully retrieved album!`)
      return albums.filter(album => album.slug === slug)[0]
    } catch (error) {
      this.log.error(`Failed to retrieve album.`, error)
    }
  }

  /**
   * Returns an array of all the photos belonging to the given album of the given user.
   */
  async getAlbumPhotos(album, user = this.user) {
    const options = {
      user_id: user,
      photoset_id: album,
      extras: [`tags`, `url_q`, `url_t`, `url_s`, `url_m`, `url_l`, `url_o`]
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

  async getPhotoExif(id) {
    const options = {
      photo_id: id
    }
    try {
      this.log.debug(`Geting exif data for photo: '${id}'`, options)
      const results = await this.request(`flickr.photos.getExif`, options)
      this.log.debug(`Successfully retrieved exif data!`, results)
    } catch (error) {
      this.log.error(`Failed to retrieve exif data.`, error)
    }
  }
}
