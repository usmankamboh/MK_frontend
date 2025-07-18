import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);


  return (
    <div className="pt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="text-2xl sm:text-3xl font-semibold mb-8 text-center sm:text-left">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) return null;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-4 gap-4 shadow-sm bg-white"
            >
              <div className="flex items-start gap-4 flex-1">
                <img className="w-20 h-20 object-cover rounded" src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className="text-base sm:text-lg font-medium text-gray-800">{productData.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm sm:text-base">
                    <span className="text-gray-700 font-semibold">{currency}{productData.price}</span>
                    <span className="px-2 py-1 bg-slate-100 border rounded text-gray-600">{item.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <input
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 1) {
                      updateQuantity(item._id, item.size, value);
                    } else {
                      updateQuantity(item._id, item.size, 0);
                    }
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type='number'
                  min={1}
                  value={item.quantity}
                />

                <img
                  src={assets.bin}
                  alt="Remove"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 sm:w-6 h-auto cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>
          );
        })}
      </div>

      {cartData.length > 0 ? (
  <div className="flex justify-end mt-12">
    <div className="w-full sm:w-[450px]">
      <CartTotal />
      <div className="w-full text-end">
        <button onClick={()=>navigate('./place-order')} className="bg-red-600 text-white text-sm my-8 py-3 px-8 hover:bg-gray-800 transition">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  </div>
) : (
  <p className="text-center text-gray-500 text-lg mt-10">Your cart is empty.</p>
)}
    </div>
  );
};

export default Cart;
