import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StateSchema } from './StateSchema';

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
