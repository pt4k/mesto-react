import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ isOpen, onClose, card, onDeleteCard }) {
  function handleSubmit(e) {
    e.preventDefault();

    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
    />
  );
}

export default DeleteCardPopup;
