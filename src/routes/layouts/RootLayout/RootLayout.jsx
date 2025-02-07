import React from 'react'
import '../RootLayout/RootLayout.css'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

function RootLayout() {

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className='rootLayout'>
                <header className={isHomePage ? "transparent-header" : "solid-header"}>
                    <Link className='logo' to="/">
                    <img src="/assets/favicon.webp" alt="Logo" />
                    <span>GEN-AI</span>
                    </Link>
                    <div className="user">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </ClerkProvider>
    )
}

export default RootLayout