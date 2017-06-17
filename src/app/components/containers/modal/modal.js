import Store from '../../../services/store'

@customElement(`modal`)
@containerless
@inject(Store)
export class Modal {
  @bindable id = `modal`
  visible = false

  constructor(store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.store.addReducer(`modal`, this.reducer)
    this.subscription = this.state.subscribe(::this.update)
  }

  actions = {
    MODAL_ADD: `MODAL_ADD`,
    MODAL_REMOVE: `MODAL_REMOVE`,
    MODAL_TOGGLE: `MODAL_TOGGLE`
  }

  reducer = ( state = [], action ) => {
    switch (action.type) {
    case this.actions.MODAL_ADD:
      return this.addModal(state, action.payload)
    case this.actions.MODAL_REMOVE:
      return this.removeModal(state, action.payload)
    case this.actions.MODAL_TOGGLE:
      return this.toggleModal(state, action.payload)
    default:
      return state
    }
  }

  addModal(state, payload) {
    if (state.some(modal => modal.id === payload.id)) {
      return state
    }

    return [ ...state, payload  ]
  }

  removeModal(state, id) {
    const modals = state.filter(modal => modal.id !== id)

    return [ ...modals ]
  }

  toggleModal(state, id) {
    const modals = state.map(modal => {
      if (modal.id === id) {
        modal.visible = !modal.visible
      }

      return modal
    })

    return [ ...modals ]
  }

  attached() {
    this.state.dispatch({ type: `MODAL_ADD`, payload: {id: this.id, visible: this.visible} })
    this.update()
  }

  update() {
    const config = this.state.getState().modal.find(modal => modal.id === this.id)
    if (typeof config  !== `undefined`) {
      this.visible = config.visible
      this.log.debug(`Updating Modal ${this.id} visibility...`, this.visible)
    }
  }

  detached() {
    this.state.dispatch({ type: `MODAL_REMOVE`, payload: this.id })
    this.subscription.unsubscribe()
  }

  toggleVisibility() {
    this.state.dispatch({ type: `MODAL_TOGGLE`, payload: this.id })
  }
}
