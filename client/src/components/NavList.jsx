import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavList = () => {
    const user = useSelector((state) => state.userState.user);

    const links = [
        { id: 1, url: '', text: 'beranda' },
        { id: 2, url: 'biodata', text: 'biodata' },
        { id: 3, url: 'presensi', text: 'presensi' },
        { id: 4, url: 'informasi', text: 'informasi' },
        { id: 5, url: 'tentang', text: 'tentang' },
    ];

    return (
        <ul className="flex flex-col gap-2 md:flex-row md:gap-2">
            {links.map((link) => (
                <li key={link.id}>
                    <NavLink className="capitalize" to={link.url}>
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavList;
