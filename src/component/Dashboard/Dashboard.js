import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useCheckAdmin from '../hooks/useCheckAdmin';
import Arrow_next_arrows_right_move from './Arrow_next_arrows_right_move';
import './User/User.css'

const Dashboard = () => {
    const { admin } = useCheckAdmin()
    return (
        <div className='border-t'>

            <div className="drawer drawer-mobile border-b">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-3 m-4">
                    <div className='absolute z-[100]'>
                        <label for="dashboard" className=" swap swap-rotate lg:hidden m-4 ">
                           <Arrow_next_arrows_right_move/>
                        </label>
                    </div>
                    <Outlet />
                </div>


                <div className="drawer-side ">
                    <label for="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-white">
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                        {
                            admin?.admin ||
                            <>
                                <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                                <li><Link to='/dashboard/my-order'>My Order</Link></li>

                            </>
                        }
                        {
                            admin?.admin && <>
                                <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                                <li><Link to='/dashboard/users'>All User</Link></li>
                                <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                                <li><Link to='/dashboard/manage-orders'>Manage Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;