import {
	FaBuilding,
	FaCloud,
	FaCode,
	FaConnectdevelop,
	FaDatabase,
	FaExchangeAlt,
	FaFingerprint,
	FaLock,
	FaMailBulk,
	FaNetworkWired,
	FaPlug,
	FaProjectDiagram,
	FaRobot,
	FaServer,
	FaShieldAlt,
	FaSitemap,
	FaSyncAlt,
	FaUserAstronaut,
	FaUsers,
} from 'react-icons/fa';

const features = [
	{
		label: 'SECURE SESSION MANAGEMENT',
		icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
		description:
			'Auth with best services baked in. Secure Session management implemented with HTTP only cookies. Authorization Code flow implemented for mobile based auth.',
		position: 1,
	},
	{
		label: 'AUTH RECIPES',
		icon: <FaUserAstronaut className="text-blue-500 text-2xl" />,
		description:
			'Multiple auth recipes supported out of the box: social login, email and password, magic link, and more.',
		position: 2,
	},
	{
		label: 'CONNECT TO YOUR DATABASE',
		icon: <FaDatabase className="text-blue-500 text-2xl" />,
		description:
			'It supports 13+ databases including major SQL, NoSQL and GraphDBs',
		position: 3,
	},
	{
		label: 'INTEGRATE OR IMPLEMENT',
		icon: <FaCode className="text-blue-500 text-2xl" />,
		description:
			'Built-in universal login page, plus APIs and SDKs so you can build custom UI in JavaScript, React, or any framework.',
		position: 4,
	},
	{
		label: 'Role Based Access Control',
		icon: <FaUsers className="text-blue-500 text-2xl" />,
		description:
			'Define the roles and authorize your APIs with role based session tokens',
		position: 5,
	},
	{
		label: 'FINE-GRAINED AUTHORIZATION (FGA)',
		icon: <FaProjectDiagram className="text-blue-500 text-2xl" />,
		description:
			'Relationship-based access control with an embedded OpenFGA (Google Zanzibar) engine—check_permissions and list_permissions, in-process, no extra service to run.',
		position: 10,
	},
	{
		label: 'PERMISSION-AWARE AI & RAG',
		icon: <FaRobot className="text-blue-500 text-2xl" />,
		description:
			'Build AI assistants and RAG pipelines that respect who can see what—pre-filter retrieval with the user’s own token so the model never reads what it shouldn’t.',
		position: 11,
	},
	{
		label: 'GraphQL, REST & gRPC APIs',
		icon: <FaNetworkWired className="text-blue-500 text-2xl" />,
		description:
			'Full parity across three protocols on standard OAuth2 and OpenID Connect—every operation available over GraphQL, REST, and gRPC. Official SDKs for Go, Python, JavaScript, React, Vue, and Svelte.',
		position: 12,
	},
	{
		label: 'BUILT-IN MCP SERVER',
		icon: <FaPlug className="text-blue-500 text-2xl" />,
		description:
			'Expose read-only identity and permission tools to Claude Desktop, Claude Code, Cursor, and any MCP host—so AI agents can check access before they act. Stdio-only and safe by design.',
		position: 13,
	},
	{
		label: 'DEPLOY ANYWHERE',

		icon: <FaCloud className="text-blue-500 text-2xl" />,
		description:
			'Deploy authentication and authorization anywhere you need: Railway, Heroku, Render, Docker, Kubernetes, and more.',
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
		position: 8,
	},
	{
		label: 'MULTI FACTOR AUTHENTICATION',

		icon: <FaLock className="text-blue-500 text-2xl" />,
		description:
			'TOTP authenticator apps, email and SMS one-time codes, and passkeys as a second factor—on by default, optional per user, with brute-force lockout and admin recovery.',
		position: 9,
	},
	{
		label: 'PASSKEYS & WEBAUTHN',
		icon: <FaFingerprint className="text-blue-500 text-2xl" />,
		description:
			'Phishing-resistant passwordless login with WebAuthn passkeys—Touch ID, Face ID, Windows Hello, and hardware keys. Use them to sign in, or as a second factor.',
		position: 14,
	},
	{
		label: 'ENTERPRISE SSO (SAML & OIDC)',
		icon: <FaBuilding className="text-blue-500 text-2xl" />,
		description:
			'Per-organization SAML 2.0 and OIDC single sign-on to Okta, Entra ID, Google Workspace, and any compliant IdP. Authorizer also runs as a SAML 2.0 Identity Provider for your own downstream apps.',
		position: 15,
	},
	{
		label: 'ORGANIZATIONS & MULTI-TENANCY',
		icon: <FaSitemap className="text-blue-500 text-2xl" />,
		description:
			'First-class organizations with memberships, org-scoped admins, verified email domains, and home-realm discovery that routes users to their own identity provider.',
		position: 16,
	},
	{
		label: 'SCIM 2.0 PROVISIONING',
		icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
		description:
			'Inbound SCIM 2.0 keeps users and groups in sync from your customers’ directories—automatic joiner, mover, and leaver handling, with SCIM groups mapped to roles.',
		position: 17,
	},
	{
		label: 'MACHINE-TO-MACHINE AUTH',
		icon: <FaServer className="text-blue-500 text-2xl" />,
		description:
			'Service accounts with the client_credentials grant, plus workload identity that needs no shared secret—private-key JWT (RFC 7523), SPIFFE JWT-SVIDs, and Kubernetes TokenReview.',
		position: 18,
	},
	{
		label: 'DELEGATION FOR AI AGENTS',
		icon: <FaExchangeAlt className="text-blue-500 text-2xl" />,
		description:
			'RFC 8693 token exchange lets an agent act on a user’s behalf with a verifiable actor chain—delegation only, never silent impersonation. Give each agent its own permissions: it gets what it AND the user are allowed, never the user’s full reach.',
		position: 19,
	},
];

const pillars = [
	'Authentication',
	'Authorization',
	'Security',
	'Integrations',
];

export default function Features() {
	return (
		<div className="container mx-auto my-20 max-w-7xl px-4 md:px-0">
			<div className="mb-14 text-center">
				<span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4">
					Everything you need
				</span>
				<h2 className="font-roboto text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
					The hardest part of app development,{' '}
					<span className="text-blue-600">
						made simple
					</span>
				</h2>
				<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
					Use Authorizer off the shelf and ship a complete auth experience in
					minutes—so you can stay focused on your core product, not on building
					identity from scratch.
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-2">
					{pillars.map((p) => (
						<span
							key={p}
							className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-sm"
						>
							{p}
						</span>
					))}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((item) => (
					<div
						className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
						key={item.position}
					>
						<div className="flex items-center mb-5">
							<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-200 group-hover:bg-blue-100">
								{item.icon}
							</span>
							<div className="ml-4 text-lg font-semibold text-gray-900">
								{item.label}
							</div>
						</div>
						<p className="leading-relaxed text-gray-500 text-md">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
