<template>
  <header>
    <nav class="w-100% relative flex h-[70px] items-start justify-between bg-amber-400 px-5 pt-5 pb-[11px] lg:h-[90px] xl:h-[170px]">
      <div>
        <router-link to="/">
          <mobile-logo class="lg:hidden" />
          <lg-logo class="hidden lg:flex xl:hidden" />
          <logo-normal class="hidden xl:flex" />
        </router-link>
        <button v-if="avatar != null" class="">
          <img class="avatar" :src="avatar" />
        </button>
      </div>
      <h1 class="flex-shrink-0 flex-grow-0 text-center text-4xl text-slate-900 md:text-5xl lg:text-6xl xl:hidden">CANTAND’O</h1>
      <menu-icon />
      <ul class="absolute right-[500px] top-[55px] hidden h-6 w-[803px] xl:flex">
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/programmation">Programmation</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/artistes">Artistes</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/artistes2">Artistes2</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/festival">Festival</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/contact">Contact</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/compte">Compte</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main class="dark:bg-black dark:text-white">
    <RouterView />
  </main>
  <footer class="flex h-[200px] w-full flex-col items-center gap-2 bg-stone-900 pt-[15px]">
    <router-link to="./views/mentions">
      <p class="mt-1 h-[13px] flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Formulaire de contact</p>
    </router-link>
    <router-link to="./views/mentions">
      <p class="mt-2 h-[15px] flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Mentions légales</p>
    </router-link>
    <router-link to="./views/mentions">
      <p class="mt-1 h-3 flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Nous contacter</p>
    </router-link>
    <img src="./assets/fb.png" class="mt-3 h-[34px] w-[34px] flex-shrink-0 flex-grow-0" />
    <img src="./assets/twi.png" class="h-9 w-10 flex-shrink-0 flex-grow-0" />
  </footer>
</template>

<script>
import LogoNormal from "./components/LogoNormal.vue";
import MobileLogo from "./components/MobileLogo.vue";
import LgLogo from "./components/LgLogo.vue";
import MenuIcon from "./components/icons/MenuIcon.vue";

import { getFirestore, collection, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "./main.js";

export default {
  components: { MobileLogo, LogoNormal, LgLogo, MenuIcon },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      name: "Festival",
      avatar: null,
      isAdmin: false,
    };
  },
  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
    });
    this.UserInfo(this.user);
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      this.userInfo = null;
      this.name = "Festival";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
    left: 10rem;
    bottom: 0.5rem;
}
</style>
