import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC4E93xi7WgYAhHovuQx_J0JcrcXu4faps",
    authDomain: "music-app-de230.firebaseapp.com",
    projectId: "music-app-de230",
    storageBucket: "music-app-de230.appspot.com",
    appId: "1:648702781981:web:5b93e1631a4d038426f4f4"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage();

db.enablePersistence().catch((error) =>{
    console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export{
    auth, db, usersCollection, storage, songsCollection, commentsCollection
}