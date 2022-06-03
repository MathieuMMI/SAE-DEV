<template>
  <h2 class="mt-5 mb-7 text-center text-2xl font-semibold text-black dark:text-white">Connexion</h2>
  <form @submit.prevent="onCnx">
    <h3 class="text-xl">E-mail</h3>
    <input class="form-control" placeholder="Adresse mail" type="email" v-model="user.email" required />
    <h3 class="text-xl">Mot de passe</h3>
    <input class="form-control" placeholder="Mot de passe" :type="type" v-model="user.password" required />
    <div class="alert alert-warning" role="alert">
      {{ message }}
    </div>
    <button type="submit" class="btn btn-dark float-left">Connexion</button>
    <button type="button" class="btn btn-dark float-right" @click="onDcnx()">Deconnexion</button>
  </form>
</template>
<script>
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from '../main.js';

export default {
  name: "MonCompte",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null, 
      view: false, 
      type: "password", 
      imageData: null, 
    };
  },
  mounted() {
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    // Se deconnecter
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          // Mise à jour du message
          this.message = "User non connecté";
          // Ré initialisation des champs
          this.user = {
            email: null,
            password: null,
          };
          // Emission évènement de déconnexion
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Affiche/masque le champs password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
