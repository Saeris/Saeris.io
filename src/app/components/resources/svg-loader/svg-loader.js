import './svg-loader.scss'

@customElement(`svg-loader`)
@containerless
export class SVGLoader {
  @bindable src = ``

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
  }

  loadSVG(url) {
    /*
    *  Snap.svg's load function is asynchronous, but doesn't use promises.
    *  So to make things work, wrap the load function in a promise, then use
    *  the Async/Await feature of ES7 to continue working synchronously.
    */
    let fragment
    return new Promise(function(resolve, reject) {
      Snap.load(url, function(loadedFragment) {
        fragment = loadedFragment
        resolve(fragment)
      })
    })
  }

  async bind() {
    let svg = this.svg
    if (this.src) {
      let fragment =  await this.loadSVG(this.src)
      let contents = fragment.select(`svg`)
      let attributes = { preserveAspectRatio: `xMidYMid meet` }
      let attr = [].slice.call(contents.node.attributes)
      attr.forEach(attribute => {
        attributes[attribute.name] = attribute.value
      })
      let children = [].slice.call(contents.node.children)
      children.forEach(child => {
        svg.append(child)
      })
      svg.attr(attributes)
    }
  }
}
