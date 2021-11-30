import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Modal from './modal.jsx';

export default function Intro() {
	const [isOpen, setIsOpen] = useState(true);
	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<Modal open={isOpen} onClose={closeModal}>
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
					<div
						className="flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10 cursor-pointer"
						onClick={closeModal}
					>
						<XIcon className="h-6 w-6" aria-hidden="true" />
					</div>
				</div>
				<div className="mt-2 relative w-full h-0 pb-80">
					<iframe
						className="absolute top-0 left-0 w-full bottom-0"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/n0iANH9n6aM"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</Modal>
	);
}
