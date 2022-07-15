import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { FaAngleUp, FaArrowUp, FaCheckCircle, FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Loader from './Loader';
import Modal from './Modal';

export default function Hero() {
	const { loading, user, logout } = useAuthorizer();
	const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
	return (
		<div className="container mx-auto max-w-7xl flex my-20 flex-col pt-0 md:flex-row md:pt-10">
			<div className="flex-1 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-left px-5 md:px-0">
				<h2 className="font-extrabold text-m-h1 text-[length:48px] leading-[48px] md:text-[length:54px] md:leading-[56px] xl:text-d-j text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-300">
					Your Data, Your Control
				</h2>
				<h3 className="font-extrabold text-2xl sm:text-3xl pt-5">
					Authenticate Users | Build Business
				</h3>
				<p className="text-lg text-gray-600">
					Open Source Authentication and Authorization solution for your
					business. Easy to deploy, and easy to integrate
				</p>

				<a
					className="py-3 text-center"
					href="https://www.producthunt.com/posts/authorizer?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-authorizer"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=321526&theme=light&period=daily"
						alt="Authorizer - Open source authentication and authorization solution | Product Hunt"
						width="250"
						height="54"
					/>
				</a>
				<ul className="mt-4 text-gray-600 font-bold">
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />
						<div className="flex-1 flex justify-start text-left">
							Build Secure Apps 10x faster
						</div>
					</li>
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />{' '}
						<div className="flex-1 flex justify-start text-left">
							Low code tool and low cost deployment
						</div>
					</li>
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />{' '}
						<div className="flex-1 flex justify-start text-left">
							Own your user data in your preferred database
						</div>
					</li>
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />
						<div className="flex-1 flex justify-start text-left">
							Authenticate users with multiple auth recipes
						</div>
					</li>
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />
						<div className="flex-1 flex justify-start text-left">
							Authorize Users Based on your business roles
						</div>
					</li>
					<li className="flex items-center mb-2">
						<FaCheckCircle className="text-green-400 mr-3" />{' '}
						<div className="flex-1 flex justify-start text-left">
							OAuth2 and OpenID compatible APIs
						</div>
					</li>
				</ul>
				<div className="mt-8 flex items-center justify-evenly flex-wrap">
					<a
						href="https://railway.app/new/template?template=https://github.com/authorizerdev/authorizer-railway&amp;plugins=postgresql,redis"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-4 mr-2 mb-2"
					>
						Deploy Your Instance
					</a>

					<button
						className="flex text-lg items-center ml-0 md:ml-5 text-blue-500 hover:text-blue-400"
						type="button"
						onClick={() => setIsDemoModalOpen(true)}
					>
						<FaPlay className="mr-2" /> Watch Demo
					</button>
					{isDemoModalOpen && (
						<Modal
							open={isDemoModalOpen}
							onClose={() => setIsDemoModalOpen(false)}
						>
							<div>
								<div className="flex items-center justify-between py-3 px-3">
									<div className="text-center pl-4 sm:text-left">
										<Dialog.Title
											as="h3"
											className="text-xl leading-6 font-medium text-gray-900"
										>
											Introducing Authorizer 🚀
										</Dialog.Title>
									</div>
									<button onClick={() => setIsDemoModalOpen(false)}>
										<IoClose />
									</button>
								</div>
								<div className="mt-2 relative w-full p-5">
									<iframe
										className="rounded"
										width="100%"
										height="315"
										src="https://www.youtube.com/embed/uQka5O2RwpU"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</Modal>
					)}
				</div>
			</div>

			<div className="flex-1 flex flex-col justify-center items-center p-10 ml-0 md:ml-10 mt-10 md:-mt-12">
				<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md w-full">
					{loading ? (
						<Loader />
					) : (
						<>
							{user ? (
								<div>
									<h1 className="font-extrabold text-xl md:text-2xl text-center">
										🙇‍♂️
									</h1>
									<p className="text-lg text-gray-600 text-center">
										Welcome, {user.email}
									</p>
									<h1 className="font-bold text-xl md:text-2xl text-center text-gray-800">
										Thank you for trying Authorizer demo
									</h1>

									<br />
									<div className="flex justify-center">
										<button
											type="button"
											className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-2.5 mr-2 mb-2"
											onClick={logout}
										>
											Logout
										</button>
									</div>
								</div>
							) : (
								<div className="authorizer-login">
									<Authorizer />
								</div>
							)}
						</>
					)}
				</div>
				<h3 className="mt-5 text-lg font-semibold flex items-center">
					Try it now ☝️
				</h3>
			</div>
		</div>
	);
}
