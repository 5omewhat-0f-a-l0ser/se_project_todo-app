class Section {
    constructor({ items, renderer, containerSelector }) {
      this._items = items
      this._renderer = renderer
      this._container = document.querySelector(containerSelector)
      console.log(containerSelector)
    }
  
    renderItems() {
      this._items.forEach((item) => {
        this._renderer(item)
      })
    }
  
    addItem(todo) {
      this._container.append(todo)
    }
  }
  
  export default Section