import React from "react";

function ImagePopup(props) {
    return (
    <div className={`popup popup_type_view-card ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__window popup__window_view-card">
            <button className="popup__close-button popup__close-button_view-card" type="button" aria-label="close" onClick={props.onClose}></button>
            <img src={`${props.card.link}`} alt="" className="popup__img popup__img_view-card" />
            <h2 className="popup__title popup__title_view-card">{props.card.name}</h2> 
        </div>
    </div>
    )
}

export default ImagePopup;