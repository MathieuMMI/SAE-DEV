import { createRouter, createWebHistory } from 'vue-router'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import AccueilView from '../views/AccueilView.vue'
import CompteView from '../views/CompteView.vue'
import ProgrammationView from '../views/programmation/ProgrammationView.vue'
import ProgrammationrView from '../views/ProgrammationrView.vue'
import CreateConcert from '../views/programmation/CreateView.vue'
import UpdateConcert from '../views/programmation/UpdateView.vue'
import DeleteConcert from '../views/programmation/DeleteView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import Artistes2View from '../views/Artistes2View.vue'
import ArtistesrView from '../views/ArtistesrView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsView from '../views/MentionsView.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/compte', name: 'Compte', component: CompteView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/programmationr', name: 'Programmationr', component: ProgrammationrView },
    { path: '/createConcert', name: 'CreateConcert', component: CreateConcert, beforeEnter: guard },
    { path: '/updateConcert/:id', name: 'UpdateConcert', component: UpdateConcert, beforeEnter: guard },
    { path: '/deleteConcert/:id', name: 'DeleteConcert', component: DeleteConcert, beforeEnter: guard },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/artistes2', name: 'Artistes2', component: Artistes2View, beforeEnter: guard },
    { path: '/artistesr', name: 'Artistesr', component: ArtistesrView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/artiste', name: 'Artiste', component: ArtisteView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/:pathMatch(.*)*', name: 'Page404', component: Page404 },
  ]
})

function guard(to, from, next) {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('router OK => user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          next(to.params.name);
          return;
        } else {
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "Accueil" });
          return;
        }
      })
    } else {
      console.log('router NOK => user ', user);
      next({ name: "Accuei" });
    }
  });
}

export default router
