<template>
  <main class="mb-36">
    <h2 class="mt-5 mb-7 text-center text-2xl font-semibold text-black dark:text-white">Artistes</h2>
    <div class="flex justify-center gap-3 md:ml-8 md:mr-8">
      <figure v-for="artiste in listeArtiste" :key="artiste.nom" class="flex flex-col">
        <div>
          <h4 class="z-10 m-auto w-max rounded-2xl bg-slate-900 p-1 text-base font-semibold text-amber-400">{{ artiste.nom }}</h4>
          <img class="w-full rounded-3xl" :src="artiste.image" :alt="artiste.nom" />
          <figcaption class="rounded-b-lg">
            <p class="z-10 m-auto rounded-2xl bg-slate-900 text-center text-sm text-amber-400">En savoir plus</p>
          </figcaption>
        </div>
      </figure>
    </div>
  </main>
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

import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeArtiste: [],
    };
  },

  mounted() {
    this.getArtiste();
  },

  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const q = query(dbArtiste, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("listeArtiste", this.listeArtiste);
        this.listeArtiste.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "personne/" + personne.image);
          console.log("image de l'artiste", personne.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.image = url;
              console.log("image de l'artiste", personne.image);
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
