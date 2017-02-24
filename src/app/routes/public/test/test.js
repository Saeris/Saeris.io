import { inject, LogManager } from 'aurelia-framework'
import Apollo from '../../../services/apollo'
import query from './test.gql'
import './test.scss'

@inject(Apollo)
export class Test {
  constructor(apollo) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.client = apollo.client
  }

  async attached() {
    let client = this.client
    let result = await client.query({ query })
    this.log.debug(result)
  }
}
