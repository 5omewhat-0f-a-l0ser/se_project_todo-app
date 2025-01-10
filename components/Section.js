class Section {
    constructor({ items, renderer, container }) {
       this._items = items;
       this._renderer = renderer;
       this._container = document.querySelector(container);
       console.log(container);
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        })
    }

    addItem(todo) {
        this._container.append(todo);
    }
}

export default Section;