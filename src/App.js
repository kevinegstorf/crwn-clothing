import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./layout/MainLayout";
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
          <Switch>
            <Route exact path="/" component={HomePageWrapper} />
            <Route exact path="/shop" component={ShopPageWrapper} />
            <Route exact path="/contact" component={ContactPageWrapper} />
            <Route
              exact
              path="/sign_in"
              component={SignInAndSignUpPageWrapper}
            />
          </Switch>
        </BrowserRouter>
      </FirebaseAppContextProvider>
    </div>
  );
}

const HomePageWrapper = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};
const SignInAndSignUpPageWrapper = () => {
  return (
    <MainLayout>
      <SignInAndSignUpPage />
    </MainLayout>
  );
};

const ShopPageWrapper = () => {
  return (
    <MainLayout>
      <ShopPage />
    </MainLayout>
  );
};
const ContactPageWrapper = () => {
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
};

export default App;
