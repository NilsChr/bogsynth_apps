<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs8>
        <apps />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Apps from "@/components/Apps.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    Apps,
  },
});
</script>
