import { getEnvVariables } from '@/helpers/getEnvVariables';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Configuración obtenida desde tu proyecto en Firebase Console

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_APP_ID, VITE_PROJECT_ID, VITE_MESSAGING_SENDER_ID, VITE_STORAGE_BUCKET } = getEnvVariables();

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la autenticación para usar en tus funciones
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
