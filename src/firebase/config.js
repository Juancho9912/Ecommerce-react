// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //initializeApp sirve para inicializar la app
import { getFirestore } from "firebase/firestore"; // importamos getFirestore de firebase/firestore ya que este sirve para inicializar la base de datos
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCDYwYR_0kqSBGtppsfVDzP2WZCKZSwV2Q",
	authDomain: "waxboyshop.firebaseapp.com",
	projectId: "waxboyshop",
	storageBucket: "waxboyshop.appspot.com",
	messagingSenderId: "563228727811",
	appId: "1:563228727811:web:b8d6ed4a801cdf37bccc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // esta variable va a representar a nuestra base de datos
//la exportamos para poder utilizarla en cualquier parte del proyecto importandola desde firebase/config.js