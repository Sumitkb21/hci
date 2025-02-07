import React from 'react'
import Navbar from './navbar'

export const Home =  () => {
return (
    <>
        <Navbar/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Hey 👋, HCI CLINIC</h1>
    </div>
    </>
)
}
