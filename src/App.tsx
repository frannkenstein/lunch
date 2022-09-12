import { useEffect, useState } from 'react';
import './App.css';
import FoodPage from './Screen/FoodPage';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Login from './Screen/Login';
import { firebaseApp } from './Utils/FirebaseUtils';

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
