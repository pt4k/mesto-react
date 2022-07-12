import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
 
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value = '';
      }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: inputRef.current.value,
        });
      }

    return (
        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'edit-avatar'} 
            title={'Обновить аватар'}
            children={
                <>
                <input 
                ref={inputRef}
                className="popup__input popup__input_el_avatar" 
                type="text" 
                name="avatar" 
                placeholder="Аватар" 
                minLength="2" 
                maxLength="200" 
                required />
                <span className="popup__input-error avatar-input-error"></span>
                </>
            }
            buttonText={'Сохранить'} />
    )
}

export default EditAvatarPopup;