import { customElement, children, bindable, LogManager } from 'aurelia-framework'
import Nested from '../../../services/nested'

@customElement(`masonry`)
export class Masonry {
  @bindable album
  @children(`.box`) boxes
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  boxesChanged(newValue, oldValue) {
    this.nested = new Nested(this.container, {minWidth: 200, gutter: 0, animate: false})
  }

  getAspectRatio(w, h, r) {
    return `${w / r}:${h / r}`
  }

  setBoxSize(photo) {
    photo.exif
  }

  detached() {
    this.nested.destroy()
  }
}
