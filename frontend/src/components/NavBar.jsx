import React from 'react'
import DropDown from './Dropdown';

const NavBar = () => {



    return (
        <nav className="bg-black max-h-18 p-4 flex justify-end px-12 items-center text-white">
            <DropDown
                buttonContent={
                    <div className='flex flex-row items-center gap-4'>
                        <div>Nome</div>
                        <div className='bg-blue-400 rounded-full h-10 w-10'></div>
                    </div>}
                dropdownContent={
                    <div className="absolute mt-2 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className=" text-sm text-gray-700 dark:text-gray-200">
                            <div className='block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:rounded-lg cursor-pointer transition duration-300 ease-in-out'>Logout</div>

                        </ul>
                    </div>}
            />
        </nav>
    );
}

export default NavBar