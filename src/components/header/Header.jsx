import React from 'react'
import './header.scss'
import logo from './../../assets/Netflix-Logo-Transparent-PNG-5.png'
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div>
                <Link to='/tv'>TV Shows</Link>
                <Link to='/movie'>Movies</Link>
                <Link to='/recent'>Recently Added</Link>
                <Link to='/mylist'>My List</Link>
            </div>
            <FiSearch />
        </div>

    )
}

export default Header