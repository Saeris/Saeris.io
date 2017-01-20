import { children } from 'aurelia-framework'
import Nested from '../../../services/nested'

@customElement(`masonry`)
export class Masonry {
  @bindable album
  @children(`.box`) boxes

  classes = [`size31`, `size21`, `size32`, ``, `size23`, `size12`, `size13`]
  ratios = [3, 2, 1.5, 1, 0.666, 0.5, 0.333]

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  boxesChanged(newValue, oldValue) {
    this.nested = new Nested(this.container, {minWidth: 200, gutter: 0, animate: false})
  }

  detached() {
    this.nested.destroy()
  }

  setBoxSize(photo) {
    const width = photo.width
    const height = photo.height
    const ratio = width / height
    const matchedRatio = parseFloat(this.closestRatio(ratio, this.ratios))
    let className = this.classes[this.ratios.indexOf(matchedRatio)]
    if (matchedRatio === 1) {
      let coinflip = Math.floor(Math.random() * 2)
      if (coinflip) {
        className = `size22`
      }
    }
    return className
  }

  closestRatio(num, arr) {
    let curr = arr[0]
    let diff = Math.abs(num - curr)
    for (let val = 0; val < arr.length; val++) {
      let newdiff = Math.abs(num - arr[val])
      if (newdiff < diff) {
        diff = newdiff
        curr = arr[val]
      }
    }
    return curr
  }
}
