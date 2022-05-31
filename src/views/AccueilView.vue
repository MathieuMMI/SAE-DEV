<template>
  <main>
    <img src="../assets/accueil.jpg" />
    <div class="">
      <h2 class="mt-3 ml-3 text-left text-base font-semibold text-black dark:text-white">Programmation</h2>
      <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center md:ml-8 md:mr-8">
        <prog-comp />
        <prog-comp class="mt-44 md:mt-72" />
        <prog-comp class="hidden lg:flex" />
        <prog-comp class="mt-72 hidden xl:flex" />
      </div>
    </div>
    <div class="mb-28 ml-3 mr-3">
      <h2 class="mt-66 ml-3 text-left text-base font-semibold text-black dark:text-white">Artistes</h2>
      <div class="mt-5 flex justify-center gap-3">
        <art-comp />
        <art-comp />
        <art-comp class="hidden md:flex" />
        <art-comp class="hidden lg:flex" />
        <art-comp class="hidden xl:flex" />
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