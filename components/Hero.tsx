import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { FaPlay, FaArrowRight, FaUserShield } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Loader from './Loader';
import Modal from './Modal';

// TODO(authorizer): confirm the Authorizer 2.0 demo video id.
const DEMO_VIDEO_ID = 'aQrpYCyrDjU';

// Factual trust signals — kept deliberately short so the hero doesn't repeat
// the value props the sections below already cover in depth.
const TRUST_SIGNALS = ['Apache-2.0 open source', 'Self-host in minutes', 'OAuth2 & OIDC', '13+ databases'];

export default function Hero() {
  const { loading, user, logout } = useAuthorizer();
  const [isTryModalOpen, setIsTryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className='container mx-auto max-w-7xl flex my-20 flex-col pt-0 md:flex-row md:items-center md:pt-10'>
      {/* Left: the essence + the primary conversion path */}
      <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left px-5 md:px-0'>
        <span className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1'>
          Open source · self-hosted
        </span>

        <h1 className='mt-5 font-extrabold text-m-h1 text-[length:48px] leading-[48px] md:text-[length:48px] md:leading-[48px] xl:text-d-j text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-300'>
          Own your identity layer
        </h1>

        <p className='text-xl text-gray-600 mt-4 max-w-xl'>
          The open-source auth platform you run yourself—authentication,
          fine-grained authorization, and permission-aware AI, with every user
          in <span className='font-semibold text-gray-800'>your own database</span>.
        </p>

        {/* Primary + secondary CTAs, high on the page */}
        <div className='mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
          <a
            href='https://railway.app/new/template/nwXp1C?referralCode=FEF4uT'
            target='_blank'
            rel='noopener noreferrer'
            className='w-full sm:w-auto text-center text-white bg-blue-500 hover:bg-blue-400 font-semibold rounded-lg text-lg px-8 py-4 shadow-sm hover:shadow-md transition-all duration-200'
          >
            Deploy your instance
          </a>
          <button
            type='button'
            onClick={() => setIsTryModalOpen(true)}
            className='w-full sm:w-auto flex items-center justify-center text-lg font-semibold rounded-lg px-8 py-4 border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors duration-200'
          >
            Try the live demo <FaArrowRight className='ml-2 text-sm' />
          </button>
        </div>

        <button
          type='button'
          onClick={() => setIsVideoModalOpen(true)}
          className='mt-4 flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-200'
        >
          <FaPlay className='mr-2 text-sm' /> Watch the 2.0 demo
        </button>

        {/* Compact trust strip + social proof */}
        <ul className='mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-gray-500'>
          {TRUST_SIGNALS.map((signal) => (
            <li key={signal} className='flex items-center'>
              <span className='w-1.5 h-1.5 rounded-full bg-green-400 mr-2' />
              {signal}
            </li>
          ))}
        </ul>
        <a
          href='https://www.producthunt.com/posts/authorizer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-authorizer'
          target='_blank'
          rel='noreferrer'
          className='mt-6'
        >
          <Image
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321526&theme=light'
            alt='Authorizer — open-source authentication on Product Hunt'
            width={220}
            height={48}
            priority
          />
        </a>
      </div>

      {/* Right: conversion-focused live-demo card (triggers the demo modal) */}
      <div className='flex-1 flex flex-col justify-center items-center p-6 md:p-10 ml-0 md:ml-10 mt-12 md:mt-0'>
        <div className='w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center'>
          <span className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1'>
            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
            Live demo
          </span>
          <div className='mt-5 flex justify-center'>
            <FaUserShield className='text-blue-500 text-5xl' />
          </div>
          <h2 className='mt-4 text-2xl font-bold text-gray-800'>
            See exactly what your users see
          </h2>
          <p className='mt-2 text-gray-500'>
            The real hosted sign-in experience—social login, magic link,
            email/password and MFA. No install required.
          </p>
          <button
            type='button'
            onClick={() => setIsTryModalOpen(true)}
            className='mt-6 w-full flex items-center justify-center text-white bg-blue-500 hover:bg-blue-400 font-semibold rounded-lg text-lg px-8 py-3 transition-colors duration-200'
          >
            Try the demo <FaArrowRight className='ml-2 text-sm' />
          </button>
          <p className='mt-4 text-sm text-gray-400'>
            No credit card · runs on demo.authorizer.dev
          </p>
        </div>
      </div>

      {/* Live demo modal: the Authorizer component + OSS-supporter consent notice */}
      {isTryModalOpen && (
        <Modal open={isTryModalOpen} onClose={() => setIsTryModalOpen(false)}>
          <div>
            <div className='flex items-center justify-between py-3 px-5 border-b border-gray-100'>
              <Dialog.Title
                as='h3'
                className='text-xl leading-6 font-semibold text-gray-900'
              >
                Try the Authorizer demo
              </Dialog.Title>
              <button
                type='button'
                aria-label='Close'
                className='text-gray-400 hover:text-gray-600'
                onClick={() => setIsTryModalOpen(false)}
              >
                <IoClose size={22} />
              </button>
            </div>

            <div className='p-5 sm:p-6'>
              {loading ? (
                <div className='py-10'>
                  <Loader />
                </div>
              ) : user ? (
                <div className='text-center py-6'>
                  <p className='text-4xl'>🙇‍♂️</p>
                  <p className='mt-3 text-lg text-gray-600'>
                    Welcome, {user.email}
                  </p>
                  <p className='font-bold text-xl text-gray-800'>
                    Thanks for trying the Authorizer demo
                  </p>
                  <button
                    type='button'
                    className='mt-6 text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-2.5'
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className='mx-auto w-full max-w-md'>
                  <p className='text-center text-gray-500 mb-5'>
                    Sign in to the hosted demo and explore the dashboard your
                    users would get.
                  </p>
                  <div className='authorizer-demo'>
                    <Authorizer />
                  </div>
                  <p className='mt-5 flex items-start text-xs leading-relaxed text-gray-500 bg-gray-50 rounded-lg p-3'>
                    <FaUserShield className='text-blue-500 mr-2 mt-0.5 shrink-0' />
                    <span>
                      By signing in you&apos;ll join Authorizer&apos;s{' '}
                      <span className='font-semibold text-gray-700'>
                        open-source supporters
                      </span>{' '}
                      — we&apos;ll email you only about major releases and
                      security updates (a few times a year, never spam). We
                      never sell or share your data, and you can unsubscribe
                      anytime.
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* Watch the 2.0 demo video */}
      {isVideoModalOpen && (
        <Modal open={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)}>
          <div>
            <div className='flex items-center justify-between py-3 px-5'>
              <Dialog.Title
                as='h3'
                className='text-xl leading-6 font-medium text-gray-900'
              >
                See Authorizer 2.0 in action 🚀
              </Dialog.Title>
              <button
                type='button'
                aria-label='Close'
                onClick={() => setIsVideoModalOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <div className='mt-2 relative w-full p-5'>
              <iframe
                className='rounded w-full aspect-video'
                src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}`}
                title='Authorizer 2.0 demo on YouTube'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
