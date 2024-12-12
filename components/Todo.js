class Todo {
    constructor(data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    getView() {
        this._todoElement = this._templateElement.content
          .querySelector(".todo")
          .cloneNode(true);

          const todoNameEl = this._todoElement.querySelector(".todo__name");
          const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
          const todoLabel = this._todoElement.querySelector(".todo__label");
          const todoDate = this._todoElement.querySelector(".todo__date");
          const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
          

        todoNameEl.textContent = this._data.name;
        // todo - assign completed status
        todoCheckboxEl.checked = this._data.completed;

        todoCheckboxEl.id = `todo-${data.id}`;
        todoLabel.setAttribute("for", `todo-${data.id}`);

        console.log(this._templateElement); // Check the template element
        console.log(this._templateElement.content.querySelector(".todo")); // Check the .todo element
        

        return this._todoElement;
    }
}

export default Todo;