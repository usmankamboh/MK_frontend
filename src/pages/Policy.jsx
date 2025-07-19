import React from 'react';
import Title from '../components/Title';
import OurPolicy from '../components/OurPolicy';

const Policy = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="text-center text-3xl sm:text-4xl font-bold text-gray-800 border-b pb-4">
        <Title text1="OUR" text2="POLICY" />
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Learn more about our return, exchange, and support services.
        </p>
      </div>
      <OurPolicy />
    </div>
  );
};

export default Policy;
