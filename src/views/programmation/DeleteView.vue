<script>
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteView",
  data() {
    return {
      Concert: {
        nom: null, 
        image: null, 
      },

      refConcert: null, 
      imageActuelle: null, 
    };
  },
  mounted() {
    console.log("id concert", this.$route.params.id);
    // Recherche participant concerné
    this.getConcert(this.$route.params.id);
  },

  methods: {
    async getConcert(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", id);
      // Référence du participant concerné
      this.refConcert = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refConcert.exists()) {
        // Si oui on récupère ses données
        this.concert = this.refConcert.data();
        // Mémorisation photoActuelle
        this.imageActuelle = this.concert.image;
      } else {
        this.console.log("Participant inexistant");
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
      let docRef = ref(storage, "prog/" + this.mentions.image);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/programmation");
    },
  },
};
</script>