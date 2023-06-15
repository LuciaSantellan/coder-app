import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrickMode } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAttF42xDzKLZ7mTeCodTRSK_JojfXroY4",
  authDomain: "luciabeautystudio.firebaseapp.com",
  projectId: "luciabeautystudio",
  storageBucket: "luciabeautystudio.appspot.com",
  messagingSenderId: "834775657659",
  appId: "1:834775657659:web:78270461f7edb673b28d9e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
