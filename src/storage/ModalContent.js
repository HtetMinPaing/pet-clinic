import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext(undefined);

const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => { setIsModalOpen(!isModalOpen) };
    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext);

export default ModalProvider;