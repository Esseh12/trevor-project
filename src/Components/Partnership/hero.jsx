import google from '../../assets/partnership-google.webp';
import pride from '../../assets/partnership-pride.jpg';

const Hero = () => {
	return (
		<section className='bg-[#003a48] min-h-[950px] flex items-center justify-center py-28 overflow-hidden'>
			<div className='flex items-center justify-between max-w-7xl gap-8'>
				{/* text content */}
				<div className='text-white flex gap-3 items-left flex-col max-w-md'>
					<h1 className='font-bold text-[46px] leading-14'>
						Partner with The Trevor Project
					</h1>
					<p className='text-[26px] leading-9'>
						We have a sophisticated partnership model that is unique, impactful,
						and customizable to meet our business and cause goals.
					</p>
					<div className='mt-6'>
						<button className='text-xl font-bold text-[#003a48] bg-white rounded-lg p-6'>
							Contact Out Team
						</button>
					</div>
				</div>

				{/* Img content */}
				<div className='flex gap-6'>
					{/* img1 */}
					<div className='flex flex-col gap-4 items-center'>
						<img
							src={google}
							alt='pride at google'
							className='object-cover rounded-lg'
							style={{ width: '425px', height: '505px' }}
						/>
						<p className='text-white text-center text-lg leading-[26px] max-w-sm'>
							Google.org fellows and Trevor leadership celebrating our
							collaborative initiative to incorporate innovative technology into
							our platforms and advance Trevor&apos;s mission.
						</p>
					</div>
					{/* img2 */}
					<div className='flex flex-col gap-4 items-center'>
						<img
							src={pride}
							alt='pride awareness'
							className='object-cover rounded-lg'
							style={{ width: '425px', height: '505px' }}
						/>
						<p className='text-white text-center text-lg leading-[26px] max-w-sm'>
							In 2019, Macy's leveraged their expertise in events and parades to
							celebrate Pride and mark the 50th anniversary of the Stonewall
							Uprising.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
