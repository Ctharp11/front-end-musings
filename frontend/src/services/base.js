import Rebase from 're-base';
import Firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCIVFWW5F7MvjdrEUPOQHq_NpaA4cIy4Fg",
    authDomain: "front-end-stuff.firebaseapp.com",
    databaseURL: "https://front-end-stuff.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;