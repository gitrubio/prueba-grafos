
interface ImgProduct {
    name : string
    urlImage: string
}

export default function ImgProduct({name,urlImage}: ImgProduct) {
  return (
    <div className="bg-white  flex flex-col justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.25)] items-center rounded-lg  p-6 max-h-[600px]">
    <h2 className="text-2xl font-bold mb-2">{name}</h2>
  <img
     src={urlImage}
    alt="Producto principal"
    className="w-full h-[500px] rounded-lg"
  />

</div>
  )
}
