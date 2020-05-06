import React from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const FirebaseAppContext = React.createContext({
  firebase: {},
  initializing: true,
});

const FirebaseAppContextProvider = ({ children, config }) => {
  const [firebaseApp, setFirebaseApp] = React.useState({});
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    const app = firebase.initializeApp(config);
    setFirebaseApp(app.firebase_);
    setInitializing(false);
  }, [config]);

  if (initializing) return null;

  return (
    <FirebaseAppContext.Provider
      value={{
        firebase: firebaseApp,
        initializing,
        provider: new firebase.auth.GoogleAuthProvider(),
      }}
    >
      {children}
    </FirebaseAppContext.Provider>
  );
};

export const createUserProfileDocument = async (userAuth, data) => {
  const firestore = firebase.firestore();
  if (!userAuth) return;
  const userRef = firestore.collection("users").doc(userAuth.user.uid);
  console.log(userAuth.user);
  try {
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      await userRef.set({
        name: userAuth.user.displayName,
        email: userAuth.user.email,
        creationTime: userAuth.user.metadata.creationTime,
        ...data,
      });
    }
  } catch (error) {
    console.log(error);
  }
  return userRef;
};

export default FirebaseAppContextProvider;
