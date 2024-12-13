import React from 'react'
import logo from '../images/Logo(2).png'
import user from '../images/user image.png'
import noti from '../images/Notifications.png'

const Header = () => {
    return (
        <div className="bg-[#54BAB9] text-[#ffffff] flex justify-between items-center px-7 py-3">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex justify-center items-center gap-7'>
                <img src={noti} alt='notification' />
                <div className='flex justify-center items-center gap-3'>
                    <img src={user} alt='user-logo' />
                    <div>
                        <p>Lisa</p>
                        <p>Operator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header