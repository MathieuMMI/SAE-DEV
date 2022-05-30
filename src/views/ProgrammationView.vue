<template>
  <main class="mb-36">
    <h2 class="mt-5 mb-7 text-center text-base font-semibold text-black">Programmation</h2>
    <div class="flex justify-center gap-3 md:ml-8 md:mr-8">
      <prog-comp />
      <prog-comp class="mt-44 md:mt-72 xl:hidden" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
    </div>
    <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center gap-3 md:ml-8 md:mr-8">
      <prog-comp />
      <prog-comp class="mt-44 md:mt-72 xl:hidden" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
    </div>
    <div class="mb-5 ml-3 mr-3 mt-5 flex justify-center gap-3 md:ml-8 md:mr-8">
      <prog-comp />
      <prog-comp class="mt-44 md:mt-72 xl:hidden" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
      <prog-comp class="hidden xl:flex" />
    </div>
  </main>
</template>

<script>
import ProgComp from "../components/ProgComp.vue";
export default {
  components: { ProgComp },
};
</script>