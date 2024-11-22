import { useAuthStore } from '@/hooks/useAuthStore';
import { AuthenticationStatus } from '@/store/auth/types';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; 

interface ProtectedRouteProps {
  redirectTo: string;
}
// Este componente se encarga de proteger las rutas que requieren autenticación
const AuthGuard: React.FC<ProtectedRouteProps> = ({ redirectTo }) => {
  const { status } = useAuthStore(); // Obtiene el estado de logeo desde el hook useAuthStore
  // dependiendo del estado de autenticación se redirige a la ruta correspondiente
  return status === AuthenticationStatus.authenticated ?  <Navigate to={redirectTo} /> :  <Outlet />;
};

export default AuthGuard;
