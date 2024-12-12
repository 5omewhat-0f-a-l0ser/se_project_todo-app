class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    _setEventListeners () {
        //set 'change' on checkboxEL
        
    }


    _generateCheckboxEl () {
        const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        todoCheckboxEl.checked = this._data.complete
        todoCheckboxEl.id = `todo-${this._data.id}`;
        todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    getView() {
        this._todoElement = this._templateElement.content
          .querySelector(".todo")
          .cloneNode(true);

        const todoNameEl = this._todoElement.querySelector(".todo__name");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        const todoDate = this._todoElement.querySelector(".todo__date");
        const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
          
        todoNameEl.textContent = this._data.name;
        
        this._generateCheckboxEl();

        return this._todoElement;
    }
}

export default Todo;