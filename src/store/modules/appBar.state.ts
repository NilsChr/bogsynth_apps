export const appBarMutations = {
  SET_IS_MOBILE: "SET_IS_MOBILE",
  SET_SMALL_SCREEN: "SET_SMALL_SCREEN",
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
  isSmallScreen: boolean;
  isMobile: boolean;
  searchValue: string;
  apps: bogsynthApp[];
  viewedApp: bogsynthApp;
}

const appBar = {
  state: {
    isSmallScreen: false,
    isMobile: false,
    searchValue: "",
    apps: [],
    viewedApp: null as unknown,
  } as appBarState,
  mutations: {
    SET_IS_MOBILE: (state: appBarState, isMobile: boolean) => {
      state.isMobile = isMobile;
    },
    SET_SMALL_SCREEN: (state: appBarState, isSmallScreen: boolean) => {
      state.isSmallScreen = isSmallScreen;
    },
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
