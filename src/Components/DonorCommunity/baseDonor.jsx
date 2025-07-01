import img1 from '../../assets/TTP_BrandIllustrations_Present_Square.webp';
import img2 from '../../assets/TTP_BrandIllustrations_LearnTogether_Square.png';
import img3 from '../../assets/TTP_BrandIllustrations_ReachForTheStars_Square.png';
import img4 from '../../assets/TTP_BrandIllustrations_ShowYourPride_Square.png';

const BaseDonor = () => {
	return (
		<>
			{/* Header Section */}
			<section className='mt-16'>
				<div className='flex flex-col justify-center items-center text-center px-4 max-w-[800px] mx-auto mb-36'>
					<h1 className='text-[#101066] text-[32px] sm:text-[46px] font-bold mb-4 leading-snug'>
						How Circle of Light donors are celebrated
					</h1>
					<p className='max-w-3xl text-[18px] sm:text-[22px] leading-8 sm:leading-9 text-[#101066]'>
						As part of the Circle of Light, you will have the opportunity to
						learn more about Trevor’s work, become trained as an advocate for
						LGBTQ+ youth, be an ambassador for our mission, and join a community
						of donors and supporters building a more welcoming world together.
					</p>
				</div>
			</section>

			{/* Content Blocks */}
			<section className='py-16 pt-0 px-4 space-y-24'>
				{/* Block 1 */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10'>
					<img
						src={img1}
						alt='Donor Recognition'
						className='w-full md:w-[44%] h-[320px] sm:h-[420px] object-cover rounded-lg'
					/>
					<h1 className='text-[#101066] text-xl sm:text-2xl md:text-[32px] font-semibold leading-snug max-w-sm text-center md:text-left'>
						Donors receive recognition through our annual report.
					</h1>
				</div>

				{/* Block 2 */}
				<div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
					<h1 className='text-[#101066] text-xl sm:text-2xl md:text-[32px] font-semibold leading-snug max-w-sm text-center md:text-right'>
						Circle members also earn invitations to learn more about our work in
						a community of like-minded supporters throughout the year.
					</h1>
					<img
						src={img2}
						alt='Community Invitation'
						className='w-full md:w-[44%] h-[320px] sm:h-[420px] object-cover rounded-lg'
					/>
				</div>

				{/* Block 3 */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10'>
					<img
						src={img3}
						alt='Welcome Packet'
						className='w-full md:w-[44%] h-[320px] sm:h-[420px] object-cover rounded-lg'
					/>
					<h1 className='text-[#101066] text-xl sm:text-2xl md:text-[32px] font-semibold leading-snug max-w-sm text-center md:text-left'>
						When you make your first gift, you will receive a welcome packet
						complete with information about how your gift makes a difference.
					</h1>
				</div>

				{/* Block 4 */}
				<div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
					<h1 className='text-[#101066] text-xl sm:text-2xl md:text-[32px] font-semibold leading-snug max-w-sm text-center md:text-right'>
						The packet also includes Trevor swag to show your support for LGBTQ+
						young people out in the world.
					</h1>
					<img
						src={img4}
						alt='Swag Pack'
						className='w-full md:w-[44%] h-[320px] sm:h-[420px] object-cover rounded-lg'
					/>
				</div>
			</section>
		</>
	);
};

export default BaseDonor;
