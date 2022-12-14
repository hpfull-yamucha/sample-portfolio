import React from 'react'

export const Skills = () => {
  return (
    <div className='flex flex-col w-[500px] justify-center items-left text-center py-10 pl-20'>
      <div className='border-black border-l-2 pl-6 flex items-end h-16 mb-8'>
        <p className='text-3xl font-bold'>Skills</p>
      </div>
      <div className='flex text-left pl-6'>
        <div className='flex flex-col mr-14'>
          <p className='text-2xl font-semibold mb-3'>Frontend</p>
          <p className='text-lg text-gray-600'>JavaScript</p>
          <p className='text-lg text-gray-600'>TypeScript</p>
          <p className='text-lg text-gray-600'>jQuery</p>
          <p className='text-lg text-gray-600'>Next.js</p>
          <p className='text-lg text-gray-600'>React & Redux</p>
          <p className='text-lg text-gray-600'>React Native</p>
          <p className='text-lg text-gray-600'>Webpack</p>
          <p className='text-lg text-gray-600'>HTML Coding</p>
          <p className='text-lg text-gray-600'>Tailwind CSS</p>
          <p className='text-lg text-gray-600'>Responsive Design</p>
        </div>

        <div className='flex flex-col'>
          <div className='mb-5'>
            <p className='text-2xl font-semibold mb-3'>Backend</p>
            <p className='text-lg text-gray-600'>Node.js</p>
            <p className='text-lg text-gray-600'>Golang</p>
            <p className='text-lg text-gray-600'>PHP</p>
            <p className='text-lg text-gray-600'>GraphQL</p>
          </div>

          <div className='mb-5'>
            <p className='text-2xl font-semibold mb-3'>Tools</p>
            <p className='text-lg text-gray-600'>Slack API</p>
            <p className='text-lg text-gray-600'>WordPress</p>
            <p className='text-lg text-gray-600'>VScode</p>
            <p className='text-lg text-gray-600'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
