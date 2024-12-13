import React from 'react'
import successIcon from "../images/success.png"
import closeIcon from "../images/close.png"

const Toast = ({ isToastOpen, setIsToastOpen }) => {
    return (
        <div className="fixed bottom-5 left-16 flex items-center w-full max-w-xs p-4 text-gray-500 bg-[#1AB45D] rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
                <img src={successIcon} alt="success" className="w-5 h-5" />
            </div>
            <div class="ms-3 text-sm font-normal text-[#ffffff]">{isToastOpen}</div>
            <button type="button" onClick={() => setIsToastOpen("")} class="ms-auto -mx-1.5 -my-1.5 rounded-lg inline-flex items-center justify-center h-8 w-8" aria-label="Close">
                <img src={closeIcon} alt="success" className="w-4 h-4" />
            </button>
        </div>
    )
}

export default Toast