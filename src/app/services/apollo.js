import ApolloClient, { createNetworkInterface } from 'apollo-client'
import config from '../../config/app.config'

export default class Apollo {
  constructor() {
    // http://dev.apollodata.com/core/network.html

    // Configure the client to use the api provider from our api config
    let networkInterface = createNetworkInterface({ uri: config.api.uri })

    // Add authorization tokens to our request headers before making calls to the api
    networkInterface.use([{
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}
        }
        req.options.headers.authorization = `bearer ${config.api.token}`
        next()
      }
    }])

    this.client = new ApolloClient({ networkInterface })
  }
}
