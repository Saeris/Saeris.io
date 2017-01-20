import { inject, LogManager } from 'aurelia-framework'
import Flickr from '../../../../services/flickr'
import Store from '../../../../services/store'
import './gallery.scss'

@inject(Flickr, Store)
export class Gallery {
  constructor(flickr, store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.api = flickr
    this.store = store.state
    this.store.subscribe(this.update.bind(this))
  }

  activate(params) {
    this.albumID = params.id
  }

  bind() {
    this.log.debug(`Fetching remote resources...`)
    try {
      this.api.getAlbumBySlug(`${this.albumID}`)
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
  }

  update() {
    const albums = this.store.getState().flickr.albums
    this.album = albums.filter(album => album.slug === `${this.albumID}`)[0]
  }

  attached() {
    this.update()
  }
}
