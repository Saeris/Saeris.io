import GitHub from 'github-api'
import Store from '../../../services/store'
import config from '../../../../config/app.config'
import './profile.scss'

@customElement(`profile`)
@containerless
@inject(Store, GitHub)
export class Profile {
  id = `profile`

  constructor(store, github) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.store = store
    this.state = store.state
    this.store.addReducer(`profile`, this.reducer)
    this.subscription = this.state.subscribe(::this.update)
    this.gh = github
    this.user = config.profiles.github
    this.services = config.services
  }

  initialState = {
    visible: false,
    name: ``,
    location: ``,
    picture: ``,
    bio: ``
  }

  actions = {
    FETCH_PROFILE: `FETCH_PROFILE`
  }

  reducer = ( state = this.initialState, action ) => {
    switch (action.type) {
    case this.actions.FETCH_PROFILE:
      return { ...state, ...action.payload }
    default:
      return state
    }
  }

  async bind() {
    try {
      this.log.debug(`Fetching remote resources...`)
      const results = await this.gh.getUser(this.user).getProfile()
      const profile = {
        name: results.data.name,
        location: results.data.location,
        picture: results.data.avatar_url,
        bio: results.data.bio
      }
      this.state.dispatch({ type: `FETCH_PROFILE`, payload: profile })
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
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

  toggleVisibility() {
    this.state.dispatch({ type: `MODAL_TOGGLE`, payload: this.id })
  }
}
