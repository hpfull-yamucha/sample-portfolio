import Image from 'next/image'
import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import { IoMdMail } from 'react-icons/io'

export const Profile = () => {
  return (
    <div className='flex flex-col bg-gray-100 rounded-sm w-[420px] justify-center items-center text-center py-10 px-10'>
      <div className='rounded-full border-white border-8 mb-8'>
        <Image
          className='rounded-full'
          src='/hpfullyamuchalogodeka.png'
          width={200}
          height={200}
          alt='Avatar'
        />
      </div>
      <div className='text-left'>
        <h1 className='text-2xl font-bold'>Yamucha Toriyama</h1>
        <p className='text-xl font-medium mb-3'>Web Engineer</p>
        <p className='text-lg text-gray-600'>
          I am a student web engineer, majoring in commerce at university. My specialties are meat
          and potatoes and Dragon Ball, a manga by Yamucha.
        </p>
        <div className='flex mt-2 items-center'>
          <ImLocation2 size={22} />
          <p className='ml-1 text-lg'>Tokyo</p>
        </div>
        <div className='flex mt-2 items-center'>
          <IoMdMail size={22} />
          <p className='ml-1 text-lg'>hpfull.yamucha@ymail.ne.jp</p>
        </div>
      </div>
    </div>
  )
}
