export default class Album {
  constructor(data, photos) {
    this.id = data.id
    this.title = data.title._content
    this.slug = this.toSlug(this.title)
    this.description = data.description._content
    this.primary = {
      id: data.primary,
      large: data.primary_photo_extras.url_l,
      original: data.primary_photo_extras.url_o
    }
    this.photos = photos
  }

  toSlug(text) {
    return text.toString().toLowerCase()
      // Replace spaces with -
      .replace(/\s+/g, `-`)
      // Remove all non-word chars
      .replace(/[^\w\-]+/g, ``)
      // Replace multiple - with single -
      .replace(/\-\-+/g, `-`)
      // Trim - from start of text
      .replace(/^-+/, ``)
      // Trim - from end of text
      .replace(/-+$/, ``)
  }
}
