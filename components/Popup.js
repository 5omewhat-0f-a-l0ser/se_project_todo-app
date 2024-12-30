class Popup{
    constructor({ popupSelector }){
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    };

    _handleEscapeClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        };
    }

    open() {
        this._popupElement.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscapeClose);
    }

    close() {
        this._popupElement.classList.remove("popup_visible");
        document.addEventListener('DOMContentLoaded', () => {
            document.addEventListener('keydown', this._handleEscapeClose.bind(this));
        });
        console.log("Am I working?");
    }

    setEventListeners() {
        this._popupCloseBtn.addEventListener("click", () => {
            this.close();
        });
    }

}

export default Popup;