import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const placeRef = useRef();
    const linkRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onAddCard({
            name: placeRef.current.value,
            link: linkRef.current.value
          });  
    }


    return (
        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose} 
            onSubmit={handleSubmit}
            name={'add-card'} 
            title={'Новое место'}
            children={
                <>
                <input 
                ref={placeRef}
                className="popup__input popup__input_el_place" 
                type="text" 
                name="name" 
                placeholder="Название" 
                minLength="2" 
                maxLength="30" 
                required />
                <span className="popup__input-error name-input-error"></span>
                <input 
                ref={linkRef}
                className="popup__input popup__input_el_link" 
                type="url" 
                name="link" 
                placeholder="Ссылка на картинку" 
                required />
                <span className="popup__input-error link-input-error"></span>
                </>
            }
            buttonText={'Сохранить'} />
    )
}

export default AddPlacePopup;