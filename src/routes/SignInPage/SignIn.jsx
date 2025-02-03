import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import '../SignInPage/SignIn.css'

function SignInPage() {
    return (
        <div className='signIn'>
            <SignIn path="/sign-in" signUpUrl="/sign-up"/>
        </div>
    )
}

export default SignInPage