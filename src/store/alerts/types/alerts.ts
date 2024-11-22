export interface Alert {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info'; // Diferentes tipos de alertas
}

export interface AlertSlice {
    alerts: Alert[];

}