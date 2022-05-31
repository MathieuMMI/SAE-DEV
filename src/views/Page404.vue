<template>
  <h2 class="mt-5 text-center text-2xl font-semibold dark:text-white">ERREUR 404 - Page introuvable</h2>
  <div class="mt-7 text-center justify-center md:flex md:gap-3.5">
    <router-link to="/">
      <h3 class="mb-2 text-2xl font-semibold text-black dark:text-white">Accueil</h3>
    </router-link>
    <router-link to="./views/programmation">
      <h3 class="mb-2 text-2xl font-semibold text-black dark:text-white">Programmation</h3>
    </router-link>
    <router-link to="./views/artistes">
      <h3 class="mb-2 text-2xl font-semibold text-black dark:text-white">Artistes</h3>
    </router-link>
    <router-link to="./views/festival">
      <h3 class="mb-2 text-2xl font-semibold text-black dark:text-white">Festival</h3>
    </router-link>
    <router-link to="./views/contact">
      <h3 class="mb-2 text-2xl font-semibold text-black dark:text-white">Formulaire de contact</h3>
    </router-link>
  </div>
  <logo-normal class="m-auto mt-20 mb-[40%] h-[20%] w-[20%]" />
</template>

<script>
import LogoNormal from "../components/LogoNormal.vue";
export default {
  components: { LogoNormal },
};
</script>
