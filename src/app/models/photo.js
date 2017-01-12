export default class Photo {
  constructor(photo) {
    this.id = photo.id
    this.title = photo.title
    this.medium = photo.url_m
    this.original = photo.url_o
  }
}
