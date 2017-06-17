import './app-footer.scss'

@customElement(`app-footer`)
@containerless
export class AppFooter {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }
}
