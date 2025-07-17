import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../context/ShopContext"
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // Only get products where bestseller is true
        const besProduct = products.filter((item) => item.bestseller === true);
        setBestSeller(besProduct.slice(0,5));
    }, []); // Add products as dependency to update when products change

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, odio? Voluptas totam quidem mollitia, nemo laudantium nulla non laboriosam odio sed, fugiat dicta dolore delectus dolores iusto, ipsum fugit eligendi.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem 
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
