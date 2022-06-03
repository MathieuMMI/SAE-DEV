<template>
  <form enctype="multipart/form-data" @submit.prevent="deleteConcert">
    <h2 class="mb-5 text-center text-2xl text-black">Suppression du concert</h2>
    <img class="preview img-fluid m-auto" :src="imageActuelle" />
    <div class="text-center">
      <div class="input-group-prepend text-center">
        <span class="input-group-text mt-7 text-center">Nom</span>
      </div>
      <input class="form-control text-amber-600 text-center" placeholder="Nom" v-model="Concert.nom" disabled />
      <h3 class="alert alert-warning mt-7 text-center text-xl text-red-500" role="alert">
        Attention vous allez supprimer ce participant, cette action est irréversible !!
      </h3>
    </div>
    <div class="mt-7 grid text-center">
      <button type="submit" class="mb-4">Supprimer</button>
      <button class="mb-[40%]">
        <RouterLink to="/programmation">Fermer</RouterLink>
      </button>
    </div>
  </form>
</template>
<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteView",
  data() {
    return {
      Concert: {
        nom: null,
        image: null,
      },

      refconcert: null,
      ImageActuelle: null,
    };
  },
  mounted() {
    console.log("id concert", this.$route.params.id);
    this.getConcert(this.$route.params.id);
  },

  methods: {
    async getConcert(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", id);
      this.refConcert = await getDoc(docRef);
      if (this.refConcert.exists()) {
        this.concert = this.refConcert.data();
        this.imageActuelle = this.concert.image;
      } else {
        this.console.log("Concert inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "prog/" + this.concert.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteConcert() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "concert", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "prog/" + this.concert.image);
      deleteObject(docRef);

      this.$router.push("/programmation");
    },
  },
};
</script>