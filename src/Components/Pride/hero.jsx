import heroBg from '../../assets/TTP_FY25Pride_WebLangingPage_v6.mp4';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();

	return (
		<div className='relative min-h-screen w-full overflow-hidden'>
			{/* Video Background */}
			<video
				className='absolute top-0 left-0 w-full h-full object-cover z-0'
				autoPlay
				loop
				muted
				playsInline>
				<source
					src={heroBg}
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
			<div className='absolute inset-0 bg-black/40' />
			{/* Main Content */}
			<div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center'>
				{/* Main Heading */}
				<h1 className='text-4xl font-bold text-white mb-8 max-w-xl mx-auto leading-tight'>
					Pride Belongs Here
				</h1>

				{/* Subheading */}
				<p className='text-lg  text-white mb-12 max-w-sm leading-relaxed'>
					Your Support Saves Lives. By giving today, you make a life-saving
					impact for LGBTQ+ young people everywhere.
				</p>

				{/* CTA Button */}
				<button
					className='bg-white text-[#101066] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300  flex items-center'
					onClick={navigate('/be-the-one')}>
					<span>Donate Now</span>
				</button>
			</div>
		</div>
	);
};

export default Hero;
