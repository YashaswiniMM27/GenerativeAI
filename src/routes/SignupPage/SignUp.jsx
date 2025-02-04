import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import '../SignupPage/SignUp.css'

function SignUpage() {
    return (
        <div className='signUp'>
            <SignUp path="/sign-up" signInUrl='/sign-in' forceRedirectUrl="/dashboard"/>
        </div>
    )
}

export default SignUpage