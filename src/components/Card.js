function Card(props) {

    function handleSelectedCardClick() {
        props.onCardClick(props.card);
      }  

    return (
        <figure className="element">
            <button className="element__button-delete" type="button" aria-label="delete"></button>
            <img src={`${props.card.link}`} alt={`${props.card.name}`} className="element__img" onClick={handleSelectedCardClick} />
            <figcaption className="element__caption">
                <h2 className="element__text">{`${props.card.name}`}</h2>
                <div className="element__like">
                    <button className="element__button-like" type="button" aria-label="like"></button>
                    <p className="element__like-counter">{`${props.card.likes.length}`}</p>
                </div>
            </figcaption>
        </figure>
    );
}

export default Card;