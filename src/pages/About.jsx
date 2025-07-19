import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-20 text-gray-700">
      {/* ========== ABOUT US Title ========== */}
      <div className="text-center text-3xl sm:text-4xl font-bold text-gray-800 border-b pb-4">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* ========== Main About Content ========== */}
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            Welcome to our fashion family! We are a passionate group of creators committed
            to offering high-quality, trendy clothing for all ages. Our journey began with a
            simple idea — to make fashion fun, inclusive, and accessible.
          </p>
          <p>
            We carefully design each collection with love and attention to detail. Whether you're
            looking for casual fits, bold styles, or classic comfort, we've got you covered.
            Join us in celebrating individuality through fashion.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 pt-4">OUR MISSION</h3>
          <p>
            To inspire confidence through style. We aim to create a space where people can
            express themselves freely, feel comfortable in their skin, and enjoy a vibrant
            shopping experience that goes beyond clothing.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.about}
            alt="About Us"
            className="w-full max-w-[450px] object-contain"
          />
        </div>
      </div>

      {/* ========== WHY CHOOSE US Section ========== */}
      <div className="mt-20">
        <div className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          <p className='text-xl font-medium mb-5'>
                        <span style={{ color: '#FF4E50' }}>W</span>
                        <span style={{ color: '#9DE0AD' }}>H</span>
                        <span style={{ color: '#7FDEFF' }}>Y   </span>
                        <span style={{ color: '#F9D62E' }}>Y</span>
                        <span style={{ color: '#FC913A' }}>O</span>
                        <span style={{ color: '#7FDEFF' }}>U   </span>
                        <span style={{ color: '#45ADA8' }}>C</span>
                        <span style={{ color: '#FF4E50' }}>H</span>
                        <span style={{ color: '#7FDEFF' }}>O</span>
                        <span style={{ color: '#9DE0AD' }}>O</span>
                        <span style={{ color: '#FF4E50' }}>S</span>
                        <span style={{ color: '#547980' }}>E</span>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Quality Materials</h4>
            <p>
              We use premium fabrics and materials that feel great and last long, ensuring
              comfort and durability in every piece.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Affordable Fashion</h4>
            <p>
              Get the latest trends without breaking the bank. Our pricing is designed to be
              budget-friendly and transparent.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Customer First</h4>
            <p>
              We prioritize your satisfaction. From customer service to returns, we strive
              to deliver the best shopping experience possible.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Inclusive Designs</h4>
            <p>
              Our collections are crafted for all body types and styles, so everyone can feel
              represented and confident.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Sustainable Approach</h4>
            <p>
              We are committed to reducing waste and embracing eco-conscious production
              practices to protect our planet.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Fast Delivery</h4>
            <p>
              Get your orders quickly with our reliable and fast shipping services — wherever
              you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
