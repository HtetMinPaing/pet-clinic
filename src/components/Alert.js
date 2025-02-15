import React, { useEffect } from 'react'
import closeIcon from "../images/close.png"
import { usePatientContext } from '../storage/PatientContent'

const Alert = ({ isAlertDeleteOpen, setIsAlertDeleteOpen, id }) => {

    const { deletePatient } = usePatientContext();

    const handleDelete = () => {
        setIsAlertDeleteOpen(false);
        deletePatient(id);
    };

    const handleCancel = () => {
        setIsAlertDeleteOpen(false)
    }

    return (
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7 p-7 w-[480px] bg-[#ffffff] rounded-lg shadow-lg" role="alert">
            <div className="ralative">
                <p className="text-[#54BAB9] text-[22px]">Confirmation</p>
                <p className="text-[#000000]">Are you sure you really want to delete this patient ?</p>
                <button type="button" onClick={() => handleCancel()}  class="absolute top-5 right-5 rounded-lg inline-flex items-center justify-center h-8 w-8 bg-gray-200" aria-label="Close">
                    <img src={closeIcon} alt="success" className="w-4 h-4" />
                </button>
            </div>
            <div className="flex justify-center gap-3">
                <button type="button" onClick={() => handleDelete()} className="w-32 text-[#ffffff] bg-[#CD211D] rounded-md focus:outline-none text-[14px] px-5 py-2.5 text-center" aria-label="Close">
                    Delete
                </button>
                <button type="button" onClick={() => handleCancel()} className="w-32 text-[#000000] hover:border-gray-600 rounded-md border border-gray-400 text-[14px] px-5 py-2.5 text-center" aria-label="Close">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Alert