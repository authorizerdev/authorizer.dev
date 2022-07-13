export default function Footer() {
	return (
		<div className="flex justify-center items-center flex-col p-5 bg-gray-50 flex-wrap font-semibold">
			<div>&copy;Copyright {new Date().getFullYear()} authorizer.dev</div>
		</div>
	);
}
