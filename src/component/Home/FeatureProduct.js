import React from 'react';
import Loading from '../Loading/Loading';
import ShowProduct from './ShowProduct';
import { Link } from 'react-router-dom';

import { useQuery } from 'react-query'

import axios from 'axios';


const FeatureProduct = () => {
    const { data, isLoading, refetch } = useQuery('featureProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/products/0/6?newI=false`));

    if (isLoading) {
        return <Loading />
    }
    const products = data?.data?.products;
    return (
        <div className='mt-9 w-fit  border-primary rounded-md m-8 md:mr-4  md:ml-4 xl:mr-28 xl:ml-28'>
            <h1 className='text-3xl m-4 font-bold text-black'>🔘 Feature Product</h1>
            <div className='p-6 m-4 grid-cols-1 sm:grid-cols-2  gap-2 items-center justify-center grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4'>
                {
                    products && (products.map(product => <ShowProduct key={product._id} product={product} />))
                }
            </div>
            <div className='text-right mr-2'>
                <Link className='btn text-white btn-primary' to='/products/false'>Load More</Link>

            </div>
        </div>
    );
};



export default FeatureProduct;