<template>
  <header>
    <div class="flex justify-between items-start w-100% h-[70px] lg:h-[90px] xl:h-[170px] relative px-5 pt-5 pb-[11px] bg-amber-400">
      <mobile-logo class="relative bottom-1.5 lg:hidden"/>
      <lg-logo class="relative bottom-1.5 hidden lg:flex xl:hidden"/>
      <logo-normal class="relative bottom-1.5 hidden xl:flex"/>
      <h1 class="text-3xl text-left text-slate-900">
      CANTAND’O
      </h1>
      <menu-icon />
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
import MenuIcon from "./components/icons/MenuIcon.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { MobileLogo, LogoNormal, LgLogo, MenuIcon },
};
</script>