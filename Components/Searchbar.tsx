import React from 'react'

const Searchbar = () => {
  return (
    <div className='absolute top-[120px] left-2/4 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-full'>
        <form className='w-full flex px-24 gap-2'>
            <input type="text" className=' flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none text-clip' placeholder='Enter Organization Name'/>
            <button type="submit" className='bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40'>Search</button>
        </form>
    </div>
  )
}

export default Searchbar