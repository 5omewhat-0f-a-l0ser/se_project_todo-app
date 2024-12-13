class FormValidate {
    constructor(settings, formEl) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
    }

    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector),
          );
          this._buttonElement = this._formEl.querySelector(
            this._submitButtonSelector,
          );
          this._toggleButtonState(this._inputList, this._buttonElement);
          this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(this._formEl, inputElement);
              this._toggleButtonState(this._inputList, this._buttonElement);
            });
        });
    }

    _checkInputValidity = (this._formEl, inputElement) => {
        if (!inputElement.validity.valid) {
          _showInputError(
            this._formEl,
            inputElement,
            inputElement
          );
        } else {
          _hideInputError(this._formEl, inputElement);
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    };

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
          }
    }


    enableValidation = () => {
        this.formEl = document.querySelector(this._formSelector);
        this._formEl.addEventListener("submit", (evt) => {
          evt.preventDefault();
    });

    this._setEventListeners();
    };
      

    
}



export default FormValidate;


//@@ -0,0 +1,72 @@
//const showInputError = (this._formEl, inputElement, errorMessage, settings) => {
//  const errorElementId = `#${inputElement.id}-error`;
//  const errorElement = this._formEl.querySelector(errorElementId);
//  inputElement.classList.add(settings.inputErrorClass);
//  errorElement.textContent = errorMessage;
//  errorElement.classList.add(settings.errorClass);
//};
//const hideInputError = (this._formEl, inputElement, settings) => {
//  const errorElementId = `#${inputElement.id}-error`;
//  const errorElement = this._formEl.querySelector(errorElementId);
//  inputElement.classList.remove(settings.inputErrorClass);
//  errorElement.classList.remove(settings.errorClass);
//  errorElement.textContent = "";
//};
//enableValidation(validationConfig);