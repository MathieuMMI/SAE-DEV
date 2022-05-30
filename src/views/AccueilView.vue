<template>
  <main>
    <img src="public\img\accueil.jpg" />
    <h2 class="mt-3 ml-3 text-left text-base font-semibold text-black">Programmation</h2>
    <div class="mt-5 flex">
      <prog-comp />
      <prog-comp class="relative top-44" />
    </div>
    <h2 class="mt-52 ml-3 text-left text-base font-semibold text-black">Artistes</h2>
    <div class="mt-5 flex justify-center gap-12">
      <art-comp />
      <art-comp />
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