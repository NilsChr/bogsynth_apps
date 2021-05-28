<template>
  <v-card flat color="transparent" id="desktop">
    <v-container fluid>
      <v-layout id="header" wrap>
        <v-flex xs12>
          <v-layout justify-center>
            <!--
            <v-img
              src="https://picsum.photos/1000"
              height="250"
              width="250"
              contain
              id="desktop--image"
            >
            </v-img>
            -->
            <v-card
              img="https://picsum.photos/1000"
              height="250"
              width="250"
            ></v-card>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout justify-center>
            <label id="title">
              {{ viewedApp.title }}
            </label>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout class="pt-5 mt-5">
        <v-btn block small color="primary">Visit app</v-btn>
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
#desktop--image {
  border-radius: 5px;
  overflow: hidden;
}

#title {
  font-weight: bold;
  font-size: 2vh;
}
</style>