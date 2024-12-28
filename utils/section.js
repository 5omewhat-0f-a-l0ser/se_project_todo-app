class Section {
    constructor({ items, renderer, containerSelector }) {
       this._items = items;
       this._renderer = renderer;
       this._containerSelector = document.querySelector(containerSelector);
    }

    renderItems() {
        this._items.foreach((item) => {
            this._renderer(item);
        })
    }

    addItem(containerSelector) {
        this._containerSelector.append(todo);
    }
}
export default Section;