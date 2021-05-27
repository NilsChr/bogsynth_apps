export const appBarMutations = {
    SET_SEARCH_VALUE: 'SET_SEARCH_VALUE'
}

export interface appBarState {
    searchValue: string;
}

const appBar = {
  state: {
      searchValue: ''
  } as appBarState,
  mutations: {
    SET_SEARCH_VALUE: (state: appBarState, searchValue: string) => {
        state.searchValue = searchValue;
    } 
  },
  actions: {},
  getters: {},
};

export default appBar;
