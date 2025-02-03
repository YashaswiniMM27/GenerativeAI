import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
    return (
        <div className='signIn'>
            <SignIn path="/sign-in"/>
        </div>
    )
}

export default SignIn