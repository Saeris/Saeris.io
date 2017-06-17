import Store from '../../../services/store'
import './app-header.scss'

@customElement(`app-header`)
@containerless
@inject(EventAggregator, Store)
export class AppHeader {
  @bindable router
  @bindable config

  constructor(ea, store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.ea = ea
    this.store = store
    this.state = store.state
    this.state.subscribe(::this.update)
  }

  attached() {
    this.update()
    this.title = this.router.currentInstruction.config.title
    this.subscription = this.ea.subscribe(`router:navigation:success`, ::this.navigationSuccess)
  }

  update() {
    this.profile = this.state.getState().profile
  }

  detached() {
    this.subscription.dispose()
  }

  navigationSuccess({ instruction }) {
    this.title = instruction.config.title
  }

  toggleNavigation() {
    this.state.dispatch({ type: `DRAWER_TOGGLE`, payload: `navigation` })
  }

  openProfile() {
    this.state.dispatch({ type: `MODAL_TOGGLE`, payload: `profile` })
  }
}
