import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Header } from "./components";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import FirebaseAppContextProvider from "./context/FirebaseContext";

const {
  REACT_APP_FIREBASE_API_KEY: apiKey,
  REACT_APP_FIREBASE_AUTH_DOMAIN: authDomain,
  REACT_APP_FIREBASE_DATABASE_URL: databaseURL,
  REACT_APP_FIREBASE_PROJECT_ID: projectId,
  REACT_APP_FIREBASE_STPRAGE_BUCKET: storageBucket,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  REACT_APP_FIREBASE_APP_ID: appId,
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

function App() {
  return (
    <div>
      <FirebaseAppContextProvider config={firebaseConfig}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/sign_in" component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </FirebaseAppContextProvider>
    </div>
  );
}

export default App;
