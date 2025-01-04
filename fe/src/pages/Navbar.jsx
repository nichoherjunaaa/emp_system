import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/api/auth/logout', {}, {
                withCredentials: true  // Pastikan cookie dikirim bersama permintaan logout
            });
            localStorage.removeItem('userData');
            localStorage.removeItem('token');
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            alert('Logout gagal, coba lagi!');
        }
    };
    

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/biodata">Biodata</Link></li>
                        <li><Link to="/informasi">Informasi</Link></li>
                        <li><Link to="/kehadiran">Kehadiran</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Employee System</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/biodata">Biodata</Link></li>
                    <li><Link to="/informasi">Informasi</Link></li>
                    <li><Link to="/kehadiran">Kehadiran</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={handleLogout} className="btn">Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
