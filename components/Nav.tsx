import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { HiClipboardList, HiMenu } from 'react-icons/hi';
import Logo from './Logo';

const menuItems = [
	{
		id: `docs`,
		label: `Docs`,
		icon: <HiClipboardList />,
		link: 'https://docs.authorizer.dev',
		isExternal: true,
	},
	{
		id: `github`,
		label: `Github`,
		icon: <FaGithub />,
		link: 'https://github.com/authorizerdev/authorizer',
		isExternal: true,
	},
	{
		id: `Discord`,
		label: `Discord`,
		icon: <FaDiscord />,
		link: 'https://discord.gg/Zv2D5h6kkK',
		isExternal: true,
	},
];

export default function Nav() {
	return (
		<nav className="bg-white border-gray-200 px-4 py-5 fixed w-full z-50 top-0 left-0 right-0 md:px-0">
			<div className="container flex flex-nowrap justify-between items-center mx-auto max-w-7xl">
				<div>
					<Link href="/">
						<a className="flex items-center">
							<Logo />
							<span className="self-center text-xl font-semibold whitespace-nowrap font-major-mono ml-2">
								Authorizer
							</span>
						</a>
					</Link>
				</div>
				<div className="flex justify-end md:justify-center w-1/2">
					<div className="hidden md:flex">
						{menuItems.map(({ id, label, icon, link, isExternal }) => (
							<Link href={link} key={id}>
								<a
									className="flex items-center self-center text-gray-700 hover:text-blue-600 ml-5"
									target={isExternal ? '_blank' : undefined}
								>
									{icon} <span className="ml-1"> {label}</span>
								</a>
							</Link>
						))}
					</div>
					<div className="block md:hidden">
						<Menu as="div" className="ml-3 relative">
							<Menu.Button className=" flex text-xl rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2">
								<span className="sr-only">Menu</span>
								<HiMenu />
							</Menu.Button>
							<Transition
								enter="transition duration-100 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
									{menuItems.map(({ id, label, icon, link, isExternal }) => (
										<Menu.Item key={id}>
											<Link href={link}>
												<a
													className="flex items-center self-center text-gray-700 hover:text-blue-600 px-4 py-2"
													target={isExternal ? '_blank' : undefined}
												>
													{icon} <span className="ml-1"> {label}</span>
												</a>
											</Link>
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</nav>
	);
}
