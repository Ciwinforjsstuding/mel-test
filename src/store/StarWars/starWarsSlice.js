import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUrl } from '../util';

const initialState = {
  heroesListStarWar: [],
  error: null,
  loading: null,
  favorit: [],
  showList: [],
  whichShowList: 'heroesStarWar',
  currentPage: '3',
  pages: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
};

export const fetchHeroesStarWar = createAsyncThunk(
  'starWars/fetchHeroesStarWar',
  async page => {
    try {
      const respons = await fetch(getUrl(page));
      const result = await respons.json();
      return result.results;
    } catch (error) {
      return error;
    }
  }
);

export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    addToFavorit: (state, action) => {
      state.favorit.push(action.payload);
    },
    removeItemForKey: (state, action) => {
      state[action.payload.key] = state[action.payload.key].filter(
        item => item.name !== action.payload.elem.name
      );
    },
    changePagePaginator: (state, action) => {
      state.currentPage = action.payload;
    },
    sortHeroesStarWar: (state, action) => {
      if (action.payload) {
        state.showList.sort((item1, item2) =>
          item1.name < item2.name ? 1 : -1
        );
      }
      if (!action.payload) {
        state.showList.sort((item1, item2) =>
          item1.name > item2.name ? 1 : -1
        );
      }
    },
    changeShowList: (state, action) => {
      state.showList = action.payload;
    },
    changeWhichShowList: (state, action) => {
      state.whichShowList = action.payload;
    },
  },
  extraReducers: {
    [fetchHeroesStarWar.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [fetchHeroesStarWar.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroesListStarWar = action.payload;
      state.showList = action.payload;
    },
    [fetchHeroesStarWar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  addToFavorit,
  changePagePaginator,
  sortHeroesStarWar,
  removeItemForKey,
  changeShowList,
  changeWhichShowList,
} = starWarsSlice.actions;
export default starWarsSlice.reducer;
