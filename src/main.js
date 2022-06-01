import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1tEd162rheq1E6ir7WTK1rD-mC4B5TaU",
  authDomain: "bouque-sae-dev-cantando.firebaseapp.com",
  projectId: "bouque-sae-dev-cantando",
  storageBucket: "bouque-sae-dev-cantando.appspot.com",
  messagingSenderId: "355819538157",
  appId: "1:355819538157:web:595f586326a9a76d806ee4"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
