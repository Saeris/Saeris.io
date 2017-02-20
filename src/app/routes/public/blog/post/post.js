import { LogManager } from "aurelia-framework"
import './post.scss'

export class Post {
  src = ``

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  activate(params) {
    this.id = params.id
  }

  bind() {
    this.log.debug(`Fetching remote resources...`)
    try {
      this.log.debug(`Successfully retrieved remote resources.`)
    } catch (error) {
      this.log.error(`Failed to fetch remote resources.`, error)
    }
  }

  attached() {
  }
}
