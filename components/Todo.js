class Todo {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateElement = document.querySelector(templateSelector);
    }

    getView() {
        this,_todoElement = this._templateElement.content
          .querySelector(".todo")
          .cloneNode(true);
        const todoNameEl = todoElement.querySelector(".todo__name");
        const todoCheckboxEl = todoElement.querySelector(".todo__completed");
        const todoLabel = todoElement.querySelector(".todo__label");
        const todoDate = todoElement.querySelector(".todo__date");
        const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

        todoNameEl.textContent = this._data.name;
        // todo - assign completed status

        todoCheckboxEl.id = `toso-${data.id}`;
        todoLabel.setAttribute("for", `todo-${data.id}`);
        
        return this._todoElement;
    }
}

export default Todo;