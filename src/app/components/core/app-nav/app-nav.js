import { bindable, customElement, containerless } from 'aurelia-framework'
import './app-nav.scss'

@customElement(`app-nav`)
@containerless
export class AppNav {
  @bindable router
  constructor() {
  }
}
