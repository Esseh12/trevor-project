import img1 from '../../assets/TTP_FundraiserPage_Images_Individual.webp';
import img2 from '../../assets/TTP_FundraiserPage_Images_Team.webp';
import img3 from '../../assets/TTP_FundraiserPage_Images_Streaming.webp';
import img4 from '../../assets/TTP_EOY-Evergreen-Fundraising_web-headers_V02_Web-Thumbnail.webp';

const MainFundRaiser = () => {
	return (
		<section className='py-16 pt-0 px-4 space-y-16'>
			{/* Block 1 */}
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24'>
				<div className='flex flex-col gap-3 text-[#101066] max-w-sm order-2 md:order-1 text-center md:text-left'>
					<h1 className='font-semibold text-[28px] md:text-[40px] leading-tight md:leading-[50px]'>
						Fundraise as an individual.
					</h1>
					<p className='text-base md:text-[22px] leading-relaxed font-medium'>
						Personalize the page with information about you and why you’re
						fundraising to save young LGBTQ lives.
					</p>
					<div>
						{' '}
						<button className='text-white bg-[#101066] font-semibold py-2 px-6 rounded-xl'>
							Create Your Own Page
						</button>
					</div>
				</div>
				<img
					src={img1}
					alt='individual fundraiser'
					className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg order-1 md:order-2'
				/>
			</div>

			{/* Block 2 */}
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24'>
				<img
					src={img2}
					alt='team fundraiser'
					className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg'
				/>
				<div className='flex flex-col gap-3 text-[#101066] max-w-sm text-center md:text-left'>
					<h1 className='font-semibold text-[28px] md:text-[40px] leading-tight md:leading-[50px]'>
						Fundraise as a team.
					</h1>
					<p className='text-base md:text-[22px] leading-relaxed font-medium'>
						Team fundraising pages allow members of the team to have individual
						pages that contribute to a larger team goal.
					</p>
					<div>
						{' '}
						<button className='text-white bg-[#101066] font-semibold py-2 px-6 rounded-xl'>
							Start a Team Fundraiser
						</button>
					</div>
				</div>
			</div>

			{/* Block 3 */}
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24'>
				<div className='flex flex-col gap-3 text-[#101066] max-w-sm order-2 md:order-1 text-center md:text-left'>
					<h1 className='font-semibold text-[28px] md:text-[40px] leading-tight md:leading-[50px]'>
						Fundraise while streaming.
					</h1>
					<p className='text-base md:text-[22px] leading-relaxed font-medium'>
						Set up an online fundraiser on Tiltify to integrate directly with
						your favorite streaming platform (ie. Twitch/YouTube/etc).
					</p>
					<div>
						<button className='text-white bg-[#101066] font-semibold py-2 px-6 rounded-xl'>
							Start a Tiltify Fundraiser
						</button>
					</div>
				</div>
				<img
					src={img3}
					alt='streaming fundraiser'
					className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg order-1 md:order-2'
				/>
			</div>

			{/* Block 4 */}
			<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24'>
				<img
					src={img4}
					alt='in memoriam fundraiser'
					className='w-full md:w-[44%] h-[280px] md:h-[420px] object-cover rounded-lg'
				/>
				<div className='flex flex-col gap-3 text-[#101066] max-w-sm text-center md:text-left'>
					<h1 className='font-semibold text-[28px] md:text-[40px] leading-tight md:leading-[50px]'>
						Fundraise in memoriam.
					</h1>
					<p className='text-base md:text-[22px] leading-relaxed font-medium'>
						Create a fundraising page to raise funds in honor of a loved one.
						Family and friends can share stories, leave notes of support and
						donate to create a brighter future for LGBTQ young people.
					</p>
					<div>
						<button className='text-white bg-[#101066] font-semibold py-2 px-6 rounded-xl'>
							Create a Commemorative Fund
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainFundRaiser;
