import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_FIREBASE_APPID,
// }
const firebaseConfig = {
	apiKey: "AIzaSyBb-pG5n97WbycKYx_sAZV_sIS6Mt_Z7rM",
  authDomain: "foryoucrespo.firebaseapp.com",
  projectId: "foryoucrespo",
  storageBucket: "foryoucrespo.appspot.com",
  messagingSenderId: "359189714410",
  appId: "1:359189714410:web:b92603be43cc3592294e93"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig),
	db = getFirestore(app)

export default db
