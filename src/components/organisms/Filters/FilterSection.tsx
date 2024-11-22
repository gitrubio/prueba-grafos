import CategorySelect from '@/components/molecules/categorySelect/CategorySelect'

interface FilterSectionProps {
    handleCategory: (category: string | null) => void;
}

export default function FilterSection( {handleCategory}: FilterSectionProps) {
    
    return (
    <div className='flex flex-row'>
        
        <CategorySelect  handleCategory={handleCategory} key={'filter-category'} />
    </div>
  )
}
