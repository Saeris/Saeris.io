import { LogManager } from "aurelia-framework"
import './search.scss'

export class Search {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }
}
