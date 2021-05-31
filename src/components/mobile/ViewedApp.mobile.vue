<template>
  <v-card>
    <v-toolbar dark color="transparent" flat dense>
      <v-btn icon dark @click="viewedApp = null">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-layout id="header">
        <v-flex x3>
          <!--
          <v-card
            img="https://picsum.photos/90/90"
            height="90"
            width="90"
          ></v-card>
          -->
           <v-card
            :img="viewedApp.image"
            height="90"
            width="90"
          ></v-card>
        </v-flex>
        <v-flex xs7>
          <v-layout>
            <v-flex xs12
              ><label id="title">{{ viewedApp.title }}</label></v-flex
            >
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout class="pt-5 mt-5">
        <v-btn block small color="primary" :href="viewedApp.url">Visit app</v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { STORE_MUTATIONS } from "@/store";

export default {
  computed: {
    viewedApp: {
      get() {
        return this.$store.state.appBar.viewedApp;
      },
      set(val) {
        this.$store.commit(STORE_MUTATIONS.appBar.SET_VIEWED_APP, val);
      },
    },
  },
};
</script>

<style scoped>
#title {
  font-weight: bold;

}
</style>