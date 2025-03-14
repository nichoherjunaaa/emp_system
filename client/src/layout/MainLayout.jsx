import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
const MainLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="flex min-h-screen">

                <Sidebar />
                {/* {isPageLoading ? (
                <Loading key="loading" />
            ) : ( */}
                <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[50px]">
                    <Outlet />
                </main>
                {/* )} */}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default MainLayout