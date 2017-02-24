import { LogManager } from "aurelia-framework"
import './gallery.scss'

export class Gallery {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }
}
