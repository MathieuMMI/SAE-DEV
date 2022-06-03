# Projet basique Vue/router/Vite/Tailwind

* [Installation de Vue avec Vite comme "build tool"](https://vuejs.org/guide/quick-start.html#with-build-tools)
* [Vue router](https://router.vuejs.org/guide/)
* [Tailwind](https://tailwindcss.com/docs/guides/vite)
    * avec [plugin pour Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme) pour trier les classes TW automatiquement.
* [HeroIcons pour Vue 3](https://github.com/tailwindlabs/heroicons#vue)

ArtisteView = Liste avec image sans modification
ProgrammationView = Liste complexe,mise à jour (création, modification et supression)
Artistes2View = Liste avec mise à jour mais sans image + filter

ArtistesRView = Page sans appel à Firebase uniquement responsive
ProgrammationRView = Page sans appel à Firebase uniquement responsive
Attention : pour ne pas casser le responsive du menu, elles ne sont pas toutes accessibles par le header. Les responsive ne sont accessibles que par l'url.

Fonctions liées au compte uniquement accessible par ordinateur