<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="300"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <div style="height: 20vh"></div>
      <q-list style="height: 65vh" class="flex column justify-between">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div style="height: 15vh"></div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup >
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
const miniState = ref(true);
const linksList = ref([
  {
    title: "Pedidos",
    caption: "quasar.dev",
    icon: "military_tech",
    link: "/orders",
  },
  {
    title: "Reservas",
    caption: "github.com/quasarframework",
    icon: "more_time",
    link: "bookings",
  },
  {
    title: "Gastos",
    caption: "chat.quasar.dev",
    icon: "shopping_cart",
    link: "",
  },
  {
    title: "Domiciliarios",
    caption: "forum.quasar.dev",
    icon: "sports_motorsports",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Contabilidad",
    caption: "@quasarframework",
    icon: "point_of_sale",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Clientes",
    caption: "@QuasarFramework",
    icon: "hail",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Productos",
    caption: "Community Quasar projects",
    icon: "menu_book",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Configuración",
    caption: "Community Quasar projects",
    icon: "settings",
    link: "https://awesome.quasar.dev",
  },
]);

// const leftDrawerOpen = ref(false);

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
