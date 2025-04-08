import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { UserNavbar } from './UserNavbar'

export const UserSidebar = () => {


    return (
        <>
            <UserNavbar />
            <main className="app-main">
                <Outlet />
            </main>
        </>
    )
}
