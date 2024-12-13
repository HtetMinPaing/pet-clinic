import React, { createContext, useContext, useEffect, useState } from 'react'

let uniqueID = 1;

const PatientContext = createContext();

const PatientProvider = ({ children }) => {

  const [patientsData, setPatientsData] = useState(() => {
    const savedPatientData = localStorage.getItem("patients_data");
    return savedPatientData ? JSON.parse(savedPatientData) : [];
  });

  const [status, setStatus] = useState("");
  const [breed, setBreed] = useState("");

  const [isToastOpen, setIsToastOpen] = useState("");

  useEffect(() => {
    localStorage.setItem("patients_data", JSON.stringify(patientsData));
  }, [patientsData]);

  const allPatientsData = () => {
    let filteredData;
    if (status !== "" && breed !== "") {
      filteredData = patientsData.filter((data) => data.status === status && data.breed === breed);
      return filteredData;
    } else if (breed !== "") {
      filteredData = patientsData.filter((data) => data.breed === breed);
      return filteredData;
    } else if (status !== "") {
      filteredData = patientsData.filter((data) => data.status === status);
      return filteredData;
    } else {
      return patientsData;
    }
  }

  const readAllPatient = () => {
    return patientsData;
  }

  const addPatient = (newPatientData) => {
    const id = `${newPatientData.breed.charAt(0)}-${uniqueID.toString().padStart(4, "0")}`;
    uniqueID++;
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
    <PatientContext.Provider value={{ allPatientsData, readAllPatient, addPatient, updatePatient, deletePatient, listByStatus, setStatus, setBreed, isToastOpen, setIsToastOpen }}>
      {children}
    </PatientContext.Provider>
  )
}

export const usePatientContext = () => useContext(PatientContext);

export default PatientProvider;