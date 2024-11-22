import BigLoader from '@/components/molecules/loader/BigLoader';
import { ListCardFocus } from '@/components/organisms/ListCard/ListCardFocus'
import { useGetCockTails } from '@/hooks/useGetCockTails';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export  function SearchView() {
    const { item } = useParams();
    const { cocktails,  getCockTailsName, loading } = useGetCockTails();

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

    if (cocktails.length === 0) {
        return (
          <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-4xl">No results found</h1>
          </div>
        );
        
    }

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
