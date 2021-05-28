export const appBarMutations = {
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  SET_VIEWED_APP: "SET_VIEWED_APP",
};

export interface bogsynthApp {
  id: number;
  title: string;
  technologies: [{ title: string }];
  image: string;
}

export interface appBarState {
  searchValue: string;
  apps: bogsynthApp[];
  viewedApp: bogsynthApp;
}

const appBar = {
  state: {
    searchValue: "",
    apps: [],
    viewedApp: null as unknown,
  } as appBarState,
  mutations: {
    SET_SEARCH_VALUE: (state: appBarState, searchValue: string) => {
      state.searchValue = searchValue;
    },
    SET_VIEWED_APP: (state: appBarState, viewedApp: bogsynthApp) => {
      state.viewedApp = viewedApp;
    },
  },
  actions: {},
  getters: {},
};

export default appBar;
