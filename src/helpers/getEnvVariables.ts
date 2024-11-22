export const getEnvVariables = () => {
	//retorno de variables de entorno
	return {
		VITE_API_COCKTAIL:import.meta.env.VITE_API_COCKTAIL,
		VITE_API_KEY:import.meta.env.VITE_API_KEY,
		VITE_AUTH_DOMAIN:import.meta.env.VITE_AUTH_DOMAIN,
		VITE_PROJECT_ID:import.meta.env.VITE_PROJECT_ID,
		VITE_STORAGE_BUCKET:import.meta.env.VITE_STORAGE_BUCKET,
		VITE_MESSAGING_SENDER_ID:import.meta.env.VITE_MESSAGING_SENDER_ID,
		VITE_APP_ID: import.meta.env.VITE_APP_ID,
		// ...import.meta.env
	};
};
