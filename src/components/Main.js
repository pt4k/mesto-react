import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([res, cardList]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCards(cardList);
    })
    .catch((err) => {
        console.log(err);
    })
}, []);

    return (
        <main className="content">
        
        <section className="profile">
            <div className="profile__avatar-overlay">
                <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            </div>
            <div className="profile__info">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__text">{userDescription}</p>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <button aria-label="add" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements">
            {cards.map((item) => (<Card card={item} key={item._id} onCardClick={props.onCardClick} />))}
        </section>

        </main>
    );
}

export default Main;