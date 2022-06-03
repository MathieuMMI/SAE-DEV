<template>
  <main class="mb-36">
    <h2 class="mt-5 mb-7 text-center text-2xl font-semibold text-black dark:text-white">Artistes 2</h2>
    <form>
      <h6 class="mt-12 text-center">Nouvel artiste</h6>
      <div class="text-center">
        <p class="input-group-text">Libellé</p>
        <input type="text" class="form-control bg-gray-700 text-amber-400" v-model="nom" required />
        <div class="grid">
          <button class="text-center" type="button" @click="createArtiste2()" title="Création">
            <p class="input-group-text text-xl text-black">Ajouter un artiste</p>
          </button>
        </div>
      </div>
    </form>
    <h6 class="mt-12 text-center">Filtrage</h6>
    <div class="text-center">
      <input type="text" class="form-control bg-gray-700 text-center text-xl text-amber-400" v-model="filter" />
    </div>
    <div class="text-center">
      <button class="" type="button" title="Filtrage">
        <p class="text-xl text-black">Filtrer</p>
      </button>
    </div>
    <form v-for="artiste2 in filterByName" :key="artiste2.id">
      <div class="mt-12 text-center">
        <input type="text" class="form-control text-center text-xl" v-model="artiste2.nom" required />
      </div>
      <div class="grid text-center">
        <button class="text-center" type="button" @click="updateArtiste2(artiste2)" title="Modification">
          <p class="input-group-text text-xl text-black">Modifier</p>
        </button>
        <button class="text-center" type="button" @click="deleteArtiste2(artiste2)" title="Suppression">
          <p class="input-group-text text-xl text-black">Supprimer</p>
        </button>
      </div>
    </form>
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

export default {
  data() {
    return {
      listeArtiste2: [],
      nom: null,
      filter: "",
    };
  },
  computed: {
    orderByName: function () {
      return this.listeArtiste2.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByName.filter(function (artiste2) {
          return artiste2.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
  },
  mounted() {
    this.getArtiste2();
  },

  methods: {
    async getArtiste2() {
      const firestore = getFirestore();
      const dbArtiste2 = collection(firestore, "artiste2");
      const query = await onSnapshot(dbArtiste2, (snapshot) => {
        console.log("query", query);
        this.listeArtiste2 = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("listeartiste2", this.listeArtiste2);
      });
    },
    async createArtiste2() {
      const firestore = getFirestore();
      const dbArtiste2 = collection(firestore, "artiste2");
      const docRef = await addDoc(dbArtiste2, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateArtiste2(artiste2) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste2", artiste2.id);
      await updateDoc(docRef, {
        nom: artiste2.nom,
      });
    },
    async deleteArtiste2(artiste2) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste2", artiste2.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
