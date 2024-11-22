import { useAlertStore } from '@/hooks/useAlertStore';
import { FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

// Este componente se encarga de mostrar las alertas en la aplicación
const AlertProvider = () => {
  const { alerts, handleRemoveAlert } = useAlertStore();
  const alertIcon = (type: "success" | "error" | "warning" | "info") =>{
    switch (type) {
        case "warning":
            return <FaExclamationTriangle className="text-1xl"/>
    
        case "error":
            return <FaExclamationCircle className="text-1xl"/>
    
        case "success":
            return <FaInfoCircle className="text-1xl"/>
    
        default:
            return <FaInfoCircle className="text-1xl"/>
            ;
    }
  }
  return (
    <div className="fixed bottom-5 left-5 space-y-3 z-50">
      {alerts.map((alert) => (
          <div
            className={`animate__animated  animate__slideInLeft animate__faster p-4 rounded-lg shadow-md text-white ${
              alert.type === 'success'
                ? 'bg-green-500'
                : alert.type === 'error'
                ? 'bg-red-500'
                : alert.type === 'warning'
                ? 'bg-yellow-500'
                : 'bg-blue-500'
            }`}
          >
            <div className="flex justify-between items-center gap-2">
            {alertIcon(alert.type)}
              <p>{alert.message}</p>
              <button
                className="ml-4 text-white"
                onClick={() => handleRemoveAlert(alert.id)}
              >
                &times;
              </button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default AlertProvider;
