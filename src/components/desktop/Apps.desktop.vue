<template>
  <v-layout class="pa-0" justify-space-between>
    <v-flex xs6>
      <viewed-app-desktop v-if="viewedApp" />
    </v-flex>

    <v-flex xs6>
      <v-layout wrap>
        <v-flex
          xs2
          v-for="app in filteredApps"
          :key="app.id"
          class="grid-item ma-5 mb-5 mt-5"
          @click="setFocusApp(app)"
        >
          <v-card
            :img="app.image"
            width="100%"
            height="100%"
            class="grid-item-image"
          >
          </v-card>

          <!--
          <v-img :src="app.image" width="100%"
            height="100%" cover class="grod-item-image"></v-img>
            -->

          <div class="grid-item__title">{{ app.title }}</div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { STORE_MUTATIONS } from "@/store";
import ViewedAppDesktop from "./ViewedApp.desktop.vue";
import BOG_APPS from "../../data/bogApps";

export default {
  components: { ViewedAppDesktop },
  data() {
    return {
      apps: [
        {
          id: -1,
          title: "fuml",
          technologies: [],
        },
        {
          id: -2,
          title: "troubadour",
          technologies: [],
        },
      ],
    };
  },
  methods: {
    setFocusApp(app) {
      this.viewedApp = app;
    },
  },
  computed: {
    smallScreen() {
      return this.$store.state.appBar.isSmallScreen;
    },
    viewedApp: {
      get() {
        return this.$store.state.appBar.viewedApp;
      },
      set(val) {
        this.$store.commit(STORE_MUTATIONS.appBar.SET_VIEWED_APP, val);
      },
    },
    searchValue() {
      return this.$store.state.appBar.searchValue;
    },
    filteredApps() {
      if (this.searchValue == "") return this.apps;

      return this.apps.filter((a) =>
        a.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
  mounted() {
    this.apps = BOG_APPS;
  },
};
</script>

<style scoped>
#grid-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

.grid-item {
  background: #1e1e1e;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  width: 20%;
  height: 250px;
  margin-bottom: 3vw;
  position: relative;
  margin: 50px !important;
}
.grid-item__title {
  color: white;
  font-weight: bold;
  font-size: 0.7vw;
  position: absolute;
  bottom: -1.2vw;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;

  text-overflow: ellipsis;
  overflow: hidden;
  width: 120%;
  white-space: nowrap;
  text-align: center;
}

.grid-item:before {
  content: "";
  float: left;
  padding-top: 100%;
}

@media only screen and (max-width: 500px) {
  .grid-item__title {
    color: white;
    font-weight: bold;
    font-size: 2vw;
    position: absolute;
    bottom: 1vw;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>