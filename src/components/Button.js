import React from 'react'
import addIcon from '../images/add.png'

export const AddButton = ({setisModalOpen}) => {
    return (
        <button
            onClick={() => setisModalOpen(true)}
            className="text-[14px] text-[#ffffff] bg-[#54BAB9] rounded-2xl flex justify-center items-center p-1 gap-2.5"
        >
            <img src={addIcon} alt='add' />
            <p>Add new patient</p>
        </button>
    )
}