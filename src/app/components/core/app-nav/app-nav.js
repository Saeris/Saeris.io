import { customElement, containerless, inject, bindable, LogManager } from 'aurelia-framework'
import GitHub from 'github-api'
import config from '../../../../config/app.config'
import './app-nav.scss'

@customElement(`app-nav`)
@containerless
@inject(GitHub)
export class AppNav {
  @bindable router
  constructor(github) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.gh = github
    this.user = config.profiles.github
  }

  async bind() {
    try {
      this.log.debug(`Fetching remote resources...`)
      const profile = await this.gh.getUser(this.user).getProfile()
      this.profile = {
        name: profile.data.name,
        location: profile.data.location,
        picture: profile.data.avatar_url
      }
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
  }

  attached() {
  }
}
