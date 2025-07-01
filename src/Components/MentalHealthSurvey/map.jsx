import map from '../../assets/map2.png';
import star from '../../assets/logo-trevor.png';

const Map = () => {
	return (
		<section
			id='CriticalInsights'
			className='bg-[#d8f3ff] py-16 md:py-28 flex flex-col items-center justify-center px-4'>
			<div className='flex items-center gap-2 mb-6'>
				<img
					src={star}
					alt='star'
					className='w-8 h-8 md:w-10 md:h-10'
				/>
				<p className='text-lg md:text-xl font-bold leading-normal text-[#101066]'>
					— Surveyed
				</p>
			</div>

			<div className='w-full max-w-7xl'>
				<img
					src={map}
					alt='map'
					className='w-full h-auto mx-auto object-contain'
				/>
			</div>
		</section>
	);
};

export default Map;
