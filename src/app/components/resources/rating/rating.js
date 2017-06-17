import './rating.scss'
import img from '../../../../img/rating.svg'

@customElement(`rating`)
@containerless
export class Rating {
  @bindable score

  constructor() {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.img = img
  }

  attached() {
    this.setRating(this.score)
  }

  setRating(score = 0) {
    switch (score) {
    case 1:
      $(this.rating).addClass(`one`)
      break
    case 2:
      $(this.rating).addClass(`two`)
      break
    case 3:
      $(this.rating).addClass(`three`)
      break
    case 4:
      $(this.rating).addClass(`four`)
      break
    case 5:
      $(this.rating).addClass(`five`)
      break
    default:
    }
  }
}
