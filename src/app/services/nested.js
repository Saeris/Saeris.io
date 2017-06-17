  const debounce = (func, threshold, execAsap) => {
(($, sr) => {
  const debounce = (func, threshold, execAsap) => {
    let timeout
    return function debounced() {
      const delayed = () => {
        if (!execAsap) func.apply(this, arguments)
        timeout = null
      }
      if (timeout) clearTimeout(timeout)
      else if (execAsap) func.apply(this, arguments)

      timeout = setTimeout(delayed, threshold || 150)
    }
  }
  jQuery.fn[sr] = function(fn) {
    return fn ? this.bind(`resize`, debounce(fn)) : this.trigger(sr)
  }
})(jQuery, `smartresize`)

export default class Nested {
  defaults = {
    selector: `.box`,
    minWidth: 50,
    minColumns: 1,
    gutter: 1,
    resizeToFit: true,
    resizeToFitOptions: { resizeAny: true }
  }

  constructor(element, options) {
    this.log = LogManager.getLogger(`Saeris.io/${this.constructor.name}`)
    this.element = $(element)
    this.box = this.element
    this.options = {...this.defaults, ...options}
    this.elements = []
    this.isResizing = false
    this.update = true
    this.maxy = []

    // add smartresize
    $(window).smartresize(() => this.resize())

    // build box dimensions
    this.setBoxes()
  }

  setBoxes(elements, method) {
    this.idCounter = 0
    this.counter = 0
    this.maxHeight = 0
    this.currWidth = 0
    this.total = this.box.find(this.options.selector)
    this.matrix = {}
    this.gridrow = {}

    const calcWidth = !this.options.centered ? this.box.innerWidth() : $(window).width()

    this.columns = Math.max(this.options.minColumns, parseInt(calcWidth / (this.options.minWidth + this.options.gutter), 10) + 1)

    elements = this.box.children(this.options.selector)

    $.each(elements, (index, el) => {
      $(el).css({
        'top': $(el).position().top,
        'left': $(el).position().left
      }).removeClass(`nested-moved`).attr(`data-box`, this.idCounter)

      this.idCounter++

      // render grid
      this.renderGrid($(el), method)
    })

    // position grid
    if (this.counter === this.total.length) {
      // if option resizeToFit is true
      if (this.options.resizeToFit) {
        this.elements = this.fillGaps()
      }
      this.renderItems(this.elements)
      // reset elements
      this.elements = []
    }
  }

  addMatrixRow(y) {
    if (this.matrix[y]) return false

    this.matrix[y] = {}

    for (let c = 0; c < (this.columns - 1); c++) {
      const x = c * (this.options.minWidth + this.options.gutter)
      this.matrix[y][x] = `false`
    }
  }

  updateMatrix(el) {
    const t = parseInt(el.y, 10)
    const l = parseInt(el.x, 10)
    for (let h = 0; h < el.height; h += (this.options.minWidth + this.options.gutter)) {
      for (let w = 0; w < el.width; w += (this.options.minWidth + this.options.gutter)) {
        let x = l + w
        let y = t + h
        if (!this.matrix[y]) {
          this.addMatrixRow(y)
        }
        this.matrix[y][x] = `true`
      }
    }
  }

  getObjectSize(obj) {
    let size = 0
    $.each(obj, (p, v) => size++)
    return size
  }

  fillGaps() {
    let box = {}

    this.elements.forEach(el => this.updateMatrix(el))

    let elements = this.elements
    elements.sort((a, b) => a.y - b.y)
    elements.reverse()

    // Used to keep the highest y value for a box in memory
    let topY = elements[0].y

    // Used for current y with added offset
    let actualY = 0

    // Current number of rows in matrix
    let rowsLeft = this.getObjectSize(this.matrix)

    $.each(this.matrix, (y, row) => {
      rowsLeft--
      actualY = parseInt(y, 10)
      $.each(row, (x, col) => {
        if (col === `false` && actualY < topY) {
          if (!box.y) box.y = y
          if (!box.x) box.x = x
          if (!box.w) box.w = 0
          if (!box.h) box.h = this.options.minWidth
          box.w += (box.w) ? (this.options.minWidth + this.options.gutter) : this.options.minWidth

          let addonHeight = 0
          for (let r = 1; r < rowsLeft; row++) {
            let z = parseInt(y, 10) + parseInt(r * (this.options.minWidth + this.options.gutter), 10)
            if (this.matrix[z] && this.matrix[z][x] === `false`) {
              addonHeight += (this.options.minWidth + this.options.gutter)
              this.matrix[z][x] = `true`
            } else break
          }

          box.h + (parseInt(addonHeight, 10) / (this.options.minWidth + this.options.gutter) === rowsLeft) ? 0 : parseInt(addonHeight, 10)
          box.ready = true
        } else if (box.ready) {
          $.each(elements, (i, el) => {
            if (box.y <= elements[i].y && (this.options.resizeToFitOptions.resizeAny || box.w <= elements[i].width && box.h <= elements[i].height)) {
              elements.splice(i, 1)
              $(el.element).addClass(`nested-moved`)
              this.elements.push({
                element: $(el.element),
                x: parseInt(box.x, 10),
                y: parseInt(box.y, 10),
                col: i
              })
              return false
            }
          })
          box = {}
        }
      })
    })

    this.elements = elements
    return this.elements
  }

  renderGrid(box, method) {
    this.counter++
    let gridy = 0
    let direction = !method ? `append` : `prepend`

    // Width & height
    let width = box.width()
    let height = box.height()

    // Calculate row and col
    let col = Math.ceil(width / (this.options.minWidth + this.options.gutter))
    let row = Math.ceil(height / (this.options.minWidth + this.options.gutter))

    // lock widest box to match minColumns
    if (col > this.options.minColumns) {
      this.options.minColumns = col
    }

    while (true) {
      for (let y = col; y >= 0; y--) {
        if (this.gridrow[gridy + y]) break
        this.gridrow[gridy + y] = {}
        for (let x = 0; x < this.columns; x++) this.gridrow[gridy + y][x] = false
      }

      for (let column = 0; column < (this.columns - col); column++) {
        // Add default empty matrix, used to calculate and update matrix for each box
        let matrixY = gridy * (this.options.minWidth + this.options.gutter)
        this.addMatrixRow(matrixY)

        let fits = true

        for (let y = 0; y < row; y++) {
          for (let x = 0; x < col; x++) {
            if (!this.gridrow[gridy + y]) break

            if (this.gridrow[gridy + y][column + x]) {
              fits = false
              break
            }
          }
          if (!fits) break
        }
        if (fits) {
          // Set as taken
          for (let y = 0; y < row; y++) {
            for (let x = 0; x < col; x++) {
              if (!this.gridrow[gridy + y]) break
              this.gridrow[gridy + y][column + x] = true
            }
          }

          // Push to elements array
          this.pushItem(box, column * (this.options.minWidth + this.options.gutter), gridy * (this.options.minWidth + this.options.gutter), width, height, col, row, direction)
          return
        }
      }
      gridy++
    }
  }

  pushItem(element, x, y, w, h, cols, rows, method) {
    (method === `prepend`) ?  this.elements.unshift({
      element: element,
      x: x,
      y: y,
      width: w,
      height: h,
      cols: cols,
      rows: rows
    }) : this.elements.push({
      element: element,
      x: x,
      y: y,
      width: w,
      height: h,
      cols: cols,
      rows: rows
    })
  }

  setHeight(elements) {
    elements.forEach(el => {
      const colY = (el.y + el.height)
      if (colY > this.maxHeight) this.maxHeight = colY
    })
    return this.maxHeight
  }

  setWidth(elements) {
    elements.forEach(el => {
      const colX = (el.x + el.width)
      if (colX > this.currWidth) this.currWidth = colX
    })
    return this.currWidth
  }

  renderItems(elements) {
    // set container height and width
    this.box.css(`height`, this.setHeight(elements))

    elements.reverse()

    elements.forEach(el => {
      let currLeft = $(el.element).position().left
      let currTop = $(el.element).position().top

      el.element.attr(`data-y`, currTop).attr(`data-x`, currLeft)

      //if no animation and no queue
      if (currLeft !== el.x || currTop !== el.y) {
        el.element.css({
          'left': el.x,
          'top': el.y
        })
      }
    })
  }

  append(elements) {
    this.isResizing = true
    this.setBoxes(elements, `append`)
    this.isResizing = false
  }

  prepend(elements) {
    this.isResizing = true
    this.setBoxes(elements, `prepend`)
    this.isResizing = false
  }

  resize(elements) {
    if (Object.keys(this.matrix[0]).length % Math.floor(this.element.width() / (this.options.minWidth + this.options.gutter)) > 0) {
      this.isResizing = true
      this.setBoxes(this.box.find(this.options.selector))
      this.isResizing = false
    }
  }

  refresh(options = this.options) {
    this.options = {...this.defaults, ...options}
    this.elements = []
    this.isResizing = false

    // build box dimensions
    this.setBoxes()
  }

  destroy() {
    $(window).unbind(`resize`, () => this.resize())
  }
}
