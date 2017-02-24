import { inject } from 'aurelia-framework'
import { createFragment } from 'apollo-client'
import Apollo from '../../../services/apollo'
import query from './test.graphql'
import './test.scss'

@inject(Apollo)
export class Test {
  constructor(apollo) {
    this.client = apollo.client
  }

  async attached() {
    let client = this.client
    let result = await client.query({query: query})
    console.log(result)
  }
}
