import React from 'react'
import { NavLink } from 'react-router-dom'
import PresensiPage from './../pages/PresensiPage';

const links = [
    { id: 1, url: '', text: "home" },
    { id: 2, url: 'biodata', text: "biodata" },
    { id: 3, url: 'presensi', text: "presensi" },
    // { id: 4, url: 'checkout', text: "checkout" },

]
const NavList = () => {
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