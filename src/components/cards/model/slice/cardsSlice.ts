import { buildSlice } from '@/utils/store/buildSlice';
import { CardState } from '../types/CardState';

const initialState: CardState = {};

const cardsSlice = buildSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export const { reducer: CardReducer, useActions: useCardActions } = cardsSlice;
