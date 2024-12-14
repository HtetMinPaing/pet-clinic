import React, { createContext, useContext, useEffect, useState } from 'react'

const PatientContext = createContext();

const PatientProvider = ({ children }) => {

  const [uniqueID, setUniqueID] = useState(() => {
    const savedUniqueID = localStorage.getItem("patient_id");
    return savedUniqueID ? JSON.parse(savedUniqueID) : "1";
  });

  const [patientsData, setPatientsData] = useState(() => {
    const savedPatientData = localStorage.getItem("patients_data");
    return savedPatientData ? JSON.parse(savedPatientData) : [];
  });

  const [status, setStatus] = useState("");
  const [breed, setBreed] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [isToastOpen, setIsToastOpen] = useState("");

  useEffect(() => {
    localStorage.setItem("patients_data", JSON.stringify(patientsData));
    localStorage.setItem("patient_id", JSON.stringify(uniqueID))
  }, [patientsData, uniqueID]);

  const readPatientsData = () => {
    let filteredData;
    if (status !== "" && breed !== "") {
      filteredData = patientsData.filter((data) => data.status === status && data.breed === breed);
    } else if (breed !== "") {
      filteredData = patientsData.filter((data) => data.breed === breed);
    } else if (status !== "") {
      filteredData = patientsData.filter((data) => data.status === status);
    } else {
      filteredData = patientsData;
    }

    if (rowsPerPage < 10) {
      const rowFilterData = filteredData.slice(0, rowsPerPage);
      filteredData = rowFilterData;
    }
    return filteredData;
  }

  const addPatient = (newPatientData) => {
    const id = `${newPatientData.breed.charAt(0)}-${uniqueID.toString().padStart(4, "0")}`;
    setUniqueID(parseInt(uniqueID) + 1);
    const newPatientDataWithId = { ...newPatientData, id }
    setPatientsData((prevData) => [...prevData, newPatientDataWithId]);
    setIsToastOpen("Patient is successfully created!")
  }

  const updatePatient = (id, updatedData) => {
    setPatientsData((prevData) =>
      prevData.map(
        (data) => data.id === id ? { ...data, ...updatedData } : data
      ))
    setIsToastOpen("Patient is successfully updated!")
  }

  const deletePatient = (id) => {
    setPatientsData((prevData) => prevData.filter((data) => data.id !== id));
    setIsToastOpen("Patient is successfully deleted!")
  };

  const listByStatus = (status) => {
    const filterData = patientsData.filter((data) => (data.status === status));
    return filterData;
  }
  return (
    <PatientContext.Provider value={{ readPatientsData, addPatient, updatePatient, deletePatient, listByStatus, setStatus, setBreed, isToastOpen, setIsToastOpen, rowsPerPage, setRowsPerPage }}>
      {children}
    </PatientContext.Provider>
  )
}

export const usePatientContext = () => useContext(PatientContext);

export default PatientProvider;