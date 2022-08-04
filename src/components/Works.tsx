import Image from 'next/image'
import React from 'react'

export const Works = () => {
  return (
    <div className='flex flex-col justify-left items-left text-left py-10 pl-2'>
      <div className='border-black border-l-2 pl-6 flex items-end h-16 mb-8'>
        <p className='text-3xl font-bold'>Works</p>
      </div>
      <div className='flex'>
        <div className='text-center'>
          <div className='overflow-hidden'>
            <Image
              style={{ transition: 'transform .6s ease' }}
              className='hover:transform hover:scale-110'
              src='/undraw_Experience_design_re_ca7l.png'
              width={256}
              height={164}
              alt='Avatar'
            />
          </div>
          <p className='text-gray-600 font-sans'>React Chat App</p>
        </div>
        <div className='text-center'>
          <div className='overflow-hidden'>
            <Image
              style={{ transition: 'transform .6s ease' }}
              className='hover:transform hover:scale-110'
              src='/undraw_Programming_re_kg9v.png'
              width={256}
              height={164}
              alt='Avatar'
            />
          </div>
          <p className='text-gray-600 font-sans'>Programming Support App</p>
        </div>
        <div className='text-center'>
          <div className='overflow-hidden'>
            <Image
              style={{ transition: 'transform .6s ease' }}
              className='hover:transform hover:scale-110'
              src='/undraw_Group_video_re_btu7.png'
              width={256}
              height={164}
              alt='Avatar'
            />
          </div>
          <p className='text-gray-600 font-sans'>Video Chat App</p>
        </div>
      </div>
    </div>
  )
}
