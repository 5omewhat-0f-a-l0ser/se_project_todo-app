class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    _setEventListeners () {
        this._todoCheckboxEl.addEventListener("change", () => {
            this._data.completed = !this._data.completed;
        });
        //when clicked, change completion from true to false
        this._todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
        });

    }

    _dateEl () {
        //Add the date stuff from index.js
    }

    _deleteEl () {
       this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    }

    _generateCheckboxEl () {
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        this._todoCheckboxEl.checked = this._data.complete
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
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

        this._deleteEl();

        this._setEventListeners();

        return this._todoElement;
    }
}

export default Todo;