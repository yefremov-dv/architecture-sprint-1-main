import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: microfrontend_users</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}

function handleUpdateAvatar(avatarUpdate) {
  api
    .setUserAvatar(avatarUpdate)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
}
ReactDOM.render(<App />, document.getElementById("app"));
