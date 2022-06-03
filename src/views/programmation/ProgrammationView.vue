<template>
  <h2 class="mt-5 mb-7 text-center text-2xl font-semibold text-black">Programmation</h2>
  <router-link to="createConcert"><p class="float-right text-xl text-black">Créer un nouveau concert</p></router-link>
  <router-link to="UpdateConcert"><p class="text-xl text-black">Modifier un concert</p></router-link>
  <div class="flex justify-center gap-5 md:ml-8 md:mr-8">
    <figure v-for="concert in listeConcert" :key="concert.nom" class="flex flex-col">
      <img :alt="concert.nom" :src="concert.image" class="w-full rounded-tl-3xl rounded-tr-3xl dark:bg-zinc-900" />
      <figcaption class="rounded-b-lg">
        <div class="flex h-auto flex-col bg-gray-900 bg-right">
          <p class="rounded-tl-5 ml-auto rounded-lg bg-white text-right text-sm text-gray-800 dark:bg-black dark:text-white">12/07/22</p>
          <h3 class="mt-1 mb-2 text-center text-base font-semibold text-white">{{ concert.nom }}</h3>
          <p class="ml-3 mb-5 text-left text-sm text-white">Retrouvez toutes les infos sur notre premier concert.</p>
        </div>
      </figcaption>
      <RouterLink :to="{ name: 'DeleteConcert', params: { id: concert.id } }">
        <p class="text-xl text-black">Supprimer un concert</p>
      </RouterLink>
      <RouterLink :to="{ name: 'UpdateConcert', params: { id: concert.id } }">
        <p class="mb-[40%] text-xl text-black">Modifier un concert</p>
      </RouterLink>
    </figure>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeConcert: [],
    };
  },

  mounted() {
    this.getConcert();
  },

  methods: {
    async getConcert() {
      const firestore = getFirestore();
      const dbConcert = collection(firestore, "concert");
      const q = query(dbConcert, orderBy("nom", "desc"));
      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("listeConcert", this.listeConcert);
        this.listeConcert.forEach(function (prog) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "prog/" + prog.image);
          console.log("image du concert", prog.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              prog.image = url;
              console.log("image du concert", prog.image);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>