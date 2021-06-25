import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_QcvP6QCgucUHZs-w9cBRU_nQFtt5NgA",
    authDomain: "fir-88bc4.firebaseapp.com",
    projectId: "fir-88bc4",
    storageBucket: "fir-88bc4.appspot.com",
    messagingSenderId: "834261088999",
    appId: "1:834261088999:web:4b21cc237b336baa658042",
    measurementId: "G-C39ZZSV1DS"
  };

export default firebase.initializeApp(firebaseConfig)