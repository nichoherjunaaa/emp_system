import React from 'react'
import NavList from './NavList'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import API from '../api'
import { logoutUser } from '../features/userSlice'

export const Navbar = () => {
    const user = useSelector(state => state.userState.user)
    // console.log(user);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            const response = await API.get('/auth/logout')
            dispatch(logoutUser())
            navigate('/')
        } catch (error) {
            dispatch(logoutUser())
            navigate('/')
        }
    }
    return (
        <nav className="bg-base-300">
            <div className="navbar mx-auto max-w-7xl lg:px-10 px-2">
                <div className="navbar-start">
                    {/* <div className="hidden lg:flex text-md items-center">
                        <img src={Logo} alt="Logo" className="h-12 w-12" />
                    </div> */}
                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className="h-6 w-6" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 left-0"
                        >
                            <NavList />
                        </ul>
                    </div>

                    {/* Dekstop */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            <NavList />
                        </ul>
                    </div>
                </div>
                <div className="navbar-end flex md:gap-4">
                    {!user && (
                        <NavLink className="btn btn-ghost bg-primary px-5" to='/login'>Login</NavLink>
                    )}
                    <NavLink to='/cart' className="btn btn-ghost btn-circle btn-md">
                        {/* <div className="indicator">
                            <BsCart3 />
                            <span className="badge badge-primary badge-sm indicator-item">{countCart}</span>
                        </div> */}
                    </NavLink>
                    {user && (
                        <button className="btn btn-error btn-outline btn-md" onClick={handleLogout}>Logout</button>
                    )}
                </div>
            </div>
        </nav >
    )
}
