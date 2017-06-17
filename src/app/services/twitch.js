import { Endpoint } from 'aurelia-api'
import config from '../../config/app.config'

@inject(Endpoint.of(`twitch`))
export default class Twitch {
  constructor(twitch) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.api = twitch
    this.user = this.getUserByLogin(config.profiles.twitch.toLowerCase()).then(user => user._id)
  }

  async getUserByLogin(login) {
    try {
      this.log.debug(`Fetching user: '${login}'`)
      const user = await this.api.findOne(`users`, {login})
      this.log.debug(`Received user:`, user.users[0])
      return await user.users[0]
    } catch (error) {
      this.log.error(`Failed to find user.`, error)
    }
  }

  async getUser(id = this.user) {
    try {
      this.log.debug(`Fetching user: '${id}'`)
      const user = await this.api.findOne(`users`, await id)
      this.log.debug(`Received user:`, user)
      return await user
    } catch (error) {
      this.log.error(`Failed to find user.`, error)
    }
  }
}
