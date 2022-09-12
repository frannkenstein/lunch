import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBFzvwuzT1KjUcCFQSW5KnFhEPDx9CKI7s',
  authDomain: 'lunch-e91b2.firebaseapp.com',
  projectId: 'lunch-e91b2',
  storageBucket: 'lunch-e91b2.appspot.com',
  messagingSenderId: '833990154478',
  appId: '1:833990154478:web:33344ea7b0cb469fba7bff',
  measurementId: 'G-PLWGLTQZ3X',
};

export const firebaseApp = initializeApp(firebaseConfig);
