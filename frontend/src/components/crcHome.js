import React from 'react'
import CRCNavbar from './crcNavbar'

export const CRCHome = () => {
  return (
    <div>
      <CRCNavbar/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Hey 👋, CRC HOME PAGE</h1>
    </div>
    </div>
  )
}
