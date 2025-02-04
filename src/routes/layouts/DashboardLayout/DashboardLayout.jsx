import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Chatlist from '../../../components/ChatList/Chatlist'
import '../DashboardLayout/DashboardLayout.css'

function DashboardLayout() {

    const {userId, isLoaded} = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if(isLoaded && !userId){
            navigate("/sign-in")
        }
    }, [isLoaded, userId, navigate])

    if(!isLoaded) return "loading..."


    return (
        <div className='dashboardLayout'>
            <div className="menu"><Chatlist/></div>
            <div className="content"><Outlet/></div>
        </div>
    )
    }

export default DashboardLayout