import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { BreedsSelection, PageSelection, StatusSelection } from '../components/Selection'
import { AddButton } from '../components/Button'
import Table from '../components/Table'
import Form from '../components/Form'
import Toast from '../components/Toast'
import { usePatientContext } from '../storage/PatientContent'

const HomePage = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const { isToastOpen, setIsToastOpen } = usePatientContext();
  return (
    <div className="bg-[#ffffff] md:m-10 min-h-screen py-7">
      <p className="font-semibold text-[#54BAB9] text-[22px] pb-2.5 px-7">Patient List</p>
      <div className='flex justify-between gap-2.5 px-7'>
        <div className="flex flex-col w-64 text-[14px] gap-2.5">
          <SearchBar />
          <div className="flex gap-2.5">
            <StatusSelection />
            <BreedsSelection />
          </div>
        </div>
        <div className="flex flex-col text-[14px] gap-2.5">
          <AddButton setisModalOpen={setisModalOpen} />
          <div className="flex gap-2.5 items-center justify-center">
            <p className="text-nowrap">
              Rows per pages:
            </p>
            <PageSelection />
          </div>
        </div>
      </div>
      <Table />
      {isModalOpen && <Form setisModalOpen={setisModalOpen} type="add" />}
      {isToastOpen && <Toast isToastOpen={isToastOpen} setIsToastOpen={setIsToastOpen}/>}
    </div>
  )
}

export default HomePage