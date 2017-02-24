export default class Album {
  constructor(data, photos) {
    this.id = data.id
    this.title = data.title._content
    this.description = data.description._content
    this.primary = {
      id: data.primary,
      medium: data.primary_photo_extras.url_m,
      original: data.primary_photo_extras.url_o
    }
    this.photos = photos
  }
}
