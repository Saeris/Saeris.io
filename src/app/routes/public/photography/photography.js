import { inject, LogManager } from "aurelia-framework"
import Flickr from '../../../services/flickr'
import './photography.scss'

@inject(Flickr)
export class Photography {
  constructor(flickr) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.api = flickr
  }

  async bind() {
    this.log.debug(`Fetching remote resources...`)
    try {
      this.albums = await this.api.getAlbums()
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
  }

  attached() {
  }
}
