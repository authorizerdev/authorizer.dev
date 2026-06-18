import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { FaPlay, FaArrowRight, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Loader from './Loader';
import Modal from './Modal';

const DEMO_VIDEO_ID = 'aQrpYCyrDjU';

const DEMO_COPY_COMMAND = `docker run -p 8080:8080 -u root \\
  -v authorizer_data:/authorizer/data \\
  quay.io/authorizer/authorizer \\
  --database-type=sqlite \\
  --database-url=/authorizer/data/data.db \\
  --client-id=123456 \\
  --client-secret=secret \\
  --admin-secret=admin \\
  --jwt-type=HS256 \\
  --jwt-secret=test`;

const TRUST_SIGNALS = ['Apache-2.0 open source', 'Self-host in minutes', 'OAuth2 & OIDC', '13+ databases'];

const ECOSYSTEM = ['Kubernetes', 'Docker', 'Helm', 'Railway', 'PostgreSQL', 'MongoDB'];

export default function Hero() {
  const { loading, user, logout } = useAuthorizer();
  const [isTryModalOpen, setIsTryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-reopen the demo modal when user returns from OAuth redirect.
  // The flag is set in openDemoModal() before social login redirects away.
  useEffect(() => {
    if (!loading && user && sessionStorage.getItem('authorizer_demo_pending') === '1') {
      sessionStorage.removeItem('authorizer_demo_pending');
      setIsTryModalOpen(true);
    }
  }, [loading, user]);

  // Clean up the copy timer on unmount to avoid setState on unmounted component.
  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  function openDemoModal() {
    sessionStorage.setItem('authorizer_demo_pending', '1');
    setIsTryModalOpen(true);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(DEMO_COPY_COMMAND);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      setCopied(true);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className='container mx-auto max-w-7xl my-20 px-5 md:pt-10'>
      {/* Split hero: text left, terminal right */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

        {/* Left column */}
        <div className='flex flex-col'>
          <span className='inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1 w-fit'>
            Cloud-native · Open source · Apache-2.0
          </span>

          <h1 className='mt-6 font-fraunces font-extrabold text-[44px] leading-[50px] md:text-[60px] md:leading-[66px] text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-300'>
            Own your identity layer
          </h1>

          <p className='text-xl text-gray-600 mt-5 max-w-xl'>
            The open-source auth platform you run yourself—authentication,
            fine-grained authorization, and permission-aware AI, with every user
            in{' '}
            <span className='font-semibold text-gray-800'>your own database</span>.
          </p>

          <div className='mt-9 flex flex-col sm:flex-row items-start gap-4'>
            <a
              href='https://railway.com/deploy/authorizer-1?referralCode=FEF4uT&utm_medium=integration&utm_source=template&utm_campaign=generic'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto text-center text-white bg-blue-500 hover:bg-blue-400 font-semibold rounded-lg text-lg px-8 py-4 shadow-sm hover:shadow-md transition-all duration-200'
            >
              Deploy your instance
            </a>
            <a
              href='https://github.com/authorizerdev/authorizer'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto flex items-center justify-center gap-2 text-lg font-semibold rounded-lg px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200'
            >
              <FaGithub />
              <span>View on GitHub</span>
              <span className='text-sm text-gray-400 font-normal'>4.8k ★</span>
            </a>
          </div>

          <ul className='mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500'>
            {TRUST_SIGNALS.map((signal) => (
              <li key={signal} className='flex items-center'>
                <span className='w-1.5 h-1.5 rounded-full bg-green-400 mr-2' />
                {signal}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: terminal card */}
        <div className='relative rounded-2xl bg-gray-900 p-6 shadow-2xl overflow-hidden'>
          {/* Terminal chrome */}
          <div className='flex items-center gap-2 mb-4'>
            <span className='w-3 h-3 rounded-full bg-red-500' />
            <span className='w-3 h-3 rounded-full bg-yellow-400' />
            <span className='w-3 h-3 rounded-full bg-green-500' />
            <span className='ml-3 text-xs text-gray-500 font-mono'>terminal</span>
          </div>

          {/* Copy button */}
          <button
            type='button'
            aria-label='Copy command to clipboard'
            onClick={handleCopy}
            className='absolute top-5 right-5 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors bg-gray-800 hover:bg-gray-700 rounded-md px-2.5 py-1.5'
          >
            {copied ? <FaCheck className='text-green-400' /> : <FaCopy />}
            {copied ? 'Copied' : 'Copy'}
          </button>

          {/* Command */}
          <pre className='font-mono text-xs sm:text-sm text-gray-100 overflow-x-auto whitespace-pre leading-relaxed'>
            <span className='text-gray-500'>$ </span>
            <span>{`docker run -p 8080:8080 -u root \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    -v authorizer_data:/authorizer/data \\`}</span>
            {`\n`}<span className='text-blue-300'>{`    quay.io/authorizer/authorizer \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --database-type=sqlite \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --database-url=/authorizer/data/data.db \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --client-id=123456 \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --client-secret=secret \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --admin-secret=admin \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --jwt-type=HS256 \\`}</span>
            {`\n`}<span className='text-gray-100'>{`    --jwt-secret=test`}</span>
          </pre>

          {/* Output lines */}
          <div className='mt-5 space-y-1.5 font-mono text-xs sm:text-sm border-t border-gray-700 pt-4'>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span className='text-gray-300'>Auth server live at </span>
              <span className='text-blue-300'>http://localhost:8080</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span className='text-gray-300'>Dashboard at&nbsp;&nbsp;&nbsp;</span>
              <span className='text-blue-300'>http://localhost:8080/dashboard</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span className='text-gray-300'>OIDC config at&nbsp;</span>
              <span className='text-blue-300'>http://localhost:8080/.well-known/openid-configuration</span>
            </div>
            <div className='flex items-center gap-2 mt-2 pt-2 border-t border-gray-800'>
              <span className='text-gray-500 text-xs'>OpenFGA engine embedded · 13+ databases · OAuth2/OIDC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem logo strip */}
      <div className='mt-14 border-t border-gray-100 pt-8'>
        <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 text-center mb-4'>
          Runs on
        </p>
        <ul className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-400'>
          {ECOSYSTEM.map((name, i) => (
            <li key={name} className='flex items-center gap-6'>
              {name}
              {i < ECOSYSTEM.length - 1 && (
                <span className='text-gray-200' aria-hidden>·</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Try demo + video strip */}
      <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-6'>
        <button
          type='button'
          onClick={openDemoModal}
          className='flex items-center text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200'
        >
          Try the live demo <FaArrowRight className='ml-2 text-sm' />
        </button>
        <span className='hidden sm:block text-gray-200' aria-hidden>|</span>
        <button
          type='button'
          onClick={() => setIsVideoModalOpen(true)}
          className='flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-200'
        >
          <FaPlay className='mr-2 text-sm' /> Watch the 2.0 demo
        </button>
        <a
          href='https://www.producthunt.com/posts/authorizer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-authorizer'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321526&theme=light'
            alt='Authorizer on Product Hunt'
            width={160}
            height={36}
            priority
          />
        </a>
      </div>

      {/* Try demo modal */}
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
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* Video modal */}
      {isVideoModalOpen && (
        <Modal open={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)}>
          <div>
            <div className='flex items-center justify-between py-3 px-5'>
              <Dialog.Title
                as='h3'
                className='text-xl leading-6 font-medium text-gray-900'
              >
                See Authorizer 2.0 in action
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
