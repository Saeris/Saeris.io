import { inject, LogManager } from 'aurelia-framework'
import Store from './store'

@inject(Store)
export default class Fetch {
  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.store.addReducer(`fetch`, this.reducer)
  }

  initialState = {
    resources: []
  }

  actions = {
    FETCH_RESOURCE: `FETCH_RESOURCE`
  }

  reducer = ( state = this.initialState, action ) => {
    switch (action.type) {
    case this.actions.FETCH_RESOURCE:
      return { ...state, resources: action.payload }
    default:
      return state
    }
  }

  async request(resource) {
    if (storedAlbums.length) {
      this.log.debug(`Returning existing albums from state...`, storedAlbums)
      return storedAlbums
    }
    try {
      this.log.debug(`Fetching resource: '${resource}'`)
      const json = await fetch(query).then(async response => await response.json())
      this.log.debug(`Received json:`, json)
      return await json
    } catch (error) {
      this.log.error(`Failed to complete request.`, error)
    }
  }
}
