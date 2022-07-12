import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/api';

function App() {

    const [onEditAvatar, setOpenEditAvatar] = useState(false);
    const [onEditProfile, setOpenEditProfile] = useState(false);
    const [onAddPlace, setOpenAddPlace] = useState(false);
    const [onDeleteCard, setOpenDeleteCard] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

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
        setSelectedCard({name: '', link: ''});
    }

    useEffect(() => {
        api.getUserInfo()
        .then((res) => {
            setCurrentUser(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        api.getInitialCards()
        .then((cardList) => {
            setCards(cardList);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    function handleUpdateUser(newInfo) {
        api.setUserInfo(newInfo)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    };

    function handleUpdateAvatar(newInfo) {
        api.setUserAvatar(newInfo)
        .then((res) => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }
    
    function handleCardDelete(card) {
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.deleteCard(card._id).then(() => {
            setCards(cards => cards.filter((c) => c._id !== card._id));
        });
    }

    function handleAddPlaceSubmit(newCard) {
        console.log(newCard);
        api.addNewCard(newCard)
        .then((res) => {
            setCards([res, ...cards]);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
    <div className="page">
        
        <CurrentUserContext.Provider value={currentUser}>

        <Header />

        <Main 
            onEditAvatar={isEditAvatarPopupOpen} 
            onEditProfile={isEditProfilePopupOpen} 
            onAddPlace={isAddPlacePopupOpen} 
            onDeleteCard={isDeleteCardPopupOpen}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards} />

        <EditAvatarPopup 
            isOpen={onEditAvatar}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

        <EditProfilePopup 
            isOpen={onEditProfile} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

        <AddPlacePopup 
            isOpen={onAddPlace}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit} />
        
        <PopupWithForm 
            isOpen={onDeleteCard}
            onClose={closeAllPopups} 
            name={'delete-card'} 
            title={'Вы уверены?'}
            buttonText={'Да'} />

         <ImagePopup 
         card={selectedCard}
         onClose={closeAllPopups} />
         
         <Footer />

         </CurrentUserContext.Provider>

    </div>
    );
}

export default App;