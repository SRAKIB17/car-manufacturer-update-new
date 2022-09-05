import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/header/logo.png'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../image/profile/headerProfile.svg';

const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <div className="navbar bg-primary  z-[300]">

            <div className="flex-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow   w-52 z-30 bg-primary text-white rounded-sm">
                            <li><Link to='/'> Home</Link></li>
                            <li><a href='https://srakib17.netlify.app/'> My Portfolio</a></li>
                            <li><a href='https://prog-learn.vercel.app/blog/post'>Blog</a></li>

                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>

                                    </> :
                                    <>
                                        <li><Link to='/login'> Login</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                    <button className="btn btn-ghost normal-case text-xl h-auto"
                    >
                        <img src={logo} alt="" className='h-8 w-auto' />
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal flex p-0">

                        <li><Link to='/'> Home</Link></li>
                        <li><a href='https://srakib17.netlify.app/'> My Portfolio</a></li>
                        <li><a href='https://prog-learn.vercel.app/blog/post'>Blog</a></li>

                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>

                                </> :
                                <>
                                    <li><Link to='/login'> Login</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    {/* <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
            </div>
        </label> */}
                    <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end pl-3">

                    <div className="flex p-2 gap-2 text-black items-center">
                        {/* <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered lg:static md:static lg:w-full absolute right-[170px]  w-40" />
                            </div> */}
                        {
                            user ? <>
                                <div className="dropdown dropdown-end pr-4">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                        <div className=" avatar online rounded-full">

                                            <img src={(user?.photoURL) ? user.photoURL : profile} className='w-10' />

                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/dashboard/profile' className="justify-between">
                                                Profile

                                            </Link>
                                        </li>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><button onClick={() => signOut(auth)}> Logout</button></li>
                                    </ul>
                                </div>
                            </> :
                                <>
                                    <Link to='/login'><img src={profile} alt="" /></Link>
                                </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

