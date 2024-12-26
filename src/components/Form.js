import React, { useState } from 'react'
import { breeds, mandalayTownships, yangonTownships } from '../storage/utils';
import { usePatientContext } from '../storage/PatientContent';

const Form = ({ setisModalOpen, data, type }) => {

    const { addPatient, updatePatient } = usePatientContext();

    const [patientData, setPatientData] = useState(
        data ? { ...data } : {
            petName: "",
            status: "",
            pawrent: "",
            breed: "",
            gender: "",
            dateOfBirth: "",
            contactPhone: "",
            address: "",
            city: "",
            township: ""
        }
    );

    const townships = (patientData.city) ? (patientData.city === "Yangon" ? yangonTownships : mandalayTownships) : []

    const handleChange = (e) => {
        setPatientData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === "add") {
            addPatient(patientData);
        }
        if (type === "update") {
            updatePatient(data.id, patientData);
        }
        setisModalOpen(false);
    }

    return (
        <form onSubmit={e => handleSubmit(e)} class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#ffffff] shadow-lg p-5 md:p-10">
            <h1 className="text-[#54BAB9] font-medium text-[18px] text-center mb-3">{type === "add" ? "Add new " : "Update "} patient</h1>
            <p className="text-[#444444] font-normal text-[12px] text-center mb-5">Enter new patient information below</p>
            <div className="flex flex-wrap min-w-[300px] max-w-[500px] items-center justify-center gap-x-5">
                <div className="mb-1 md:mb-5">
                    <label for="petName" className="block text-[#444444] text-[12px]">Pet Name</label>
                    <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={patientData.petName}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        placeholder="Enter pet name"
                        required
                    />
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="status" className="block text-[#444444] text-[12px]">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={patientData.status}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        required
                    >
                        <option value="" selected>Please choose status</option>
                        <option value="allergy">Allergy</option>
                        <option value="picky_eater">Picky Eater</option>
                    </select>
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="pawrent" className="block text-[#444444] text-[12px]">Pawrent</label>
                    <input
                        type="text"
                        id="pawrent"
                        name='pawrent'
                        value={patientData.pawrent}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        placeholder="Enter paw rent"
                        required
                    />
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="breed" className="block text-[#444444] text-[12px]">Breed</label>
                    <select
                        id="breed"
                        name="breed"
                        value={patientData.breed}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        required
                    >
                        <option value="" selected>Please choose breed</option>
                        {breeds.map((breed) => (
                            <option value={breed}>{breed}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="gender" className="block text-[#444444] text-[12px]">Gender</label>
                    <div className='flex items-center gap-2.5 w-60 p-2.5'>
                        <div className="flex items-center">
                            <input id="male" type="radio" value="male" checked={patientData.gender === "male"} required={patientData.gender !== "male" || "female"} name="gender" onChange={e => handleChange(e)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div className="flex items-center">
                            <input id="female" type="radio" value="female" checked={patientData.gender === "female"} required={patientData.gender !== "male" || "female"} name="gender" onChange={e => handleChange(e)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                    </div>
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="dateOfBirth" className="block text-[#444444] text-[12px]">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={patientData.dateOfBirth}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        required
                    />
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="contactPhone" className="block text-[#444444] text-[12px]">Contact Phone No.</label>
                    <input
                        type="text"
                        id="contactPhone"
                        name="contactPhone"
                        value={patientData.contactPhone}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        placeholder="Please enter phone no."
                        required
                    />
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="address" className="block text-[#444444] text-[12px]">Address</label>
                    <input
                        type="address"
                        id="address"
                        name="address"
                        value={patientData.address}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        placeholder="Enter your address"
                        required
                    />
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="city" className="block text-[#444444] text-[12px]">City</label>
                    <select
                        id="city"
                        name="city"
                        value={patientData.city}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        required
                    >
                        <option value="" selected>Please choose city</option>
                        <option value="Yangon">Yangon</option>
                        <option value="Mandalay">Mandalay</option>
                    </select>
                </div>
                <div className="mb-1 md:mb-5">
                    <label for="township" className="block text-[#444444] text-[12px]">Township</label>
                    <select
                        id="township"
                        name="township"
                        value={patientData.township}
                        onChange={e => handleChange(e)}
                        className="w-60 p-2.5 text-[14px] text-[#000000] bg-gray-50 border border-[#227aa180] rounded-lg block"
                        required
                    >
                        <option value="" selected>Please choose township</option>
                        {townships &&
                            townships.map((township) => (
                                <option value={township}>{township}</option>
                            ))
                        }
                    </select>
                </div>
                <button type="submit"  className={`w-28 md:w-44 mt-2 text-[#ffffff] ${type === "add" ? "bg-[#54BAB9]" : "bg-[#EDC339]"} ${type === "add" ? "hover:bg-[#5acdcb]" : "hover:bg-[#fbd044]"} rounded-md focus:outline-none text-[14px] px-5 py-2.5 text-center`}>{type === "add" ? "Save" : "Update"}</button>
                <button type="button" onClick={() => setisModalOpen(false)} className="w-28 md:w-44 mt-2 text-[#000000] hover:border-gray-600 rounded-md border border-gray-400 text-[14px] px-5 py-2.5 text-center">Cancel</button>
            </div>
        </form>
    )
}

export default Form