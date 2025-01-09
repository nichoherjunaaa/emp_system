// src/layouts/MainLayout.js
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;