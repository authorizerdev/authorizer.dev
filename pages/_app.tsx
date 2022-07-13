import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';

import { pageview } from '../utils/ga';
import { AUTHORIZER_CONFIG } from '../constants/authorizer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			{/* @ts-ignore */}
			<AuthorizerProvider config={AUTHORIZER_CONFIG}>
				<Component {...pageProps} />
			</AuthorizerProvider>
		</>
	);
}

export default MyApp;
