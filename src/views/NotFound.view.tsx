import { NavLink } from 'react-router-dom'

export function NotFoundView() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-9xl font-extrabold text-[#70B852]">404</h1>
        <h2 className="text-4xl font-bold text-gray-900">Elemento no encontrado</h2>
        <p className="text-xl text-gray-600">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      </div>
      <div className="mt-8 space-y-4">
        <NavLink to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#70B852] hover:bg-[#61a046] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#70B852] transition duration-150 ease-in-out">
          Volver a la página principal
        </NavLink>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  </div>
  )
}
