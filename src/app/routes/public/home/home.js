import { LogManager } from "aurelia-framework"
import './home.scss'

export class Home {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  attached() {
  }
}
