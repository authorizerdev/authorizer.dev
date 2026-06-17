import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Loader from './Loader';
import Modal from './Modal';

export default function Hero() {
  const { loading, user, logout } = useAuthorizer();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <div className='container mx-auto max-w-7xl flex my-20 flex-col pt-0 md:flex-row md:pt-10'>
      <div className='flex-1 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left px-5 md:px-0'>
        <h1 className='font-extrabold text-m-h1 text-[length:48px] leading-[48px] md:text-[length:48px] md:leading-[48px] xl:text-d-j text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-300'>
          Own your identity layer
        </h1>
        <p className='text-2xl font-bold text-gray-700 mt-2 max-w-xl'>
          Self-hosted authentication and fine-grained authorization—plus
          permission-aware AI your agents can&apos;t talk their way around.
        </p>
        <p className='text-lg text-gray-500 mt-3 max-w-xl'>
          Authorizer is one open-source binary you run on your own
          infrastructure. Every user, role, and permission stays in your
          database—never on someone else&apos;s dashboard.
        </p>

        <a
          href='https://www.producthunt.com/posts/authorizer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-authorizer'
          target='_blank'
          rel='noreferrer'
          className='my-5'
        >
          <Image
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321526&theme=light'
            alt='Authorizer — open-source authentication on Product Hunt'
            width={250}
            height={54}
            priority
          />
        </a>
        <ul className='mt-5 space-y-2.5 text-gray-600'>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>Self-hosted &amp; sovereign</span>
              <span className='text-gray-500'>
                {' '}— your users live in your database, not someone else&apos;s
                dashboard
              </span>
            </div>
          </li>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>No per-seat auth tax</span>
              <span className='text-gray-500'>
                {' '}— pay for infrastructure, not usage
              </span>
            </div>
          </li>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>Every way to sign in</span>
              <span className='text-gray-500'>
                {' '}— social, email/password, magic link, MFA, OAuth2 &amp; OIDC
              </span>
            </div>
          </li>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>
                Fine-grained authorization
              </span>
              <span className='text-gray-500'>
                {' '}— RBAC + relationship-based access control (OpenFGA), built in
              </span>
            </div>
          </li>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>
                Permission-aware AI &amp; MCP
              </span>
              <span className='text-gray-500'>
                {' '}— agents and RAG only retrieve what the user is allowed to see
              </span>
            </div>
          </li>
          <li className='flex items-start'>
            <FaCheckCircle className='text-green-400 mr-3 mt-1 shrink-0' />
            <div className='flex-1 text-left'>
              <span className='font-bold text-gray-800'>Built for your stack</span>
              <span className='text-gray-500'>
                {' '}— GraphQL, REST &amp; gRPC, with SDKs for Go, Python &amp; JS
              </span>
            </div>
          </li>
        </ul>
        <div className='mt-8 flex items-center justify-evenly flex-wrap'>
          <a
            href='https://railway.app/new/template/nwXp1C?referralCode=FEF4uT'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-4 mr-2 mb-2 shadow-sm hover:shadow-md transition-all duration-200'
          >
            Deploy your instance
          </a>

          <button
            className='flex text-lg items-center ml-0 md:ml-5 text-blue-500 hover:text-blue-400 transition-colors duration-200'
            type='button'
            onClick={() => setIsDemoModalOpen(true)}
          >
            <FaPlay className='mr-2' /> Watch demo
          </button>
          {isDemoModalOpen && (
            <Modal
              open={isDemoModalOpen}
              onClose={() => setIsDemoModalOpen(false)}
            >
              <div>
                <div className='flex items-center justify-between py-3 px-3'>
                  <div className='text-center pl-4 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-xl leading-6 font-medium text-gray-900'
                    >
                      Introducing Authorizer 1.0 🚀
                    </Dialog.Title>
                  </div>
                  <button
                    type='button'
                    onClick={() => setIsDemoModalOpen(false)}
                  >
                    <IoClose />
                  </button>
                </div>
                <div className='mt-2 relative w-full p-5'>
                  <iframe
                    className='rounded'
                    width='100%'
                    height='315'
                    src='https://www.youtube.com/embed/aQrpYCyrDjU'
                    title='Authorizer demo on YouTube'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-center items-center p-10 ml-0 md:ml-10 mt-10 md:-mt-12'>
        <div className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md w-full'>
          {loading ? (
            <Loader />
          ) : (
            <>
              {user ? (
                <div>
                  <p className='font-extrabold text-xl md:text-2xl text-center'>
                    🙇‍♂️
                  </p>
                  <p className='text-lg text-gray-600 text-center'>
                    Welcome, {user.email}
                  </p>
                  <p className='font-bold text-xl md:text-2xl text-center text-gray-800'>
                    Thank you for trying the Authorizer demo
                  </p>

                  <br />
                  <div className='flex justify-center'>
                    <button
                      type='button'
                      className='text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-2.5 mr-2 mb-2'
                      onClick={logout}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                <div className='authorizer-login'>
                  <Authorizer />
                </div>
              )}
            </>
          )}
        </div>
        <p className='mt-5 text-lg font-semibold flex items-center'>
          Try it now ☝️
        </p>
        <p className='mt-2 max-w-sm text-center text-sm text-gray-500 leading-relaxed'>
          By trying the demo you&apos;ll see Authorizer&apos;s hosted login and
          signup first-hand — and we&apos;ll only ever send you major product
          updates. No spam.
        </p>
      </div>
    </div>
  );
}
