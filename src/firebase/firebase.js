/* eslint-disable no-useless-catch */
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.config";

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await updateProfile(user, { displayName: name });
    await sendEmailVerification(user);
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
    return response.user;
  } catch (error) {
    throw error;
  }
};

const loginWithGithub = async () => {
  try {
    const response = await signInWithPopup(auth, githubAuthProvider);
    return response.user;
  } catch (error) {
    throw error;
  }
};

const sendResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  sendResetPassword,
  loginWithGoogle,
  loginWithGithub,
};
