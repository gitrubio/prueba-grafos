import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert, AlertSlice } from '../types/alerts';


const initialState: AlertSlice = {
	alerts: [],
};

// Slice de redux para el manejo de las alertas
export const alertSlice = createSlice({
	name: 'alerts',
	initialState,
	reducers: {
		addAlert: (state, { payload }: PayloadAction<Alert>) => {
            // Generar ID único para la alerta
            const { id,message, type } = payload
			state.alerts = [...state.alerts, { id, message , type }]
		},
		removeAlert: (state,{ payload }: PayloadAction<Pick<Alert, 'id'>>) => {
            const { id } = payload
            state.alerts = state.alerts.filter((alert) => alert.id !== id)
		},
	},
});

export const { addAlert, removeAlert} = alertSlice.actions;
