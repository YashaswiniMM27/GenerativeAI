import React from 'react'
import { SignUp } from '@clerk/clerk-react'

function SignUPage() {
    return (
        <div className='signUp'>
            <SignUp path="/sign-up"/>
        </div>
    )
}

export default SignUp