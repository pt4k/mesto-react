import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {

    const [onEditAvatar, setOpenEditAvatar] = React.useState(false);
    const [onEditProfile, setOpenEditProfile] = React.useState(false);
    const [onAddPlace, setOpenAddPlace] = React.useState(false);
    const [onDeleteCard, setOpenDeleteCard] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    const isEditAvatarPopupOpen = () => { setOpenEditAvatar(true) };
    const isEditProfilePopupOpen = () => { setOpenEditProfile(true) };
    const isAddPlacePopupOpen = () => { setOpenAddPlace(true) };
    const isDeleteCardPopupOpen = () => { setOpenDeleteCard(true) };
    const handleCardClick = (card) => { setSelectedCard(card) };

    const closeAllPopups = () => {
        setOpenEditAvatar(false);
        setOpenEditProfile(false);
        setOpenAddPlace(false);
        setOpenDeleteCard(false);
        setSelectedCard(false);
    }

    return (
    <div className="page">
        <Header />

        <Main 
            onEditAvatar={isEditAvatarPopupOpen} 
            onEditProfile={isEditProfilePopupOpen} 
            onAddPlace={isAddPlacePopupOpen} 
            onDeleteCard={isDeleteCardPopupOpen}
            onCardClick={handleCardClick} />

        <PopupWithForm 
            isOpen={onEditAvatar}
            onClose={closeAllPopups}
            name={'edit-avatar'} 
            title={'Обновить аватар'}
            children={
                <>
                <input className="popup__input popup__input_el_avatar" type="text" name="avatar" placeholder="Аватар" minLength="2" maxLength="200" required />
                <span className="popup__input-error avatar-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
                </>
            } />

        <PopupWithForm 
            isOpen={onEditProfile}
            onClose={closeAllPopups} 
            name={'edit-profile'} 
            title={'Редактировать профиль'} 
            children={
                <>
                <input className="popup__input popup__input_el_first-name" type="text" name="firstname" placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="popup__input-error firstname-input-error"></span>
                <input className="popup__input popup__input_el_about" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
                <span className="popup__input-error about-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
                </>
            } />

       <PopupWithForm 
            isOpen={onAddPlace}
            onClose={closeAllPopups} 
            name={'add-card'} 
            title={'Новое место'}
            children={
                <>
                <input className="popup__input popup__input_el_place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__input-error name-input-error"></span>
                <input className="popup__input popup__input_el_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error link-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
                </>
            } />
        
        <PopupWithForm 
            isOpen={onDeleteCard}
            onClose={closeAllPopups} 
            name={'delete-card'} 
            title={'Вы уверены?'}
            children={
                <>
                <button className="popup__save-button" type="submit">Да</button>
                </>
            } />

         <ImagePopup 
         card={selectedCard}
         onClose={closeAllPopups} />
         
         <Footer />
    </div>
);
}

export default App;