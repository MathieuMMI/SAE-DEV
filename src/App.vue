<template>
  <header>
    <icon-logo />
    <FilmIcon class="h-5 w-5 fill-blue-300 stroke-blue-600" />
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/programmation" class="text-blue-600 underline">Programmation</RouterLink>
      <RouterLink to="/artistes" class="text-blue-600 underline">Artistes</RouterLink>
      <RouterLink to="/festival" class="text-blue-600 underline">Festival</RouterLink>
      <RouterLink to="/contact" class="text-blue-600 underline">Contact</RouterLink>
      <RouterLink to="/concert" class="text-blue-600 underline">Concert</RouterLink>
      <RouterLink to="/artiste" class="text-blue-600 underline">Artiste</RouterLink>
      <RouterLink to="/mentions" class="text-blue-600 underline">Mentions</RouterLink>
      
    </nav>
  </header>

  <RouterView />
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>