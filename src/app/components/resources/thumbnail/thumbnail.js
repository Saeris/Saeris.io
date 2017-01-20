import { customElement, containerless, bindable, LogManager } from 'aurelia-framework'
import smartcrop from 'smartcrop'
import './thumbnail.scss'

@customElement(`thumbnail`)
@containerless
export class Thumbnail {
  @bindable src = ``
  @bindable options = {
    width: () => this.img.width * 1,
    height: () => this.img.height * 1,
    minScale: 1,
    ruleOfThirds: true
  }

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
    this.load(this.src)
  }

  load(src) {
    this.img = new Image()
    this.img.crossOrigin = `Anonymous`
    this.img.onload = () => this.analyze(this.options)
    this.img.src = src
  }

  analyze(options) {
    smartcrop.crop(this.img, options, (result) => $(this.container).append(this.draw(result, true)))
  }

  draw(result) {
    let crop = result.topCrop
    this.log.debug(crop)
    let canvas = document.createElement(`canvas`)
    let ctx = canvas.getContext(`2d`)
    canvas.width = crop.width
    canvas.height = crop.width
    ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height)
    return canvas
  }
}
