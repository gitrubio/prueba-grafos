
import { IUser } from '../store/auth/types';
import { useAppDispatch, useAppSelector } from '../store/store';
import { onLogin, onLogOut } from '../store/auth/slices/authSlice';


// Hook para manejar la autenticación global
export const useAuthStore = () => {
	// Se obtiene el estado de autenticación y el usuario
	const { status, user } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	const handledLogin = (user: IUser) => {
	// se disparará la acción onLogin con el usuario
		dispatch(onLogin(user));
	};

	const handledLogout = () => {
	// se disparará la acción onLogOut
		dispatch(onLogOut());
	};


	return { status, user, handledLogin, handledLogout };
};
