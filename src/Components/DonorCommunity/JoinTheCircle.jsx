import { Link } from 'react-router-dom';

const JoinTheCircle = () => {
	return (
		<section className='min-h-screen bg-white flex items-center justify-center px-4 py-16'>
			<div className='max-w-sm w-full bg-[#dce4e7] rounded-lg p-12 text-center shadow-md'>
				<h2 className='text-2xl md:text-3xl font-semibold text-[#101066] mb-4'>
					Join the Circle
				</h2>
				<p className='text-[#101066] text-sm md:text-base leading-relaxed mb-6'>
					All of us have a role to play in helping LGBTQ+ young people find
					their light. Our donor community helps shape a more welcoming, loving
					world for them.
					<br />
					<br />
					For more information on how donors make a difference and how to join
					the Circle of Light, contact{' '}
					<Link
						to='mailto:development@thetrevorproject.org'
						className='text-[#101066] underline break-words'>
						development@thetrevorproject.org
					</Link>
				</p>
				<Link
					to='https://www.thetrevorproject.org/circle-of-light/'
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block bg-[#101066] text-white font-medium py-6 px-6 rounded-md hover:bg-[#1a00a0] transition'>
					See our Giving Page
				</Link>
			</div>
		</section>
	);
};

export default JoinTheCircle;
