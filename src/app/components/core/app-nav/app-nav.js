import { inject, bindable, customElement, containerless } from 'aurelia-framework'
import Apollo from '../../../services/apollo'
import query from './app-nav.graphql'
import './app-nav.scss'

@customElement(`app-nav`)
@containerless
@inject(Apollo)
export class AppNav {
  @bindable router
  constructor(apollo) {
    this.client = apollo.client
  }

  async attached() {
    let profile = await this.client.query({query: query})
    this.profile = {
      name: profile.data.viewer.name,
      location: profile.data.viewer.location,
      picture: profile.data.viewer.avatarURL
    }
  }
}
