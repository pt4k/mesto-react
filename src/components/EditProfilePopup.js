import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]); 

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
      }

      function handleChangeDescription(e) {
        setDescription(e.target.value);
      }

      function handleSubmit(e) {
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
      }
      
    return (
        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose} 
            onSubmit={handleSubmit}
            name={'edit-profile'} 
            title={'Редактировать профиль'} 
            children={
                <>
                <input 
                className="popup__input popup__input_el_first-name" 
                value={name || ""} 
                onChange={handleChangeName} 
                type="text" 
                name="name" 
                placeholder="Имя" 
                minLength="2" 
                maxLength="40" 
                required />
                <span className="popup__input-error firstname-input-error"></span>
                <input 
                className="popup__input popup__input_el_about" 
                value={description || ""} 
                onChange={handleChangeDescription} 
                type="text" 
                name="about" 
                placeholder="О себе" 
                minLength="2" 
                maxLength="200" 
                required />
                <span className="popup__input-error about-input-error"></span>
                </>
            }
            buttonText={'Сохранить'} />
    )
}

export default EditProfilePopup;