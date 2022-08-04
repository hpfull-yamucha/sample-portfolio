import type { NextPage } from 'next'
import Head from 'next/head'
import { Profile } from '@/components/Profile'
import { Skills } from '@/components/Skills'
import { Works } from '@/components/Works'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Top Page</title>
      </Head>
      <main>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center flex-col'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
              <Profile />
              <div className='flex flex-col justify-center items-center pt-20'>
                <div className=''>
                  <p className='text-5xl font-bold'>PORTFOLIO</p>
                </div>
                <Skills />
              </div>
            </div>
          </div>
          <div className='flex justify-left md:justify-center md:w-[920px]'>
            <Works />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
