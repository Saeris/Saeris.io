import { customElement, containerless } from 'aurelia-framework'
import './app-footer.scss'
import logo from '../../../../img/logo.svg'

@customElement(`app-footer`)
@containerless
export class AppFooter {
  constructor() {
    this.logo = logo
  }
}
