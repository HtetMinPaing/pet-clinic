import React from 'react'
import { usePatientContext } from '../storage/PatientContent';
import TableRow from './TableRow';
import moreIcon from '../images/more.png'

const Table = () => {
    const { allPatientsData } = usePatientContext();
    const patientsData = allPatientsData();
    return (
        <div class="overflow-x-auto">
            <table class="w-full text-[14px] text-left">
                <thead class="text-[14px] font-semibold text-[#54BAB9] bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <input type="checkbox" />
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pet Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pawrent
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Breed
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date of Birth
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Contact Phone No.
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <img src={moreIcon} alt='more' width="14px" height="14px" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {patientsData.map((data) => (
                        <TableRow key={data.id} data={data} />
                    ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Table