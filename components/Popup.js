class Popup{
    constructor({ popupSelector }){
        this._popupSelector = document.querySelector(popupSelector);
    };

    open() {
        this._popupSelector.classList.add("popup_visible");
    }
}

export default Popup;