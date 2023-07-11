<template>
  <q-item clickable :to="link">
    <q-item-section v-if="icon" avatar top>
      <q-icon :name="icon" color="secondary" />
    </q-item-section>
    <q-item-section>
      <q-item-label style="font-size: 16px">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
