<template>
  <v-app>
    <v-app-bar app color="transparent" flat>
      <v-layout justify-center>
        <v-card min-width="500">
          <v-text-field
            outlined
            dense
            hide-details
            append-icon="search"
            label="Search apps"
            v-model="searchValue"
          ></v-text-field>
        </v-card>
      </v-layout>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { STORE_MUTATIONS } from "./store";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(val) {
        this.$store.commit(STORE_MUTATIONS.appBar.SET_SEARCH_VALUE, val);
      }
    }
  }
});
</script>
