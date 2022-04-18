import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import Script from 'next/script';
import { AUTHORIZER_CONFIG } from '../constants/authorizer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
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
