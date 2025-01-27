import React from 'react'
import { NavLink } from 'react-router-dom'
import PresensiPage from './../pages/PresensiPage';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


export const loader = (store) => async () => {
    const user = store.getState().userState.user;
    if (!user) {
        return redirect('/');
    }
    const currentUser = user.data
    const isAdmin = currentUser.role === 'admin';
    // console.log(isAdmin);
    return { isAdmin };
};

const NavList = () => {
    const { isAdmin } = useLoaderData();

    const links = [
        { id: 1, url: '', text: 'beranda' },
        { id: 2, url: 'biodata', text: 'biodata' },
        { id: 3, url: 'presensi', text: 'presensi' },
        { id: 4, url: 'informasi', text: 'informasi' },
        { id: 5, url: 'tentang', text: 'tentang' },
    ];

    if (isAdmin) {
        links.push({ id: 6, url: 'daftar', text: 'daftar karyawan' });
    }
    return (
        <>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-2">
                {links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <li key={id}>
                            <NavLink className="capitalize" to={url}>
                                {text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavList