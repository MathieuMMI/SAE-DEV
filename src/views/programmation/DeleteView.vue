<template>
  <form enctype="multipart/form-data" @submit.prevent="deleteconcert">
    <h2 class="mb-5 ml-2 text-center text-2xl text-black">Suppression d'un participant</h2>
    <div class="text-center">
      <img class="preview img-fluid" :src="imageActuelle" />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Nom</span>
      </div>
      <input class="form-control" placeholder="Nom du concert" v-model="Concert.nom" />
    </div>
    <h3 class="alert alert-warning text-center text-black" role="alert">
      Attention vous allez supprimer ce participant, cette action est irréversible !!
    </h3>
    <div>
      <button type="submit" class="btn btn-dark float-left">Supprimer</button>
      <button class="btn btn-dark float-right">
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
      imageActuelle: null,
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
        this.imageProg = this.concert.image;
      } else {
        this.console.log("Concert inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "prog/" + this.concert.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageProg = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteConcert() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "concert", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "prog/" + this.mentions.image);
      deleteObject(docRef);

      this.$router.push("/programmation");
    },
  },
};
</script>