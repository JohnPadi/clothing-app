import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVWCNEvG27m6Vm6VfjViA8AzyyOiGkV-w",
    authDomain: "crown-db-d3d7b.firebaseapp.com",
    databaseURL: "https://crown-db-d3d7b.firebaseio.com",
    projectId: "crown-db-d3d7b",
    storageBucket: "crown-db-d3d7b.appspot.com",
    messagingSenderId: "44407604361",
    appId: "1:44407604361:web:9810205d5b53c6955df258",
    measurementId: "G-YFP4VEEEDD"
  }

  export const createUserProfileDocument = async(userAuth, additionalData) => {
  	if(!userAuth) return;
  	const userRef = firestore.doc(`users/${userAuth.uid}`);
  	const snapShot = await userRef.get();
  	console.log(snapShot);
  	if(!snapShot.exists){
  		const {displayName,email} =userAuth;
  		const createdAt = new Date();
  		try{
  			await userRef.set({
  				displayName, email, createdAt, ...additionalData
  			})
  		}catch(error){
  			console.log('Error creating user', error.message);
  		}
  	}
  	return userRef;
  }

  firebase.initializeApp(config);

  //For Google authentication:
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  //Setting up Google authentication utility:
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;