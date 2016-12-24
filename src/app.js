import './sass/global.scss'

export class App {
  configureRouter(config, router) {
    this.router = router

    config.title = `Saeris.io`
    config.options.root = `/`
    config.map([
      { route: [``], name: `home`, moduleId: `app/routes/public/home/home`, nav: false, title: `Home`},
      { route: [`error`], name: `error`, moduleId: `app/routes/public/error/error`, nav: false, title: `Error`},
      { route: [`test`], name: `test`, moduleId: `app/routes/public/test/test`, nav: false, title: `Test`}
    ])

    config.mapUnknownRoutes(`app/routes/public/error/error`)
  }
}
