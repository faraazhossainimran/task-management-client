import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import NavBarDashboard from '../components/NavBarDashboard/NavBarDashboard'

const DashboardLayout = () => {
    return (
        <div>
            <NavBarDashboard></NavBarDashboard>
            <Outlet></Outlet>
        </div>
    )
}

export default DashboardLayout