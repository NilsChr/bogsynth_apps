<template>
  <v-container fill-height>
    <!--
    <v-layout justify-center fill-height>
      <v-flex xs8>
        <apps />
      </v-flex>
    </v-layout>
    -->
    <apps/>
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
