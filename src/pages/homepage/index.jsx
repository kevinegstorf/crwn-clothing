import React from "react";
import "./HomePage.scss";
import { Directory } from "../../components";
import { FirebaseAppContext } from "../../context/FirebaseContext";

export default function HomePage() {
  const { firebase, provider } = React.useContext(FirebaseAppContext);

  console.log(firebase.auth().currentUser);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}
