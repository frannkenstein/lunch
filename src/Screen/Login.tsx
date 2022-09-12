import { useCallback } from 'react';
import './Login.css';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const Login = () => {
  const googleSignIn = useCallback(() => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch(() => {});
  }, []);

  return (
    <button onClick={() => googleSignIn()}>Login with aftershoot Email</button>
  );
};

export default Login;
