import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css'

const ShowProduct = ({ product: { _id, category, image, short_description, minimum_quantity, name, total_quantity, price, discount_price, newI } }) => {
    const navigate = useNavigate()

    return (
        <div className='productBg'>
            <div className="productShadow  card servicesComponent h-full">
                <div className='card-body p-0 relative'>
                    <div>
                        <div>
                            <figure className='p-4 '>
                                <img src={image} alt="Shoes" className='w-full rounded-md h-56    sm:h-[11rem]' />
                            </figure>
                            {/* *******CARD BODY ********* */}
                            <div className='pl-6 pr-6 pb-4 pt-6 flex flex-col gap-1'>
                                <h2 className="text-xl p-2 font-bold relative">
                                    <p>
                                        {name?.slice(0, 50)}
                                    </p>
                                    {
                                        (newI === 'true') &&
                                        <div className="badge badge-secondary font-extralight absolute -top-4 right-0">
                                            NEW
                                        </div>
                                    }
                                </h2>

                                <span className='text-sm text-gray-500'>
                                    Quantity:
                                    {
                                        !Boolean(eval(total_quantity)) ?

                                            <span className='text-red-500'>
                                                {" "}  Stock Out
                                            </span>
                                            :
                                            <span className='text-primary'>
                                                {" " + total_quantity}
                                            </span>
                                    }

                                </span>
                                <div>
                                    {/* <Rating rating={ratingCheck} /> */}
                                </div>
                                <div className='text-xl flex gap-3 font-bold text-orange-500'>
                                    Price:
                                    {
                                        discount_price &&
                                        <span>
                                            {discount_price}
                                        </span>
                                    }
                                    {
                                        price &&
                                        <span
                                            className={
                                                ((discount_price && price)) ? 'del_discount_price font-extralight text-gray-500 line-through' : ' '
                                            }
                                        >
                                            ${price}
                                        </span>
                                    }
                                </div>
                            </div>

                        </div>
                        {/* ***********DESCRIPTION*********** */}
                        {/* <CourseDescription course={props} /> */}
                    </div>
                    <div className='h-[40px] '></div>
                    <div className=' absolute bottom-0 flex justify-between gap-1 p-4 w-full '>
                    
                        {/* <button className=' btn-info  btn-sm text-white btn flex gap-1' onClick={() => router.replace('/products/' + _id)}>
                            buy now  <Arrow_next_arrows_right_move size='20' color='currentColor' />
                        </button> */}
                        <div className="card-actions justify-end pt-4">
                            <button onClick={() => navigate('/purchase/' + _id)} className="btn btn-secondary">Order Now</button>
                        </div>
                        {/* <button className='btn btn-info  btn-sm text-white  flex gap-1'>
                        <Cart size='20' color='currentColor' /> Add
                    </button>

                    <button className='btn btn-info  btn-sm text-white flex gap-1'>
                        <Love_favorite_fitness_heart_favourite_hearth_like_valentine size='20' color='currentColor' />
                    </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;