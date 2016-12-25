import './sass/global.scss'

export class App {
  configureRouter(config, router) {
    this.router = router

    config.title = `Saeris.io`
    config.options.root = `/`
    config.map([
      {
        route: [``, `home`],
        name: `home`,
        moduleId: `app/routes/public/home/home`,
        nav: true,
        title: `Home`,
        settings: {
          icon: `home`
        }
      }, {
        route: [`blog`],
        name: `blog`,
        moduleId: `app/routes/public/blog/blog`,
        nav: true,
        title: `Blog`,
        settings: {
          icon: `blog`
        }
      }, {
        route: [`projects`],
        name: `projects`,
        moduleId: `app/routes/public/projects/projects`,
        nav: true,
        title: `Projects`,
        settings: {
          icon: `code`
        }
      }, {
        route: [`photography`],
        name: `photography`,
        moduleId: `app/routes/public/photography/photography`,
        nav: true,
        title: `Photography`,
        settings: {
          icon: `photo`
        }
      }, {
        route: [`resume`],
        name: `resume`,
        moduleId: `app/routes/public/resume/resume`,
        nav: true,
        title: `Resume`,
        settings: {
          icon: `id-card-o`
        }
      }, {
        route: [`error`],
        name: `error`,
        moduleId: `app/routes/public/error/error`,
        nav: false,
        title: `Error`
      }, {
        route: [`test`],
        name: `test`,
        moduleId: `app/routes/public/test/test`,
        nav: false,
        title: `Test`
      }
    ])

    config.mapUnknownRoutes(`app/routes/public/error/error`)
  }
}
