<template>
  <v-app>
    <!--
    <background />
    -->
    <v-app-bar app color="transparent" flat>
      <div id="bogsynth-logo" v-if="!smallScreen">BOGSYNTH.COM</div>
      <v-container  class="pa-0">
        <v-row no-gutters justify="space-around">
          <v-col md="6" sm="12">
            <v-card >
              <v-text-field
                outlined
                dense
                hide-details
                append-icon="search"
                label="Search apps"
                v-model="searchValue"
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="mt-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import { STORE_MUTATIONS } from "./store";
import Background from "./components/Background.vue";

export default Vue.extend({
  name: "App",
  components: {
    Background,
  },
  data() {
    return {
      width: 0,
    };
  },
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(val) {
        this.$store.commit(STORE_MUTATIONS.appBar.SET_SEARCH_VALUE, val);
      },
    },
    smallScreen() {
      return this.$store.state.appBar.isSmallScreen;
    },
  },
  mounted() {
    this.width = window.innerWidth * 0.8;
    if (this.width > 500) this.width = 500;
    console.log(this.width);
  },
});
</script>
<style scoped>
#app {
  overflow: hidden;
  background-color: #222222;
}

#bogsynth-logo {
  font-weight: bold;
}
</style>
