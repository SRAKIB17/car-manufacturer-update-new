import React from 'react';

const AllQuantity = ({ register, errors }) => {
    // minimum_quantity: 4,/
    //                     total_quantity: 300,
    //                      
    //                     newI: true
    return (
        <div className=' max-w-xs w-full'>
            <div className='flex gap-1 m-2 w-full'>
                <input
                    type='number'
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Price is required'
                        }

                    })}
                    placeholder="Price"
                    className="input input-bordered input-secondary w-full"
                />


                <input
                    type='number'
                    {...register("discount_price", {
                        required: {
                            value: true,
                            message: ' Discount price is required'
                        }

                    })}
                    placeholder="Discount Price"
                    className="input input-bordered input-secondary w-full"
                />

            </div>
            <div className='flex justify-between m-2'>
                {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.price.message}  </span>}
                {errors.discount_price?.type === 'required' && <span className='label-text-alt text-red-500'>  {errors.discount_price.message}</span>}

            </div>

            <input
                type='number'
                {...register("minimum_quantity", {
                    required: {
                        value: true,
                        message: ' Minimum quantity price is required'
                    }

                })}
                placeholder="Minimum Quantity"
                className="input input-bordered input-secondary w-full m-2"
            />
            {errors.minimum_quantity?.type === 'required' && <span className='label-text-alt text-red-500'>  {errors.minimum_quantity.message}</span>}
            <div className='flex gap-1'>
                <div className='w-[50%]'>
                    <input
                        type='number'
                        {...register("total_quantity", {
                            required: {
                                value: true,
                                message: ' Quantity is required'
                            }

                        })}
                        placeholder="Quantity"
                        className="input input-bordered input-secondary  m-2 w-full"
                    />
                    {errors.total_quantity?.type === 'required' && <span className='label-text-alt text-red-500'> {errors.total_quantity.message}  </span>}

                </div>
                <div className='w-[50%]'>
                    <select name="" id="" className="input input-bordered input-secondary m-2 w-full"
                        {...register("newI")}
                    >
                        <option value={true}>New</option>
                        <option value={false} selected={true}>Old</option>
                    </select>

                </div>
            </div>





        </div>
    );
};

export default AllQuantity;