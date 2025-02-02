import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-6xl px-8 py-20 min-h-[80vh] flex mb-12">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout