<template>
  <header>
    <div class="flex justify-between items-start w-100% h-[70px] lg:h-[90px] xl:h-[170px] relative px-5 pt-5 pb-[11px] bg-amber-400">
      <mobile-logo class="relative bottom-1.5 lg:hidden"/>
      <lg-logo class="relative bottom-1.5 hidden lg:flex xl:hidden"/>
      <logo-normal class="relative bottom-1.5 hidden xl:flex"/>
      <h1 class="text-3xl text-left text-slate-900">
      CANTAND’O
      </h1>
      <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[22px] h-4.5 lg:w-[40px] lg:h-[20px] relative top-2 lg:top-3 xl:hidden"
      preserveAspectRatio="none">
      <line y1="1.5" x2="19" y2="1.5" stroke="#111827" stroke-width="3"></line>
      <line y1="8.5" x2="19" y2="8.5" stroke="#111827" stroke-width="3"></line>
      <line y1="15.5" x2="19" y2="15.5" stroke="#111827" stroke-width="3"></line>
      </svg>
      <nav class="hidden xl:flex">
        <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
        <RouterLink to="/programmation" class="text-blue-600 underline">Programmation</RouterLink>
        <RouterLink to="/artistes" class="text-blue-600 underline">Artistes</RouterLink>
        <RouterLink to="/festival" class="text-blue-600 underline">Festival</RouterLink>
        <RouterLink to="/contact" class="text-blue-600 underline">Contact</RouterLink>
        <RouterLink to="/concert" class="text-blue-600 underline">Concert</RouterLink>
        <RouterLink to="/artiste" class="text-blue-600 underline">Artiste</RouterLink>
        <RouterLink to="/mentions" class="text-blue-600 underline">Mentions</RouterLink>
      </nav>
    </div>
  </header>
  
  <RouterView />
</template>

<script>
import LogoNormal from "./components/LogoNormal.vue";
import MobileLogo from "./components/MobileLogo.vue";
import LgLogo from "./components/LgLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { MobileLogo, LogoNormal, LgLogo },
};
</script>