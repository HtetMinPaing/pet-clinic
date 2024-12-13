import React, { useState } from 'react'
import { breeds } from '../storage/utils';
import { usePatientContext } from '../storage/PatientContent';

export const BreedsSelection = () => {
    const { setBreed } = usePatientContext();
    return (
        <select id="countries" onChange={e => setBreed(e.target.value)} className="w-1/2 h-8 px-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" selected>Breed All</option>
            {breeds.map((breed) => (
                <option value={breed}>{breed}</option>
            ))}
        </select>
    )
}

export const StatusSelection = () => {

    const { setStatus } = usePatientContext();

    return (
        <select id="countries" onChange={e => setStatus(e.target.value)} className="w-1/2 h-8 px-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block">
            <option value="" selected>Status All</option>
            <option value="allergy">Allergy</option>
            <option value="picky_eater">Picky Eater</option>
        </select>
    )
}

export const PageSelection = () => {
    const allPages = 9;
    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);

    return (
        <select id="countries" onChange={e => setCurrentPage(e.target.value)} className="w-1/3 h-8 px-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500 block">
            <option value="0" selected>0</option>
            {Array.from({ length: allPages + 1 }, (_, i) => (
                <option key={i} value={i}>{i}</option>
            ))}
        </select>
    )
}