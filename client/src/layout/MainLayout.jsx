import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
const MainLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <Sidebar />
            {/* {isPageLoading ? (
                <Loading key="loading" />
            ) : ( */}
                <main className="mx-auto max-w-6xl px-8 py-20 min-h-[80vh]">
                    <Outlet />
                </main>
            {/* )} */}
            {/* <Footer /> */}
        </>
    )
}

export default MainLayout