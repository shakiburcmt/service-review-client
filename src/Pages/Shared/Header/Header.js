import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Kitchen.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar">
            <div className="navbar flex justify-evenly">
                <div>
                    <img className='w-14 h-14 mx-2 rounded-lg' src={logo} alt="" />
                    <Link className='text-xl font-bold' to='/'>Programmer's Kitchen</Link>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                        user?.email ?
                            <>
                                <li><Link to='/myReviews'>My Reviews</Link></li>
                                <li><Link to='/addService'>Add Service</Link></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </> :
                            <li><Link to='/login'>Login</Link></li>
                    }
                    </ul>
                </div>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.email ?
                            <>
                                <li><Link to='/myReviews'>My Reviews</Link></li>
                                <li><Link to='/addService'>Add Service</Link></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </> :
                            <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;