import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { FirebaseAppContext } from "../../context/FirebaseContext";

export function Header() {
  const { firebase } = React.useContext(FirebaseAppContext);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(true);
        console.log("succes signout");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {loggedIn ? (
          <Link className="option" to="/sign_in">
            SIGN IN
          </Link>
        ) : (
          <Link className="option" onClick={logout} to={"/sign_in"}>
            SIGN OUT
          </Link>
        )}
      </div>
    </div>
  );
}
