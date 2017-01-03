import 'font-awesome/css/font-awesome.css'
import * as Bluebird from 'bluebird'
import 'whatwg-fetch'

Bluebird.config({ warnings: false })

export async function configure(aurelia) {
  // Config
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    // See documentation on organizing global resources and app features
    // http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/6
    .feature(`app/components/containers`)
    .feature(`app/components/core`)
    .feature(`app/components/resources`)
    .feature(`app/converters`)

  await aurelia.start()
  aurelia.setRoot(`app`)
}
