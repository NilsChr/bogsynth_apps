<template>
  <v-container fill-height fluid>
    <apps-mobile v-if="isMobile"/>
    <apps-desktop v-else />
  </v-container>
</template>

<script lang="ts">
import Apps from "@/components/Apps.vue";
import AppsDesktop from "@/components/desktop/Apps.desktop.vue";
import AppsMobile from "@/components/mobile/Apps.mobile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {
    Apps,
    AppsMobile,
    AppsDesktop,
  },
  computed: {
    smallScreen() {
      return this.$store.state.appBar.isSmallScreen;
    },
    isMobile() {
      return this.$store.state.appBar.isMobile;
    },
  }
});
</script>
