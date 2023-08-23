import fire from "../../config/firebase";
import * as types from "../actionsTypes/authActionTypes";

const loginUser = (payload) => {
  return {
    type: types.SIGN_IN,
    payload,
  };
};

const logOutUser = () => {
  return {
    type: types.SIGN_OUT,
  };
};

//action creator

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(
        loginUser({
          uid: user.user.uid,
          email: user.user.email,
          displayName: user.user.displayName,
        })
      );
      setSuccess(true);
    })
    .catch((error) => {
      alert("invalid email and password");
    });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          const currentUser = fire.auth().currentUser;
          dispatch(
            loginUser({
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
            })
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-use") {
        alert("Email already use!");
      }
      if (error.code === "auth/invalid-email") {
        alert("Email Invalid");
      }
      if (error.code === "auth/weak-password") {
        alert("Password weak");
      }
    });
};

export const signOutUser = () => (dispatch) => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch(logOutUser());
    });
};

export const checkIsLoggedIn = () => (dispatch) => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    }
  });
};
