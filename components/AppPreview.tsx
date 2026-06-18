import { type ReactNode } from 'react';
import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';

function BrowserFrame({ url, appName, children }: { url: string; appName: string; children: ReactNode }) {
  return (
    <div className='rounded-2xl border border-gray-200 overflow-hidden shadow-xl bg-white'>
      {/* Browser chrome */}
      <div className='bg-gray-100 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200'>
        <div className='flex gap-1.5'>
          <span className='w-3 h-3 rounded-full bg-red-400' />
          <span className='w-3 h-3 rounded-full bg-yellow-400' />
          <span className='w-3 h-3 rounded-full bg-green-400' />
        </div>
        <div className='flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 font-mono truncate'>
          {url}
        </div>
      </div>

      {/* Mock app shell */}
      <div className='bg-gray-50 min-h-[480px] flex flex-col'>
        {/* App nav */}
        <nav className='bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between'>
          <span className='font-semibold text-gray-800 text-sm'>{appName}</span>
          <div className='hidden sm:flex items-center gap-4 text-xs text-gray-500'>
            <span>Home</span>
            <span>Features</span>
            <span>Pricing</span>
          </div>
        </nav>

        {/* Centered widget area */}
        <div className='flex-1 flex items-center justify-center p-6'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AppPreview() {
  const { user, logout, loading } = useAuthorizer();

  return (
    <section className='container mx-auto max-w-5xl my-20 px-4 md:px-0'>
      <div className='text-center mb-10'>
        <span className='inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4'>
          See it in your app
        </span>
        <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900'>
          Fits any product,{' '}
          <span className='text-blue-600'>out of the box</span>
        </h2>
        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
          Drop the Authorizer component into any app — SaaS, dev tool, e-commerce, AI product. The same login experience, always under your control.
        </p>
      </div>

      {/* Single browser frame */}
      <BrowserFrame url='your-app.com/login' appName='Your App'>
        {loading ? (
          <div className='text-sm text-gray-400'>Loading…</div>
        ) : user ? (
          <div className='w-full max-w-xs mx-auto bg-white rounded-xl border border-gray-200 shadow-lg p-8 text-center'>
            <p className='text-gray-500 text-sm mb-1'>Signed in as</p>
            <p className='font-semibold text-gray-900'>{user.email}</p>
            <button
              type='button'
              onClick={logout}
              className='mt-5 text-sm text-blue-600 hover:underline'
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className='w-full max-w-xs mx-auto authorizer-demo'>
            <Authorizer />
          </div>
        )}
      </BrowserFrame>

      {/* CTA */}
      <p className='mt-6 text-center text-gray-500 text-sm'>
        3 lines of React to add this to your app —{' '}
        <a
          href='https://docs.authorizer.dev/getting-started'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-600 hover:underline'
        >
          read the quickstart →
        </a>
      </p>
    </section>
  );
}
