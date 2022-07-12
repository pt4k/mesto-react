import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
        
        <section className="profile">
            <div className="profile__avatar-overlay">
                <img src={currentUser.avatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
            </div>
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <p className="profile__text">{currentUser.about}</p>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <button aria-label="add" className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements">
            {props.cards.map((item) => (
            <Card 
            card={item} 
            key={item._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete} />))}
        </section>

        </main>
    );
}

export default Main;