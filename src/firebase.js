import firebase from 'firebase';


const config = {

};

const firebaseInstance = firebase.initializeApp(config);
const settings = {timestampsInSnapshots: true};
firebase.firestore().settings(settings);

export default firebaseInstance;
