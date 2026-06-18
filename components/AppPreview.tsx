import { useState } from 'react';

type AccentColor = 'blue' | 'slate' | 'indigo' | 'violet';

type Tab = {
  id: string;
  label: string;
  url: string;
  appName: string;
  accent: AccentColor;
  loginTitle: string;
  content: 'email-password-google-github' | 'email-password-github' | 'email-google-apple' | 'magic-link';
};

const TABS: Tab[] = [
  {
    id: 'saas',
    label: 'SaaS App',
    url: 'your-saas.com/login',
    appName: 'Acme Corp',
    accent: 'blue',
    loginTitle: 'Sign in to Acme Corp',
    content: 'email-password-google-github',
  },
  {
    id: 'devtool',
    label: 'Dev Tool',
    url: 'console.devtool.io/login',
    appName: 'DevConsole',
    accent: 'slate',
    loginTitle: 'Sign in to DevConsole',
    content: 'email-password-github',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    url: 'shop.example.com/account',
    appName: 'ShopNow',
    accent: 'indigo',
    loginTitle: 'Sign in to ShopNow',
    content: 'email-google-apple',
  },
  {
    id: 'ai',
    label: 'AI Product',
    url: 'ai-assistant.app/login',
    appName: 'AiAssist',
    accent: 'violet',
    loginTitle: 'Sign in to AiAssist',
    content: 'magic-link',
  },
];

const ACCENT_CLASSES: Record<AccentColor, { button: string }> = {
  blue:   { button: 'bg-blue-500 hover:bg-blue-600' },
  slate:  { button: 'bg-slate-700 hover:bg-slate-800' },
  indigo: { button: 'bg-indigo-500 hover:bg-indigo-600' },
  violet: { button: 'bg-violet-500 hover:bg-violet-600' },
};

function LoginCard({ tab }: { tab: Tab }) {
  const ac = ACCENT_CLASSES[tab.accent];
  return (
    <div className='w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-lg p-7'>
      <h2 className='text-lg font-semibold text-gray-900 text-center mb-6'>{tab.loginTitle}</h2>

      {/* Social buttons */}
      {(tab.content === 'email-password-google-github' || tab.content === 'email-password-github' || tab.content === 'email-google-apple') && (
        <div className='space-y-2 mb-4'>
          {(tab.content === 'email-password-google-github' || tab.content === 'email-google-apple') && (
            <button
              type='button'
              className='w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden>
                <path d='M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z' fill='#4285F4'/>
                <path d='M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.8591-3.0477.8591-2.3441 0-4.3291-1.5832-5.036-3.7105H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z' fill='#34A853'/>
                <path d='M3.964 10.71c-.18-.54-.2823-1.1168-.2823-1.71s.1023-1.17.2823-1.71V4.9582H.9574C.3477 6.1732 0 7.5482 0 9s.3477 2.8268.9574 4.0418L3.964 10.71z' fill='#FBBC05'/>
                <path d='M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9574 4.9582L3.964 7.29C4.6709 5.1627 6.6559 3.5795 9 3.5795z' fill='#EA4335'/>
              </svg>
              Continue with Google
            </button>
          )}
          {(tab.content === 'email-password-google-github' || tab.content === 'email-password-github') && (
            <button
              type='button'
              className='w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
                <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'/>
              </svg>
              Continue with GitHub
            </button>
          )}
          {tab.content === 'email-google-apple' && (
            <button
              type='button'
              className='w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
            >
              <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
                <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/>
              </svg>
              Continue with Apple
            </button>
          )}
        </div>
      )}

      {/* Divider (not shown for magic-link) */}
      {tab.content !== 'magic-link' && (
        <div className='relative my-4'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-200' />
          </div>
          <div className='relative flex justify-center text-xs text-gray-400'>
            <span className='bg-white px-2'>or</span>
          </div>
        </div>
      )}

      {/* Email field */}
      <div className='mb-3'>
        <p className='block text-xs font-medium text-gray-600 mb-1'>Email address</p>
        <div className='w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm text-gray-400 bg-gray-50 cursor-not-allowed'>
          you@company.com
        </div>
      </div>

      {/* Password field — not shown for magic-link or email-google-apple */}
      {(tab.content === 'email-password-google-github' || tab.content === 'email-password-github') && (
        <div className='mb-4'>
          <p className='block text-xs font-medium text-gray-600 mb-1'>Password</p>
          <div className='w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm text-gray-300 bg-gray-50 cursor-not-allowed'>
            ••••••••
          </div>
        </div>
      )}

      {/* Primary action button */}
      <button
        type='button'
        className={`w-full text-white font-medium rounded-lg py-2.5 text-sm transition-colors mt-2 ${ac.button}`}
      >
        {tab.content === 'magic-link' ? 'Send magic link' : 'Continue'}
      </button>

      {/* Powered by */}
      <p className='mt-5 text-center text-xs text-gray-400'>
        Secured by{' '}
        <a
          href='https://authorizer.dev'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Authorizer
        </a>
      </p>
    </div>
  );
}

function BrowserFrame({ tab }: { tab: Tab }) {
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
          {tab.url}
        </div>
      </div>

      {/* Mock app shell */}
      <div className='bg-gray-50 min-h-[480px] flex flex-col'>
        {/* App nav */}
        <nav className='bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between'>
          <span className='font-semibold text-gray-800 text-sm'>{tab.appName}</span>
          <div className='hidden sm:flex items-center gap-4 text-xs text-gray-500'>
            <span>Home</span>
            <span>Features</span>
            <span>Pricing</span>
          </div>
        </nav>

        {/* Centered login card */}
        <div className='flex-1 flex items-center justify-center p-6'>
          <LoginCard tab={tab} />
        </div>
      </div>
    </div>
  );
}

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState<string>('saas');
  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section className='container mx-auto max-w-7xl my-20 px-4 md:px-0'>
      <div className='text-center mb-10'>
        <span className='inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4'>
          See it in your app
        </span>
        <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900'>
          Fits any product,{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-400'>
            out of the box
          </span>
        </h2>
        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
          The Authorizer widget adapts to your app — same component, different
          context. Three lines of React to ship a complete auth experience.
        </p>
      </div>

      {/* Tab strip */}
      <div className='flex overflow-x-auto gap-2 pb-1 mb-8 scrollbar-none'>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type='button'
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Browser frame */}
      <BrowserFrame tab={current} />

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
