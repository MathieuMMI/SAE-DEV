<template>
  <header>
    <nav class="w-100% relative flex h-[70px] items-start justify-between bg-amber-400 px-5 pt-5 pb-[11px] lg:h-[90px] xl:h-[170px]">
      <router-link to="/">
        <mobile-logo class="lg:hidden" />
        <lg-logo class="hidden lg:flex xl:hidden" />
        <logo-normal class="hidden xl:flex" />
      </router-link>
      <h1 class="flex-shrink-0 flex-grow-0 text-left text-4xl text-slate-900 md:text-5xl lg:text-6xl xl:hidden">CANTAND’O</h1>
      <menu-icon />
      <ul class="absolute right-[200px] top-[55px] hidden h-6 w-[803px] xl:flex">
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/programmation">Programmation</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/artistes">Artistes</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/festival">Festival</RouterLink></li>
        <li class="ml-10 text-left text-[40px] font-medium text-slate-900"><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main class="dark:bg-black dark:text-white">
    <RouterView />
  </main>
  <footer class="flex h-[200px] w-full flex-col items-center gap-2 bg-stone-900 pt-[15px]">
    <router-link to="./views/mentions">
      <p class="mt-1 h-[13px] flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Formulaire de contact</p>
    </router-link>
    <router-link to="./views/mentions">
      <p class="mt-2 h-[15px] flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Mentions légales</p>
    </router-link>
    <router-link to="./views/mentions">
      <p class="mt-1 h-3 flex-shrink-0 flex-grow-0 text-left text-[15px] font-medium text-white">Nous contacter</p>
    </router-link>
    <img src="./assets/fb.png" class="mt-3 h-[34px] w-[34px] flex-shrink-0 flex-grow-0" />
    <img src="./assets/twi.png" class="h-9 w-10 flex-shrink-0 flex-grow-0" />
  </footer>
</template>

<script>
import LogoNormal from "./components/LogoNormal.vue";
import MobileLogo from "./components/MobileLogo.vue";
import LgLogo from "./components/LgLogo.vue";
import MenuIcon from "./components/icons/MenuIcon.vue";
export default {
  components: { MobileLogo, LogoNormal, LgLogo, MenuIcon },
};
</script>