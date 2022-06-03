import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

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

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')

