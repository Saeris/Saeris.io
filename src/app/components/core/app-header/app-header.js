import { customElement, containerless, LogManager, bindable } from 'aurelia-framework'
import './app-header.scss'

@customElement(`app-header`)
@containerless
export class AppHeader {
  @bindable config
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }
}
