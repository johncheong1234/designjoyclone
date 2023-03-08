import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scrollPortfolioScrollLeft: 0,
};

export const scrollPortfolioSlice = createSlice({
    name: 'scrollPortfolio',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPortfolioScrollLeft: (state, action) => {
            state.scrollPortfolioScrollLeft = action.payload.scrollLeft;
        }
    },
});

export default scrollPortfolioSlice.reducer;
export const { setPortfolioScrollLeft } = scrollPortfolioSlice.actions;

