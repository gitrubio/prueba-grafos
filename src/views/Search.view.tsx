import BigLoader from '@/components/molecules/loader/BigLoader';
import { ListCardFocus } from '@/components/organisms/ListCard/ListCardFocus'
import { useGetCockTails } from '@/hooks/useGetCockTails';
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export  function SearchView() {
    const { item } = useParams();
    const { cocktails,  getCockTailsName, loading } = useGetCockTails();
    const navigate = useNavigate()
    useEffect(() => {
        getCockTailsName(item ?? '');
    }, [item]);
  
    if (loading) {
        return (
          <div className="w-full h-screen flex justify-center items-center">
            <BigLoader />
          </div>
        );
      }

    if (cocktails.length === 0) navigate('/404')

  return (
    <section className="flex flex-col">

    <div className="block ml-4">
      <ListCardFocus
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 p-6 m-3"
        cocktails={cocktails}
        key={"cocktails-list-focus"}
      />
    </div>
  </section>
  )
}
