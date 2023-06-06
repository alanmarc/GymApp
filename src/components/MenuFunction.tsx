import { HomeIcon, PencilSquareIcon, TrashIcon, BellAlertIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const MenuFunction = () => {
  return (
    <div className='flex flex-row w-4/5 g-2 '>
        <HomeIcon className="w-12 h-14 text-blue-800 md:w-14 md:h-14"/>
        <PencilSquareIcon className="w-12 h-14 text-blue-800 md:w-14 md:h-14"/>
        <TrashIcon className="w-12 h-14 text-blue-800 md:w-14 md:h-14"/>
        <BellAlertIcon className="w-12 h-14 text-blue-800 md:w-14 md:h-14"/>
        <CalendarDaysIcon className="w-12 h-14 text-blue-800 md:w-14 md:h-14"/>
    </div>
  )
}

export default MenuFunction;