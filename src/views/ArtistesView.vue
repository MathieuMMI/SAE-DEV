<template>
   <main class="mb-36">
    <h2 class="mt-5 mb-7 text-center text-2xl font-semibold text-black">Artistes</h2>
    <div class="flex justify-center gap-3 md:ml-8 md:mr-8">
      <art-comp />
      <art-comp />
      <art-comp class="hidden md:flex" />
      <art-comp class="hidden lg:flex" />
      <art-comp class="hidden xl:flex" />
    </div>
    <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center gap-3 md:ml-8 md:mr-8">
      <art-comp />
      <art-comp />
      <art-comp class="hidden md:flex" />
      <art-comp class="hidden lg:flex" />
      <art-comp class="hidden xl:flex" />
    </div>
    <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center gap-3 md:ml-8 md:mr-8">
      <art-comp />
      <art-comp />
      <art-comp class="hidden md:flex" />
      <art-comp class="hidden lg:flex" />
      <art-comp class="hidden xl:flex" />
    </div>
  </main>
</template>

<script>
import ArtComp from "../components/ArtComp.vue";
export default {
  components: { ArtComp, },
};
</script>