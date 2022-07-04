import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__window">
            <h2 className="popup__title">{props.title}</h2> 
            <button className={`popup__close-button popup__close-button_${props.name}`} type="button" aria-label="close" onClick={props.onClose}></button>
            <form className={`popup__form popup__form_type_${props.name}`} name={props.name} noValidate>
                {props.children}
                <button className="popup__save-button" type="submit">{props.buttonText}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;