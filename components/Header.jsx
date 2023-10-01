import React from 'react'
import { RxPerson} from 'react-icons/rx';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
        <h2>Dashboard</h2>
        <Link href='/'>
            <div className='bg-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
    </div>
  )
}
