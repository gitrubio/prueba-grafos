
import { addAlert,removeAlert } from '@/store/alerts/slices/alertSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { Alert } from '@/store/alerts/types/alerts';
import { generateUniqueId } from '@/helpers/generator';

// Hook para manejar las alertas globales
export const useAlertStore = () => {
    // Se obtiene el estado de las alertas
	const { alerts } = useAppSelector((store) => store.alert);
	const dispatch = useAppDispatch();

    // Función para agregar una alerta
	const handleAddAlert = (alert: Omit<Alert, 'id'>) => {
        const id = generateUniqueId()   
		dispatch(addAlert({id, ...alert}));

        setTimeout(() => {
            handleRemoveAlert(id)
          }, 3000); // 3 segundos (cada segundo es 1000 milisegundos)
	};

    
    // Función para remover una alerta
	const handleRemoveAlert = (id: string) => {
		dispatch(removeAlert({id}));
	};


	return { alerts, handleAddAlert, handleRemoveAlert };
};
