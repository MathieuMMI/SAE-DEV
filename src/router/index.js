import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsView from '../views/MentionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',              name: 'Accueil',        component: AccueilView },
    { path: '/programmation', name: 'Programmation',  component: ProgrammationView },
    { path: '/artistes',      name: 'Artistes',       component: ArtistesView },
    { path: '/festival',      name: 'Festival',       component: FestivalView },
    { path: '/contact',       name: 'Contact',        component: ContactView },
    { path: '/concert',       name: 'Concert',        component: ConcertView },
    { path: '/artiste',       name: 'Artiste',        component: ArtisteView },
    { path: '/mentions',      name: 'Mentions',       component: MentionsView },
    
    // ici les autre routes
  ]
})

export default router
