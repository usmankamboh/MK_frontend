import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const recentOrders = products.slice(1, 4); // Sample recent orders

  return (
    <section className='border-t pt-16 px-4 sm:px-8'>
      <div className='mb-8'>
        <Title text1='MY' text2='ORDERS' />
      </div>

      <div className='space-y-6'>
        {recentOrders.map((product, index) => (
          <div
            key={index}
            className='border rounded-lg p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm bg-white'
          >
            {/* Product Information */}
            <div className='flex items-start gap-5'>
              <img
                src={product.image[0]}
                alt={product.name}
                className='w-20 h-20 object-cover rounded'
              />
              <div className='text-sm text-gray-800'>
                <p className='text-base font-semibold mb-1'>{product.name}</p>
                <div className='flex flex-wrap items-center gap-4 text-gray-600 text-sm'>
                  <span className='font-medium'>
                    {currency}
                    {product.price}
                  </span>
                  <span>Quantity: 1</span>
                  <span>Size: M</span>
                </div>
                <p className='mt-2 text-gray-500'>
                  Order Date: <span className='text-gray-400'>18 July, 2025</span>
                </p>
              </div>
            </div>

            {/* Status & Action */}
            <div className='flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 md:w-1/2'>
              <div className='flex items-center gap-2 text-green-600 font-medium'>
                <span className='w-2.5 h-2.5 rounded-full bg-green-500'></span>
                <span className='text-sm'>Ready to Ship</span>
              </div>
              <button className='border border-gray-300 hover:border-gray-500 px-4 py-2 rounded text-sm font-medium transition'>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Orders;
