import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
	const description = `Open Source Authentication and Authorization solution for your business. Easy to integrate and quick to implement with available SDKs`;
	const title = `Authorizer | Your data your control`;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="keywords"
					content="auth,auth0,authorizer,security,authorization,open-source,heroku"
				/>
				<meta property="og:image" content="/images/logo.png" />
				<meta property="og:description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:type" content={'website'} />
				<meta property="og:url" content={`/`} />
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:creator" content="authorizer.dev" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon_io/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon_io/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon_io/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicon_io/android-chrome-192x192.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/favicon_io/android-chrome-512x512.png"
				></link>
			</Head>
			<div className="min-h-screen">
				<Nav />
				<main className="pt-10">{children}</main>
				<Footer />
			</div>
		</>
	);
}
