import SimpleButton from '@/components/molecules/SimpleButton/SimpleButton'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


interface LoginFormProps {
    onLogin: (username: string,password: string) => void
    loading: boolean
}

export default function LoginForm({loading,onLogin}: LoginFormProps) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


  return (
    <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="flex text-xl font-bold leading-tight tracking-tight justify-center text-gray-900 md:text-2xl dark:text-white">
            Login to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={(e)=> {
            e.preventDefault();
            onLogin(email,password)
        }}>

            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                <input type="email" name="email" id="email" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emilys12" required onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" value={password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  onChange={(e)=> setPassword(e.target.value)}/>
            </div>
      
            <div className="flex items-start">
           
            
            </div>
            <SimpleButton loading={loading} text='Sign In'  disabled={loading}  type="submit" className="w-full flex justify-center text-white bg-[#70B852] hover:bg-[#5e9945] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
               You don't have an account? <NavLink to={"/register"} className="font-medium text-[#70B852] hover:underline dark:text-[#70B852]">Register here</NavLink>
            </p>
        </form>
    </div>
</div>
  )
}
