import React, { useState } from 'react'

const NewsLetterBox = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe Now & Get Latest Discount Offer
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquid earum facere vero iure, officiis culpa dolorum esse deleniti eum debitis, illum tenetur praesentium nostrum soluta? Est natus harum quasi!
      </p>

      <form onSubmit={handleSubmit} className='mt-5 flex flex-col sm:flex-row justify-center items-center gap-3'>
        <input
          className='w-full sm:w-[300px] px-4 py-3 border border-gray-300 outline-none rounded'
          type='email'
          placeholder='Please Enter Your Email'
          required
        />
        <button
          type='submit'
          className={`text-white text-xs px-10 py-4 rounded transition-all duration-300 ${submitted ? 'bg-green-600' : 'bg-red-600'}`}
        >
          SUBSCRIBE
        </button>

        {submitted && (
          <span className='text-blue-600 text-sm font-medium ml-3'>Thank you!</span>
        )}
      </form>
    </div>
  )
}

export default NewsLetterBox
