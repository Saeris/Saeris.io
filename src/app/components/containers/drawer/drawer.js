import { customElement, containerless, inject, bindable, LogManager } from 'aurelia-framework'
import Store from '../../../services/store'

@customElement(`drawer`)
@containerless
@inject(Store)
export class Drawer {
  @bindable id = `drawer`
  open = true

  constructor(store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.store.addReducer(`drawer`, this.reducer)
    this.subscription = this.state.subscribe(::this.update)
  }

  actions = {
    DRAWER_ADD: `DRAWER_ADD`,
    DRAWER_REMOVE: `DRAWER_REMOVE`,
    DRAWER_TOGGLE: `DRAWER_TOGGLE`
  }

  reducer = ( state = [], action ) => {
    switch (action.type) {
    case this.actions.DRAWER_ADD:
      return this.addDrawer(state, action.payload)
    case this.actions.DRAWER_REMOVE:
      return this.removeDrawer(state, action.payload)
    case this.actions.DRAWER_TOGGLE:
      return this.toggleDrawer(state, action.payload)
    default:
      return state
    }
  }

  addDrawer(state, payload) {
    if (state.some(drawer => drawer.id === payload.id)) {
      return state
    }

    return [ ...state, payload  ]
  }

  removeDrawer(state, id) {
    const drawers = state.filter(drawer => drawer.id !== id)

    return [ ...drawers ]
  }

  toggleDrawer(state, id) {
    const drawers = state.map(drawer => {
      if (drawer.id === id) {
        drawer.open = !drawer.open
      }

      return drawer
    })

    return [ ...drawers ]
  }

  attached() {
    this.state.dispatch({ type: `DRAWER_ADD`, payload: {id: this.id, open: this.open} })
    this.update()
  }

  update() {
    const config = this.state.getState().drawer.find(drawer => drawer.id === this.id)
    if (typeof config  !== `undefined`) {
      this.open = config.open
      this.log.debug(`Updating Drawer ${this.id} visibility...`, this.open)
    }
  }

  detached() {
    this.state.dispatch({ type: `DRAWER_REMOVE`, payload: this.id })
    this.subscription.unsubscribe()
  }

  toggleVisibility() {
    this.state.dispatch({ type: `DRAWER_TOGGLE`, payload: this.id })
  }
}
