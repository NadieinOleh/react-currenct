import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      action.payload.id = state.data.length + 1;

      state.data.push(action.payload);
    },
    editMonth: (state, { payload }) => {
      state.data = state.data.map((data) => {
        if (data.id === payload.id) {
          return {
            ...data,
            selectedMonth: payload.editTitle,
          };
        }

        return data;
      });
    },
    editIncome: (state, { payload }) => {
      state.data = state.data.map((data) => {
        const updatedRemain = payload.editTitle - data.spent;
        const updatedUSD = +(data.rateUSD * updatedRemain).toFixed(2);
        const updatedEUR = +(data.rateEUR * updatedRemain).toFixed(2);

        if (data.id === payload.id) {
          return {
            ...data,
            income: payload.editTitle,
            remain: updatedRemain,
            USD: parseFloat(updatedUSD),
            EUR: parseFloat(updatedEUR),
          };
        }

        return data;
      });
    },
    editSpent: (state, { payload }) => {
      state.data = state.data.map((data) => {
        const updatedRemain = data.income - payload.editTitle;
        const updatedUSD = +(data.rateUSD * updatedRemain).toFixed(2);
        const updatedEUR = +(data.rateEUR * updatedRemain).toFixed(2);

        if (data.id === payload.id) {
          return {
            ...data,
            spent: payload.editTitle,
            remain: updatedRemain,
            USD: parseFloat(updatedUSD),
            EUR: parseFloat(updatedEUR),
          };
        }

        return data;
      });
    },
    removeData: (state, { payload }) => {
      state.data = state.data.filter((data) => data.id !== payload);
    },
    countCurrency: (state, { payload }) => {
      state.data = state.data.filter((data) => data.id !== payload);
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  addData,
  editMonth,
  removeData,
  editSpent,
  editIncome,
  setError,
} = dataSlice.actions;
export default dataSlice.reducer;
