import Store from './app/services/store'
import './sass/global.scss'

@inject(EventAggregator, Store)
export class App {
  constructor(ea, store) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.ea = ea
    this.store = store
    this.state = store.state
  }

  attached() {
    this.id = this.router.currentInstruction.config.name
    this.subscription = this.ea.subscribe(`router:navigation:success`, ::this.navigationSuccess)
  }

  detached() {
    this.subscription.dispose()
  }

  navigationSuccess({ instruction }) {
    this.id = instruction.config.name
  }

  configureRouter(config, router) {
    this.router = router

    config.title = `Saeris.io`
    config.options.pushState = true
    config.options.root = `/`
    config.map([
      {
        route: [`home`],
        name: `home`,
        moduleId: `app/routes/public/home/home`,
        nav: false,
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
          icon: `rss`
        }
      }, {
        route: [`projects`],
        name: `projects`,
        moduleId: `app/routes/public/projects/projects`,
        nav: false,
        title: `Projects`,
        settings: {
          icon: `code`
        }
      }, {
        route: [`photography`],
        name: `photography`,
        moduleId: `app/routes/public/photography/photography`,
        nav: false,
        title: `Photography`,
        settings: {
          icon: `camera-retro`
        }
      }, {
        route: [`photography/:id/`],
        name: `gallery`,
        moduleId: `app/routes/public/photography/gallery/gallery`,
        nav: false,
        title: `Gallery`
      }, {
        route: [``, `resume`],
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
