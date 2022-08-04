import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Works = () => {
  return (
    <div className='flex flex-col justify-left items-left text-left py-10 pl-2'>
      <div className='border-black border-l-2 pl-6 flex items-end h-16 mb-8'>
        <p className='text-3xl font-bold'>Works</p>
      </div>
      <div className='flex justify-between'>
        <div className='text-center w-full p-3'>
          <Link href='https://github.com/hpfull-yamucha/react-redux-chatapp'>
            <a target='_blank'>
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
            </a>
          </Link>
          <p className='text-gray-700 font-sans mb-2 font-semibold'>React Chat App</p>
          <p className='text-gray-600 font-sans text-left'>
            React,TypeScriptとReduxで構築された同期的なチャットアプリケーションです。チャットアプリの基本的な機能に加え、メッセージへのリアクション機能があります。
          </p>
        </div>
        <div className='text-center w-full p-3'>
          <Link href='https://corp.hpfull.jp/blogs'>
            <a target='_blank'>
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
            </a>
          </Link>
          <p className='text-gray-700 font-sans mb-2 font-semibold'>JAMstack Blog</p>
          <p className='text-gray-600 font-sans text-left'>
            Next.jsとヘッドレスCMSであるmicroCMSで構築されたブログサイトです。検索機能やページネーション機能、カテゴリ機能を自前で実装しています。
          </p>
        </div>
        <div className='text-center w-full p-3'>
          <Link href='https://github.com/hpfull-yamucha/slack-gas-kintai'>
            <a target='_blank'>
              <div className='overflow-hidden'>
                <Image
                  style={{ transition: 'transform .6s ease' }}
                  className='hover:transform hover:scale-110'
                  src='/undraw_Online_test_re_kyfx.png'
                  width={256}
                  height={164}
                  alt='Avatar'
                />
              </div>
            </a>
          </Link>
          <p className='text-gray-700 font-sans mb-2 font-semibold'>Slack連携勤怠ツール</p>
          <p className='text-gray-600 font-sans text-left'>
            SlackとGoogleスプレッドシートを連携した勤怠ツールです。勤怠の打刻や勤怠の確認ができます。
          </p>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='text-center p-3'>
          <Link href='https://github.com/hpfull-yamucha/wordpress-local'>
            <a target='_blank'>
              <div className='overflow-hidden'>
                <Image
                  style={{ transition: 'transform .6s ease' }}
                  className='hover:transform hover:scale-110'
                  src='/undraw_wordpress_utxt.png'
                  width={256}
                  height={164}
                  alt='Avatar'
                />
              </div>
            </a>
          </Link>
          <p className='text-gray-700 font-sans mb-2 font-semibold'>
            WordPressのローカル開発環境構築
          </p>
          <p className='text-gray-600 font-sans text-left'>
            WordPressのローカル開発環境を構築するためのDockerコンテナを作成しました。WordPressのテーマやプラグインの開発に役立ちます。
          </p>
        </div>
      </div>
    </div>
  )
}
