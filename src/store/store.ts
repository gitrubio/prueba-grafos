import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './auth/slices/authSlice';
import { alertSlice } from './alerts/slices/alertSlice';

/*configuracion de redux*/
/*se crea el store de redux con la configuracion de redux toolkit*/
export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		alert : alertSlice.reducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
