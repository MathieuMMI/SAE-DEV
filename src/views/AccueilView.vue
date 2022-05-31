<template>
  <main>
    <img src="../assets/accueil.jpg" />
    <div class="">
      <router-link to="./views/programmation"><h2 class="mt-3 ml-3 text-left text-base font-semibold text-black dark:text-white">Programmation</h2></router-link>
      <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center md:ml-8 md:mr-8">
        <router-link to="./views/Concert"><prog-comp /></router-link>
        <router-link to="./views/Concert"><prog-comp class="mt-44 md:mt-72" /></router-link>
        <router-link to="./views/Concert"><prog-comp class="hidden lg:flex" /></router-link>
        <router-link to="./views/Concert"><prog-comp class="mt-72 hidden xl:flex" /></router-link>
      </div>
    </div>
    <div class="mb-28 ml-3 mr-3">
      <router-link to="./views/artistes"><h2 class="mt-66 ml-3 text-left text-base font-semibold text-black dark:text-white">Artistes</h2></router-link>
      <div class="mt-5 flex justify-center gap-3">
        <router-link to="./views/Artiste"><art-comp /></router-link>
        <router-link to="./views/Artiste"><art-comp /></router-link>
        <router-link to="./views/Artiste"><art-comp class="hidden md:flex" /></router-link>
        <router-link to="./views/Artiste"><art-comp class="hidden lg:flex" /></router-link>
        <router-link to="./views/Artiste"><art-comp class="hidden xl:flex" /></router-link>
      </div>
    </div>
  </main>
</template>

<script>
import ProgComp from "../components/ProgComp.vue";
import ArtComp from "../components/ArtComp.vue";
export default {
  components: { ProgComp, ArtComp },
};
</script>