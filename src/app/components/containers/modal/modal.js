import { customElement, containerless, inject } from 'aurelia-framework'
import Store from '../../../services/store'

@customElement(`modal`)
@containerless
@inject(Store)
export class Modal {
  constructor(store) {
    this.store = store
    this.store.subscribe(this.update.bind(this))
    this.store.addReducer({modal: this.modalReducer()})
  }

  update() {
    this.config = this.store.getState().modal
  }

  attached() {
    this.update()
  }

  modalReducer = ( state = { visible: false }, action ) => {
    switch (action.type) {
    case `OPEN_MODAL`:
      return { ...state, modal: action.payload }
    case `CLOSE_MODAL`:
      return { ...state, modal: action.payload }
    default:
      return state
    }
  }

  close() {
    let modal = { ...this.store.state.getState().modal, visible: false }
    this.store.state.dispatch({ type: `CLOSE_MODAL`, payload: modal })
  }
}
