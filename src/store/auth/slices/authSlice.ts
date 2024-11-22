import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSlice, AuthenticationStatus, IUser } from '../types';
import { LocalStorageNames } from '../../../constants/localStorageNames';
import { getItemInStorage, removeItemInStorage, saveItemInStorage } from '@/helpers/localStorage';


const initialState: AuthSlice = {
	status: AuthenticationStatus.notAuthenticated,
	user: {} as IUser,
};

// Slice de redux para el manejo de la autenticacion
export const authSlice = createSlice({
	name: 'auth',
	initialState : getItemInStorage<AuthSlice>(LocalStorageNames.USER) ?? initialState,
	reducers: {
		onLogin: (state, { payload }: PayloadAction<IUser>) => {
			state.status = AuthenticationStatus.authenticated;
			state.user = payload;
			saveItemInStorage(LocalStorageNames.USER, JSON.stringify(state));
		},
		onLogOut: (state) => {
			state.status = AuthenticationStatus.notAuthenticated;
			state.user = {} as IUser;
			removeItemInStorage(LocalStorageNames.USER);
		},
	},
});

export const { onLogin, onLogOut} = authSlice.actions;
