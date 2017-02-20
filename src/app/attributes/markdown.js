import { inject, customAttribute, LogManager } from 'aurelia-framework'
import { converter as Converter } from 'showdown'

@inject(Element)
@customAttribute(`markdown`)
export class Markdown {
  constructor(element) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.element = element
    this.converter = new Converter()
  }

  valueChanged(newValue, oldValue) {
    this.element.innerHTML = this.converter.makeHtml(newValue)
  }
}
