<template>
  <div class="container m-auto mb-[20%]">
    <form enctype="multipart/form-data" @submit.prevent="createConcert">
      <div class="card bg-dark">
        <h2 class="mt-10 mb-5 ml-2 text-center text-2xl text-black">Création concert</h2>

        <div class="text-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Nom</span>
            </div>
            <input class="form-control text-xl text-amber-600 text-center" placeholder="Nom du concert" v-model="concert.nom" required />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Photo</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
            </div>
          </div>
        </div>
        <div class="grid text-center mt-7">
          <button type="submit" class="mb-2 text-xl">Créer</button>
          <button class="text-xl">
            <router-link to="/programmation">Fermer</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeConcert: [], // Liste des concert pour la nationalité du concert
      concert: {
        // Le concert à créer
        nom: null, // son nom
        image: null, // sa photo (nom du fichier)
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    this.getConcert();
  },
  methods: {
    async getConcert() {
      const firestore = getFirestore();
      const dbConcert = collection(firestore, "concert");
      const q = query(dbConcert, orderBy("nom", "asc"));
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
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.concert.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createConcert() {
      const storage = getStorage();
      const refStorage = ref(storage, "prog/" + this.concert.image);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du concert sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "concert"), this.concert);
      });
      // redirection sur la liste des concert
      this.$router.push("/programmation");
    },
  },
};
</script>
