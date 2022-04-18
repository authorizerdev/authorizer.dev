import Nav from './Nav';

export default function Layout({ children }) {
	return (
		<div className="min-h-screen">
			<Nav />
			<main className="container mx-auto">{children}</main>
		</div>
	);
}
