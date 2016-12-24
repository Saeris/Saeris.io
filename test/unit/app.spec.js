import {App} from '../../src/app'

class RouterStub {
  configure(handler) {
    handler(this)
  }

  map(routes) {
    this.routes = routes
  }

  options(options) {
    this.options = options
  }

  mapUnknownRoutes(error) {
    this.error = error
  }
}

describe(`the App module`, () => {
  var sut
  var mockedRouter

  beforeEach(() => {
    mockedRouter = new RouterStub()
    sut = new App()
    sut.configureRouter(mockedRouter, mockedRouter)
  })

  it(`contains a router property`, () => {
    expect(sut.router).toBeDefined()
  })

  it(`configures the router title`, () => {
    expect(sut.router.title).toEqual(`Saeris.io`)
  })

  it(`configures the root option`, () => {
    expect(sut.router.options.root).toEqual(`/`)
  })

  it(`configures route redirection`, () => {
    expect(sut.router.error).toEqual(`app/routes/public/error/error`)
  })

  it(`should have a public home route`, () => {
    expect(sut.router.routes).toContain(
      { route: [``], name: `home`, moduleId: `app/routes/public/home/home`, nav: false, title: `Home`}
    )
  })

  it(`should have a public error route`, () => {
    expect(sut.router.routes).toContain(
      { route: [`error`], name: `error`, moduleId: `app/routes/public/error/error`, nav: false, title: `Error`}
    )
  })

  it(`should have a public test route`, () => {
    expect(sut.router.routes).toContain(
      { route: [`test`], name: `test`, moduleId: `app/routes/public/test/test`, nav: false, title: `Test`}
    )
  })
})
