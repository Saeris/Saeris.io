import { inject, LogManager } from "aurelia-framework"
import Flickr from '../services/flickr'

@inject(Flickr)
export default class Photo {
  constructor(photo, flickr) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.api = flickr
    this.id = photo.id
    this.title = photo.title
    this.exif = () => this.getExifData()
    this.square = {
      url: photo.url_q,
      height: photo.height_q,
      width: photo.width_q,
      ratio: this.aspectRatio(photo.height_q, photo.width_q)
    }
    this.thumb = {
      url: photo.url_t,
      height: photo.height_t,
      width: photo.width_t,
      ratio: this.aspectRatio(photo.height_t, photo.width_t)
    }
    this.small = {
      url: photo.url_s,
      height: photo.height_s,
      width: photo.width_s,
      ratio: this.aspectRatio(photo.height_s, photo.width_s)
    }
    this.medium = {
      url: photo.url_m,
      height: photo.height_m,
      width: photo.width_m,
      ratio: this.aspectRatio(photo.height_m, photo.width_m)
    }
    this.large = {
      url: photo.url_l,
      height: photo.height_l,
      width: photo.width_l,
      ratio: this.aspectRatio(photo.height_l, photo.width_l)
    }
    this.original = {
      url: photo.url_o,
      height: photo.height_o,
      width: photo.width_o,
      ratio: this.aspectRatio(photo.height_o, photo.width_o)
    }
  }

  async getExifData() {
    this.exif = await this.api.getPhotoExif(this.id)
    this.log.debug(this.exif)
  }

  getBoxSize() {

  }

  aspectRatio = (a, b) => (b === 0) ? a : this.aspectRatio(b, a % b)
}
