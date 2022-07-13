import Image from 'next/image';

const databases = [
	{
		label: 'MongoDB',
		img: '/images/db/mongodb.svg',
		position: 1,
	},
	{
		label: 'Cassandra',
		img: '/images/db/cassandra.svg',
		position: 2,
	},
	{
		label: 'PostgreSQL',
		img: '/images/db/postgresql.svg',
		position: 3,
	},
	{
		label: 'ArangoDB',
		img: '/images/db/arangodb.svg',
		position: 4,
	},
	{
		label: 'MySQL',
		img: '/images/db/mysql.svg',
		position: 5,
	},
	{
		label: 'SQLite',
		img: '/images/db/sqlite.png',
		position: 6,
	},
	{
		label: 'SQL Server',
		img: '/images/db/sqlServer.svg',
		position: 7,
	},
	{
		label: 'YugaByte',
		img: '/images/db/yugabyteLogo.png',
		position: 8,
	},
	{
		label: 'MariaDB',
		img: '/images/db/mariadb.svg',
		position: 9,
	},
	{
		label: 'PlanetScale',
		img: '/images/db/planetscale.svg',
		position: 10,
	},
	{
		label: 'Scylla',
		img: '/images/db/scylla.svg',
		position: 11,
	},
];

export default function Database() {
	return (
		<div className="bg-slate-50 my-20">
			<div className="container mx-auto max-w-7xl py-16 px-10">
				<h2 className="text-3xl font-semibold text-center">
					Myriad Database Support
				</h2>
				<p className="text-center text-lg text-gray-600">
					You name it and we have it covered for you
				</p>
				<ul className="flex flex-wrap justify-center mt-10">
					{databases.map((item) => (
						<li key={item.position} className="m-5">
							<Image src={item.img} alt={item.label} height={70} width={150} />
						</li>
					))}
				</ul>
				<div className="flex justify-center mt-10">
					<a
						href="https://github.com/authorizerdev/authorizer/issues/new?assignees=&labels=enhancement&template=feature_request.md&title="
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-4 mr-2 mb-2"
					>
						Request new Database Support
					</a>
				</div>
			</div>
		</div>
	);
}
