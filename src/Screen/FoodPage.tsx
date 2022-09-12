import React, { useEffect, useState } from 'react';
import './FoodPage.css';
import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseApp } from '../Utils/FirebaseUtils';
import Food from '../assets/food.jpeg';

const FoodPage = (props: any) => {
  const [userPresent, setUserPresent] = useState({
    loading: true,
    show: false,
  });
  const [choose, setChoose] = useState({ yes: false, no: false });
  const [length, setLength] = useState(0);
  const db = getFirestore(firebaseApp);
  const [stored, setStoredName] = useState([]);
  const [title, settitle] = useState('Submit');

  const getData = async () => {
    const docRef = doc(db, 'food', 'WYjtCaQCSxEKZN6eqlVP');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const val = docSnap.data().names;

      setLength(val.length - 1);

      if (val.includes(props.name)) {
        setUserPresent({ loading: false, show: false });
      } else {
        setUserPresent({ loading: false, show: true });
        setStoredName(docSnap.data().names);
      }
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const chooseFood = (val: boolean) => {
    if (val) {
      setChoose({ yes: true, no: false });
    } else {
      setChoose({ yes: false, no: true });
    }
  };

  const submit = async () => {
    settitle('Saving...');
    await setDoc(
      doc(db, 'food', 'WYjtCaQCSxEKZN6eqlVP'),
      {
        names: [...stored, props.name],
      },
      {
        merge: true,
      }
    )
      .then((res) => {
        setUserPresent({ loading: false, show: false });
        settitle('Done');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='foodPage'>
      {userPresent.loading ? (
        <img src={Food} />
      ) : userPresent.show ? (
        <>
          <div className='foodPageHeading'>{props.name},</div>
          <div className='foodPageHeading'>Want lunch for Tomorrow?</div>
          <div className='foodButtonContainer'>
            <button
              className='foodButton'
              disabled={choose.yes}
              onClick={() => chooseFood(true)}
            >
              Yes
            </button>

            {choose.yes && (
              <button
                className='foodButton'
                disabled={choose.no}
                onClick={() => chooseFood(false)}
              >
                No
              </button>
            )}
          </div>

          {choose.yes && (
            <button className='foodButton' onClick={() => submit()}>
              {title}
            </button>
          )}

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stored.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        </>
      ) : (
        <div className='foodPageHeading'>
          {props.name}, Order have been placed
          <img src={Food} />
        </div>
      )}
      {/* {props.name === 'Aakash Singh' && length} */}
      <button
        className='foodButton'
        style={{ marginTop: '1rem' }}
        onClick={() => {
          signOut(getAuth());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default FoodPage;
