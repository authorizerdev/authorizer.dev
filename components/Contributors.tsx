import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const contributors = [
	{
		name: 'Lakhan Samani',
		img: 'https://lakhan.me/images/profile.jpg',
		github: 'https://github.com/lakhansamani',
		username: 'lakhansamani',
	},
	{
		name: 'Yash Joshi',
		img: 'https://mir-s3-cdn-cf.behance.net/user/115/f8602e40061729.594049a0c06d5.jpg',
		github: 'https://github.com/jyash97',
		username: 'jyash97',
	},
	{
		name: 'Anik Ghosh',
		img: 'https://avatars.githubusercontent.com/u/59804102?v=4',
		github: 'https://github.com/anik-ghosh-au7',
		username: 'anik-ghosh-au7',
	},
	{
		name: 'Nikhil Varma',
		img: 'https://avatars.githubusercontent.com/u/8639235?v=4',
		github: 'https://github.com/nikhil-varma',
		username: 'nikhil-varma',
	},
	{
		name: 'Samyak Bhuta',
		img: 'https://avatars.githubusercontent.com/u/738746?v=4',
		github: 'https://github.com/samyakbhuta/',
		username: 'samyakbhuta',
	},
];

export default function Contributors() {
	return (
		<div className="bg-slate-50 mt-20">
			<div className="container mx-auto max-w-7xl py-16 px-10">
				<h2 className="text-3xl font-semibold text-center">Our Team</h2>
				<p className="text-center text-lg text-gray-600 mt-3">
					Developers behind this project. We’ve spent many sleepless nights
					worrying about security, authentication, authorization performance in
					our career. Now, we want to take care of that for you, so you can
					focus on building a great product instead.
				</p>

				<div className="flex justify-center flex-wrap items-center mt-10">
					{contributors.map((item) => (
						<div className="px-6 py-4" key={item.username}>
							<div className="flex-col  flex justify-center items-center">
								<div className="flex-shrink-0">
									<a
										href={item.github}
										target="_blank"
										rel="noreferrer"
										className="block relative"
									>
										<img
											src={item.img}
											alt={item.name}
											className="mx-auto object-cover rounded-full h-20 w-20 border border-gray-300"
										/>
									</a>
								</div>
								<div className="mt-2 text-center flex flex-col">
									<span className="text-gray-600 text-lg font-medium">
										{item.name}
									</span>
									<a
										href={item.github}
										target="_blank"
										rel="noreferrer"
										className="text-gray-400 text-xs"
									>
										{item.username}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center mt-10">
					<a
						href="https://github.com/sponsors/authorizerdev/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center text-blue-500 border border-blue-500 bg-white font-medium rounded-lg text-lg px-8 py-4 mr-2 mb-2"
					>
						<FaHeart className="text-pink-500" />
						&nbsp;&nbsp;Sponsor Us On Github
					</a>
				</div>
			</div>
		</div>
	);
}
