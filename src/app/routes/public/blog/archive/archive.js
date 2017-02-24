import { LogManager } from "aurelia-framework"
import './archive.scss'

export class Archive {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }
}
