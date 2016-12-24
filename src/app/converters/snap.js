import snap from 'snapsvg-cjs'

export class AsSnapValueConverter {
  fromView(svg) {
    return snap(svg)
  }
}
