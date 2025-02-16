
interface ErrorProps {

    message: string;

}

export default function Error({message}: ErrorProps) {
  return (
    <div className='w-[800px] h-[400px] flex justify-center items-center'>
     {message}
    </div>
  )
}
