import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../configs/firebaseConfig";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL, uid } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        userId: uid,
        email: email,
        image: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      const signedInUser = {
        error: error.message,
      };
      return signedInUser;
    });
};

export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const { displayName, email, photoURL, uid } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        userId: uid,
        email: email,
        image: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((error) => {
      const signedInUser = {
        error: error.message,
      };
      return signedInUser;
    });
};
