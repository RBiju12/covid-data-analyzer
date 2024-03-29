import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCGm_3W_VECnzZANa5pUujUFlcFtsUlyus",
  authDomain: "coviddataanalyzer-aae15.firebaseapp.com",
  databaseURL: "https://coviddataanalyzer-aae15-default-rtdb.firebaseio.com",
  projectId: "coviddataanalyzer-aae15",
  storageBucket: "coviddataanalyzer-aae15.appspot.com",
  messagingSenderId: "56392368600",
  appId: "1:56392368600:web:9707f65aefd7bc02e332ad",
  measurementId: "G-G63VCG5PHE"
};

const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
    }).catch((error) => {
      alert(error)
    });
}

export const dataref = firebase.database();
export default firebase 