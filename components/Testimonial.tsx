const testimonials = [
	{
		description:
			'First time I found Authorizer at Product Hunt I fall in love with this. Then I realize this is a perfect fit solution for me. So, I want to say thank you for building an amazing product. Especially as you made it Open Source.',
		user: 'Aris Ripandi',
		link: 'https://twitter.com/riipandi',
	},
	{
		description:
			'Authorizer simplifies the implementation of a login system and is fast and light on resources. The React.js library also vastly simplifies the implementation of state management in a project. The author, Lakhan Samani, is also extremely helpful and easy to work with. Overall, Authorizer saves numerous hours of headaches and provides a great experience for developers.',
		user: 'Rattley',
		link: 'https://github.com/0t4u/',
	},
	{
		description: `I have been working on an edutainment product for the past few months. The authentication, authorization flow was one of the tasks that I had to take care of. I used the Authorizer for the same and it did not take me much time, from integration with the product to setting it up on the cloud. It was a great experience as a developer to be able to use an open-source solution to a fairly complex problem with such ease. Thanks to the authorizer team.`,
		user: 'Nitesh Agarwal',
		link: 'https://github.com/agarwal-nitesh',
	},
];

export default function Testimonials() {
	return (
		<div className="">
			<div className="container mx-auto my-20 max-w-7xl">
				<h1 className="text-3xl text-center mb-3 font-bold">Loved By Users</h1>
				<p className="text-center text-gray-600 mb-10 text-lg">
					Join our community on{' '}
					<a
						href="https://discord.gg/Zv2D5h6kkK"
						target="_blank"
						rel="noreferrer"
						className="text-blue-500 "
					>
						Discord
					</a>
					. You can also share your experience{' '}
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSentFcPBkpSVvDYD1cp_nckFQLPHHpGcdbkwz2nJHbGhlremg/viewform?usp=sf_link"
						target="_blank"
						rel="noreferrer"
						className="text-blue-500 "
					>
						here
					</a>{' '}
					and help us build more trust.
				</p>
				<div className="flex flex-wrap justify-center">
					{testimonials.map((item, index) => (
						<div
							className="bg-white border border-gray-200 w-full md:w-72 shadow-lg mx-5 my-3 rounded-xl p-4"
							key={`testimonial_${index}`}
						>
							<p className="text-gray-600 ">
								<span className="font-bold text-blue-500 text-lg">“</span>
								{item.description}
								<span className="font-bold text-blue-500 text-lg">”</span>
							</p>
							<div className="flex items-center mt-4">
								<div className="flex flex-col ml-2 justify-between">
									<a href={item.link}>
										<span className="font-semibold text-blue-500 text-sm">
											- {item.user}
										</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
