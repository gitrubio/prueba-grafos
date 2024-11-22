import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { IUser } from '@/store/auth/types';

// Función para registrar un nuevo usuario
export const registerUser = async (displayName: string,email: string, password: string): Promise<IUser | undefined> => {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName });
    return {
        displayName: user.displayName || '',
        email: user.email || '',
        id: user.uid
    }
  
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string): Promise<IUser | undefined> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
        displayName: user.displayName || '',
        email: user.email || '',
        id: user.uid
    }
};

// Función para cerrar sesión
export const logoutUser = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return false
  }
};
