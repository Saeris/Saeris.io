import { inject, LogManager } from "aurelia-framework"
import Flickr from '../../../services/flickr'
import './photography.scss'

@inject(Flickr)
export class Photography {
  constructor(flickr) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.api = flickr
  }

  async attached() {
    this.albums = await this.api.getAlbums()
    this.log.debug(`6. Finished fetching albums from Flickr.`, this.albums)
  }
}
