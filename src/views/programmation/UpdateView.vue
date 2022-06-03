<template>
  <form enctype="multipart/form-data" @submit.prevent="updateConcert">
    <h2 class="mb-5 ml-2 mt-10 text-center text-2xl text-black">Mise à jour concert</h2>
    <div class="input-group text-center">
      <div class="input-group-prepend text-center">
        <p class="text-center text-xl">Nom</p>
      </div>
      <input class="form-control text-amber-600 text-center" placeholder="Nom du concert" v-model="concert.nom" required />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <p class="text-center text-xl">Photo</p>
      </div>
      <div class="custom-file text-center">
        <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
      </div>
    </div>
    <div class="mt-10 grid text-center">
      <button type="submit" class="">Modifier</button>
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
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null,
      listePays: [],
      concert: {
        nom: null,
        image: null,
      },

      refConcert: null,
      imgModifiee: false,
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
        this.imageActuelle = this.concert.image;
      } else {
        this.console.log("Concert inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "prog/" + this.concert.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.concert.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateConcert() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "prog/" + this.imageActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "prog/" + this.concert.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.concert.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "concert", this.$route.params.id), this.concert);
      this.$router.push("/programmation");
    },
  },
};
</script>