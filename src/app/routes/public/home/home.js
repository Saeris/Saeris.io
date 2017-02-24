import { inject, LogManager } from "aurelia-framework"
import Twitch from '../../../services/twitch'
import './home.scss'

@inject(Twitch)
export class Home {
  constructor(twitch) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.twitch = twitch
  }

  async bind() {
    try {
      this.log.debug(`Fetching remote resources...`)
      const twitch = await this.twitch.getUser()
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
  }

  attached() {
  }
}
