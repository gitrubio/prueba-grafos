import { DEFAULT_URL } from "@/constants/data";

interface ConfigProps {
    handleSubmit: (url : string) => void;
}

export default function Config({handleSubmit}: ConfigProps) {
  return (
    <div className="flex flex-col items-center">
    <h2 className="text-2xl">Configuración</h2>
    <h3>Cargar árbol de habilidades</h3>
    <form onSubmit={(e)=>{
        e.preventDefault();
        const input = (e.currentTarget.elements[0]) as HTMLInputElement
        handleSubmit(input.value);
    }}>
      <input type="text" className="text-black" required placeholder={DEFAULT_URL} />
      <button type="submit" className="p-2" >Cargar</button>
    </form>
  </div>
  )
}
