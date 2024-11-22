import { registerUser } from '@/api/authApi';
import RegisterForm from '@/components/organisms/RegisterForm/RegisterForm'
import { useAlertStore } from '@/hooks/useAlertStore';
import { useAuthStore } from '@/hooks/useAuthStore';
import { useState } from 'react'


export function RegisterView() {

    const [loading, setLoading] = useState<boolean>(false);
    const { handledLogin } = useAuthStore();
    const { handleAddAlert } = useAlertStore();
    const onRegister = async (displayName: string,email: string,password: string,confirmedPassword: string) => {
      try {
        setLoading(true);

        if(password !== confirmedPassword){
            handleAddAlert({ message: 'Las contraseñas no coinciden', type : 'warning' });
            setLoading(false);
            return;
        }

        const data = await registerUser(displayName,email, password);
        if (data) handledLogin(data);
        setLoading(false);
      } catch {
        handleAddAlert({ message: 'Error al registrar el usuario', type : 'error' });
        setLoading(false);
      }
    };
  

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img alt='' src={'images/logo.png'} className='h-36 w-auto fixed  pl-80' />
    
        </a>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
               <RegisterForm loading={loading} onRegister={onRegister}/>
            </div>
            
        </div>
    </div>
  </section>
  )
}
