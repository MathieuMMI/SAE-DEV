<template>
  <main>
    <h2 class="mt-3 mb-10 text-center text-2xl font-semibold dark:text-white">Concert d’ouverture</h2>
    <img src="../assets/concert.jpg" class="m-auto w-[70%] rounded-xl" />
    <div class="ml-4 mt-5 mb-32 justify-center gap-[10%] md:ml-0 md:mr-0 md:flex">
      <div>
        <h3 class="mb-2 text-left text-2xl font-semibold text-black dark:text-white">Premier volet</h3>
        <p class="mb-5 text-left text-sm text-black dark:text-white">Le concert débutera..</p>
      </div>
      <div>
        <h3 class="mb-2 text-left text-2xl font-semibold text-black dark:text-white">Second volet</h3>
        <p class="mb-5 text-left text-sm text-black dark:text-white">Nous verrons...</p>
      </div>
      <div>
        <h3 class="mb-2 text-left text-2xl font-semibold text-black dark:text-white">Troisième volet</h3>
        <p class="mb-5 text-left text-sm text-black dark:text-white">Vincent Niclo a été..</p>
      </div>
      <div>
        <h3 class="mb-2 text-left text-2xl font-semibold text-black dark:text-white">Quatrième volet</h3>
        <p class="mb-5 text-left text-sm text-black dark:text-white">Nous verrons...</p>
      </div>
    </div>
    <h2 class="mt-3 mb-10 text-center text-sm text-black dark:text-white">Les artistes présents</h2>
    <div class="mb-36 flex justify-center">
      <router-link to="./views/Artiste"><art-comp class="ml-3" /></router-link>
      <router-link to="./views/Artiste"><art-comp class="ml-3" /></router-link>
    </div>
  </main>
</template>

<script>
import ArtComp from "../components/ArtComp.vue";
export default {
  components: { ArtComp },
};
</script>