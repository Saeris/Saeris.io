import Store from '../../../services/store'
import config from '../../../../config/app.config'
import './app-nav.scss'

@customElement(`app-nav`)
@containerless
@inject(Store)
export class AppNav {
  @bindable router
  id = `navigation`

  constructor(store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.subscription = this.state.subscribe(::this.update)
    this.services = config.services
  }

  attached() {
    this.update()
  }

  update() {
    this.profile = this.state.getState().profile
  }

  detached() {
    this.subscription.unsubscribe()
  }

  openProfile() {
    this.state.dispatch({ type: `MODAL_TOGGLE`, payload: `profile` })
  }
}
