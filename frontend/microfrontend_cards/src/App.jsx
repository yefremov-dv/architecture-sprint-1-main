import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: microfrontend_cards</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}
function handleCardClick(card) {
  setSelectedCard(card);
}

function handleCardLike(card) {
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  api
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((cards) =>
        cards.map((c) => (c._id === card._id ? newCard : c))
      );
    })
    .catch((err) => console.log(err));
}

function handleAddPlaceSubmit(newCard) {
  api
    .addCard(newCard)
    .then((newCardFull) => {
      setCards([newCardFull, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
}
function handleCardDelete(card) {
  api
    .removeCard(card._id)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    })
    .catch((err) => console.log(err));
}

ReactDOM.render(<App />, document.getElementById("app"));
