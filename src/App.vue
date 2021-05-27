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

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
