import React from 'react'
import './Header.css'
import QR from '../../assets/bmc_qr.png'

function Header() {
  return (
    <div className='header'>
        <h1>Code Duplicate Checker</h1>
        <div className="support-me">
        <img src={QR} className='qr'/>
        </div>
        
    </div>
  )
}

export default Header