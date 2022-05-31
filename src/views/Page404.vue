<template>
  <h2 class="mt-5 text-center text-2xl font-semibold">ERREUR 404 - Page introuvable</h2>
  <div class="mt-7 justify-center md:flex md:gap-3.5">
    <router-link to="/">
      <h3 class="mb-2 text-left text-2xl font-semibold text-black">Accueil</h3>
    </router-link>
    <router-link to="./views/programmation">
      <h3 class="mb-2 text-left text-2xl font-semibold text-black">Programmation</h3>
    </router-link>
    <router-link to="./views/artistes">
      <h3 class="mb-2 text-left text-2xl font-semibold text-black">Artistes</h3>
    </router-link>
    <router-link to="./views/festival">
      <h3 class="mb-2 text-left text-2xl font-semibold text-black">Festival</h3>
    </router-link>
    <router-link to="./views/contact">
      <h3 class="mb-2 text-left text-2xl font-semibold text-black">Formulaire de contact</h3>
    </router-link>
  </div>
  <logo-normal class="mt-20 m-auto w-[20%] h-[20%] mb-[40%]" />
</template>

<script>
import LogoNormal from "../components/LogoNormal.vue";
export default {
  components: { LogoNormal, },
};
</script>
