import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scrollPortfolioScrollLeft: 0,
};

export const scrollPortfolioSlice = createSlice({
    name: 'scrollPortfolio',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // increment: (state) => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   state.value += 1;
        // },

        setPortfolioScrollLeft: (state, action) => {
            state.scrollPortfolioScrollLeft = action.payload.scrollLeft;
        }
    },
});

export default scrollPortfolioSlice.reducer;
export const { setPortfolioScrollLeft } = scrollPortfolioSlice.actions;

