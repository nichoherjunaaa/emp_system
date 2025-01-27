import React from 'react'
import { NavLink } from 'react-router-dom'
import PresensiPage from './../pages/PresensiPage';
import { useSelector } from 'react-redux';
const links = [
    { id: 1, url: '', text: "beranda" },
    { id: 2, url: 'biodata', text: "biodata" },
    { id: 3, url: 'presensi', text: "presensi" },
    { id: 4, url: 'informasi', text: "informasi" },
    { id: 5, url: 'tentang', text: "tentang" },
    { id: 6, url: 'daftar', text: "daftar karyawan" },

]
const NavList = () => {
    const user = useSelector((state) => state.userState.user);
    const userProvide = user.role === 'admin'
    console.log(userProvide);
    return (
        <>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-2">
                {links.map((link) => {
                    const { id, url, text } = link
                    if (url === 'daftar' && !userProvide) {
                        return null;
                    }
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