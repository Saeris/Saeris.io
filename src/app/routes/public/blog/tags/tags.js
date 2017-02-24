import { LogManager } from "aurelia-framework"
import './tags.scss'

export class Tags {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }
}
