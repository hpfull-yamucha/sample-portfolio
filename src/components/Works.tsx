import Image from 'next/image'
import React from 'react'

export const Works = () => {
  return (
    <div className='flex flex-col justify-left items-left text-left py-10 pl-2'>
      <div className='border-black border-l-2 pl-6 flex items-end h-16 mb-8'>
        <p className='text-3xl font-bold'>Works</p>
      </div>
      <div className='flex justify-between'>
        <div className='text-center w-full p-3'>
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
          <p className='text-gray-600 font-sans mb-2'>React Chat App</p>
          <p className='text-gray-600 font-sans text-left'>
            React,TypeScriptとReduxで構築された同期的なチャットアプリケーションです。チャットアプリの基本的な機能に加え、メッセージへのリアクション機能があります。
          </p>
        </div>
        <div className='text-center w-full p-3'>
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
          <p className='text-gray-600 font-sans mb-2'>JAMstack Blog</p>
          <p className='text-gray-600 font-sans text-left'>
            Next.jsとヘッドレスCMSであるmicroCMSで構築されたブログサイトです。検索機能やページネーション機能、カテゴリ機能を自前で実装しています。
          </p>
        </div>
        <div className='text-center w-full p-3'>
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
          <p className='text-gray-600 font-sans mb-2'>portfolio site</p>
          <p className='text-gray-600 font-sans text-left'>
            本サイトはNext.js、Tailwind CSS、TypeScriptで構築されています。
          </p>
        </div>
      </div>
    </div>
  )
}
