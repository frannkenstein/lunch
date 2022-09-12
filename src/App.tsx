import { useEffect, useState, lazy } from 'react';
import './App.css';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseApp } from './Utils/FirebaseUtils';
import Login from './Screen/Login';
const FoodPage = lazy(() => import('./Screen/FoodPage'));

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [uid, setUid] = useState('');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const domain = email?.substring(email.lastIndexOf('@') + 1);
        setDetails(user.displayName);
        if (domain === 'aftershoot.com') {
          setLoggedin(true);
          setUid(user.uid);
        } else {
          alert('Login with aftershoot email');
          signOut(getAuth());
        }
      } else {
        setLoggedin(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      {!loggedin ? <Login /> : <FoodPage userid={uid} name={details} />}
    </div>
  );
};

export default App;
