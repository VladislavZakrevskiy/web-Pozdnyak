import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { rtkApi } from './rtkApi';
import { CardState } from '@/components/cards';

export interface StateSchema {
  // reducers
  // **here**
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  // **here**
  cards?: CardState
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducer;
}

export interface ThunkExtraArg {}

export interface ThunkConfig<T = string> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
