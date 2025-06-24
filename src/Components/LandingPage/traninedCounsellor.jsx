import dayAndNight from '../../assets/TTP_BrandIllustrations_DayAndNight_Square.png';

const TrainedCounsellor = () => {
	return (
		<section className='py-12 flex relative overflow-hidden min-h-screen'>
			<div className='w-[700px] -left-8 top-24 absolute z-20'>
				<img
					src={dayAndNight}
					alt='day and night'
					className=' rounded-2xl'
				/>
			</div>

			<div className='relative -right-8 ml-auto w-2/3 z-10 flex flex-col justify-center items-center bg-[#dbd5ff] h-[550px] rounded-2xl gap-4'>
				<h1 className='font-semibold text-[42px] leading-12 max-w-xl text-center'>
					Reach out to one of our trained counselors.
				</h1>
				<p className='text-2xl leading-9 max-w-2xl text-center'>
					Call, text, or chat with us anytime you need support. If you are
					thinking about suicide, or feeling lonely, we’re here to listen.
				</p>
			</div>
		</section>
	);
};

export default TrainedCounsellor;
