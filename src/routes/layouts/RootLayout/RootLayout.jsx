import React from 'react'
import '../RootLayout/RootLayout.css'
import { Outlet, Link } from 'react-router-dom'

function RootLayout() {
    return (
        <div className='rootLayout'>
            <header>
                <Link className='logo' to="/">
                <img src="/assets/favicon.webp" alt="Logo" />
                <span>GEN AI</span>
                </Link>
                <div className="user">user</div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout