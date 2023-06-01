import { HomeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const MenuFunction = () => {
  return (
    <div className='flex flex-row'>
        <HomeIcon className="w-10 h-10 text-blue-800 md:w-14 md:h-14"/>
        <PencilSquareIcon className="w-10 h-10 text-blue-800 md:w-14 md:h-14"/>
        <TrashIcon className="w-10 h-10 text-blue-800 md:w-14 md:h-14"/>
    </div>
  )
}

export default MenuFunction;