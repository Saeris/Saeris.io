import { bindable, customElement, containerless } from 'aurelia-framework'
import './app-header.scss'
import logo from '../../../../img/logo.svg'

@customElement(`app-header`)
@containerless
export class AppHeader {
  @bindable config
  constructor() {
    this.logo = logo
  }
}
