import {
	FaBuffer,
	FaCloud,
	FaCode,
	FaConnectdevelop,
	FaDatabase,
	FaLock,
	FaMailBulk,
	FaShieldAlt,
	FaUserAstronaut,
} from 'react-icons/fa';

const features = [
	{
		label: 'MODERN STACK',
		icon: <FaBuffer className="text-blue-500 text-2xl" />,
		description:
			'Built using modern stack with best practises. It uses Go, GraphQL, Javascript',
		position: 1,
	},
	{
		label: 'SECURE SESSION MANAGEMENT',
		icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
		description:
			'Auth with best services baked in. Session management implemented with HTTP only cookies. JWT bearer tokens implemented with access token and refresh token.',
		position: 2,
	},
	{
		label: 'AUTH RECIPES',
		icon: <FaUserAstronaut className="text-blue-500 text-2xl" />,
		description:
			'MuLtiple auth recipes supported out of the box. Supports major social login, basic auth, magic link auth and more coming soon…',
		position: 3,
	},
	{
		label: 'CONNECT TO ANY DATABASE',
		icon: <FaDatabase className="text-blue-500 text-2xl" />,
		description:
			'It supports 11+ databases including major SQL, NoSQL and GraphDBs',
		position: 4,
	},
	{
		label: 'INTEGRATE OR IMPLEMENT',
		icon: <FaCode className="text-blue-500 text-2xl" />,
		description:
			' Got a framework? We’ve it all covered. Be it javascript, react or any framework! Moresdks coming soon…',
		position: 5,
	},
	{
		label: 'DEPLOY ANYWHERE',

		icon: <FaCloud className="text-blue-500 text-2xl" />,
		description:
			'With multiple deployment options deploy your authentication and authorization serviceany where. Currently supporting Heroku, Docker and Kubernetes.',
		position: 6,
	},
	{
		label: 'CUSTOMIZE EMAILS',

		icon: <FaMailBulk className="text-blue-500 text-2xl" />,
		description:
			'Send emails with custom email templates and dynamic variables',
		position: 7,
	},
	{
		label: 'LISTEN TO EVENTS',

		icon: <FaConnectdevelop className="text-blue-500 text-2xl" />,
		description:
			'Configure webhooks for various events on the authorizer service and take perform necessary actions with event data',
		position: 7,
	},
	{
		label: 'MULTI FACTOR AUTHENTICATION',

		icon: <FaLock className="text-blue-500 text-2xl" />,
		description:
			'Added layer of security with email based OTP for your basic authentication recipe',
		position: 7,
	},
];

export default function Features() {
	return (
		<div className="container mx-auto my-20 max-w-7xl">
			<div className="mb-16 text-center">
				<h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
					Authentication | Authorization | Security | Integrations
				</h2>
				<p className="text-xl text-gray-600 m-2">
					The hardest part of the application development,{' '}
					<span className="font-semibold text-blue-500">made simple.</span>
				</p>
				<p className="text-gray-600 m-2">
					You can use Authorizer off the shelf and provide an amazing digital
					experience in just 3 minutes. <br /> We rather have you focused on
					your core business and build stuff that matters.
				</p>
			</div>
			<div className="flex flex-wrap my-12 ">
				{features.map((item) => (
					<div
						className={`w-full border-b md:w-1/2 ${
							item.position % 3 !== 0 ? `md:border-r` : ''
						} lg:w-1/3 p-8`}
						key={item.position}
					>
						<div className="flex items-center mb-6">
							{item.icon}
							<div className="ml-4 text-xl">{item.label}</div>
						</div>
						<p className="leading-loose text-gray-500  text-md">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
