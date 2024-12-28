class Section {
    constructor({ items, renderer, containerSelector }) {
       this._items = items;
       this._renderer = renderer;
       this._containerSelector = document.querySelector(containerSelector);
    }

    _renderer() {
        const todo = generateTodo(item);
        todosList.append(todo);
    }

    renderItems() {
        this._items.foreach((item) => {
            this._renderer(item);
        })
    }

    addItem(element) {
        this._containerSelector.append(element);
    }
}
export default Section;