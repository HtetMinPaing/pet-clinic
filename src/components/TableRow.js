import React, { useState } from 'react'
import moreIcon from '../images/more.png'
import Form from './Form';
import Alert from './Alert';

const TableRow = ({ data }) => {
    const [isAlertDeleteOpen, setIsAlertDeleteOpen] = useState(false);

    const [isModalOpen, setisModalOpen] = useState(false);

    const [isDropdown, setIsDropdown] = useState(false);

    const handleDelete = () => {
        setIsDropdown(false)
        setIsAlertDeleteOpen(true)
    }

    const handleUpdate = () => {
        setisModalOpen(true);
        setIsDropdown(false);
        console.log('Modal State: Click');
    }

    const handleDropDown = () => {
        console.log("Dropdown: ", data.id)
        setIsDropdown(!isDropdown)
    }

    return (
        <>
            <tr class="border-b">
                <th scope="row" class="px-6 py-4">
                    <input type="checkbox" />
                </th>
                <td class="px-6 py-4">
                    {data.id}
                </td>
                <td class="px-6 py-4">
                    {data.petName}
                </td>
                <td class="px-6 py-4">
                    {data.status}
                </td>
                <td class="px-6 py-4">
                    {data.pawrent}
                </td>
                <td class="px-6 py-4">
                    {data.breed}
                </td>
                <td class="px-6 py-4">
                    {data.gender}
                </td>
                <td class="px-6 py-4">
                    {data.dateOfBirth}
                </td>
                <td class="px-6 py-4">
                    {data.contactPhone}
                </td>
                <td class="px-6 py-4">
                    {data.address}, {data.township}, {data.city}
                </td>
                <th scope="row" className="px-6 py-3 relative">
                    <button type="button" onClick={() => handleDropDown()} className="flex items-center justify-between w-full p-2">
                        <img src={moreIcon} alt='more' width="20px" height="20px" />
                    </button>
                    {isDropdown && (
                        <div className="absolute -top-3 right-14 z-10 shadow-lg bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                <li>
                                    <div className='block cursor-pointer px-4 py-2 hover:bg-gray-100' onClick={() => handleUpdate()}>Update</div>
                                </li>
                                <li>
                                    <div className="block cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => handleDelete()}>Delete</div>
                                </li>
                            </ul>
                        </div>
                    )}
                </th>
            </tr>
            <div>
                {isModalOpen && <Form setisModalOpen={setisModalOpen} data={data} type="update" />}
                {isAlertDeleteOpen && <Alert isAlertDeleteOpen={isAlertDeleteOpen} setIsAlertDeleteOpen={setIsAlertDeleteOpen} id={data.id} />}
            </div>
        </>
    )
}

export default TableRow