import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCiLi7aph3siGjVZy8dNC_Ejva5lPjruh0',
  authDomain: 'music-ea12b.firebaseapp.com',
  projectId: 'music-ea12b',
  storageBucket: 'music-ea12b.appspot.com',
  appId: '1:850661508365:web:be8944a64216dd5648dc44'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, usersCollection }
