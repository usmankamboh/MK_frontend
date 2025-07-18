import React, { useState, useEffect, useContext } from 'react';
import Title from '../components/Title'
import { Country, State, City } from 'country-state-city';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryPhoneCode, setCountryPhoneCode] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [method, setMethod] = useState('cod');

  const { navigate } = useContext(ShopContext);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const country = Country.getCountryByCode(countryCode);

    setSelectedCountry(countryCode);
    setCountryPhoneCode(country.phonecode ? `+${country.phonecode}` : '');
    setSelectedState('');
    setSelectedCity('');
    setZipCode('');
    setPhoneNumber('');
    setStates(State.getStatesOfCountry(countryCode));
    setCities([]);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity('');
    setZipCode('');
    setPhoneNumber('');
    setCities(City.getCitiesOfState(selectedCountry, stateCode));
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setZipCode('');
  };

  const validateForm = () => {
    const errors = {};
    const firstName = document.getElementById('first-name')?.value.trim();
    const lastName = document.getElementById('last-name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const street = document.getElementById('street')?.value.trim();

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required.";
    if (!email) errors.email = "Email is required.";
    if (!street) errors.street = "Street address is required.";
    if (!selectedCountry) errors.country = "Country is required.";
    if (!selectedState) errors.state = "State is required.";
    if (!selectedCity) errors.city = "City is required.";
    if (!zipCode) errors.zipCode = "Zip code is required.";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      navigate('./orders');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <div className='w-full'>
            <input id='first-name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
            {formErrors.firstName && <p className='text-red-500 text-sm'>{formErrors.firstName}</p>}
          </div>
          <div className='w-full'>
            <input id='last-name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
            {formErrors.lastName && <p className='text-red-500 text-sm'>{formErrors.lastName}</p>}
          </div>
        </div>

        <div>
          <input id='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
          {formErrors.email && <p className='text-red-500 text-sm'>{formErrors.email}</p>}
        </div>

        <div>
          <input id='street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
          {formErrors.street && <p className='text-red-500 text-sm'>{formErrors.street}</p>}
        </div>

        <div className='flex flex-col gap-4 w-full max-w-md'>
          {/* Country */}
          <div>
            <select
              className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
            {formErrors.country && <p className='text-red-500 text-sm'>{formErrors.country}</p>}
          </div>

          {/* State */}
          {states.length > 0 && (
            <div>
              <select
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formErrors.state && <p className='text-red-500 text-sm'>{formErrors.state}</p>}
            </div>
          )}

          {/* City */}
          {cities.length > 0 && (
            <div>
              <select
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {formErrors.city && <p className='text-red-500 text-sm'>{formErrors.city}</p>}
            </div>
          )}

          {/* Zip Code */}
          {selectedCity && (
            <div>
              <input
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                type='text'
                placeholder='Zip / Postal Code'
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              {formErrors.zipCode && <p className='text-red-500 text-sm'>{formErrors.zipCode}</p>}
            </div>
          )}

          {/* Phone Number */}
          {selectedCountry && (
            <div>
              <div className='flex gap-2'>
                <span className='px-3 py-1.5 border border-gray-300 rounded bg-gray-100'>
                  {countryPhoneCode}
                </span>
                <input
                  type='tel'
                  className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {formErrors.phoneNumber && <p className='text-red-500 text-sm'>{formErrors.phoneNumber}</p>}
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center justify-center gap-3 border p-2 px-4 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-5' src={assets.stripe} alt='' />
            </div>

            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razor} alt='' />
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={handlePlaceOrder} className='bg-red-500 text-white px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
