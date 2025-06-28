import BecomingVolunteer from '../Components/Volunteer/becomingVolunteer';
import Hero from '../Components/Volunteer/Hero';
import ReasonToVolunteer from '../Components/Volunteer/reasonsToVolunteer';
import VolunteerFAQ from '../Components/Volunteer/volunteerFaq';
import TestimonialCarousel from '../Components/Volunteer/testimonialCarousel';
import OtherWaysToHelp from '../Components/OtherWaysToHelp';
import Footer from '../Components/footer';
import volunteerImg from '../assets/TrevorVolunteer_2.jpg';
import supportiveAdult from '../assets/TTP_SupportiveAdult_Holly-Julia2-scaled.jpg';
import amari from '../assets/TTP_Individual_Amari2-scaled.jpg';
import volunteer2 from '../assets/TrevorVolunteer_4-scaled.jpg';

const Volunteer = () => {
	return (
		<>
			<Hero
				title='Make a'
				highlight='difference.'
				buttonText='Get Started'
				image={volunteerImg}
			/>
			{/* help save lives */}
			<section className='mt-28'>
				<div className='min-h-screen flex flex-col justify-center items-center text-center px-4 max-w-[800px] mx-auto'>
					<h1 className='text-[#101066] text-[46px] leading-14 font-bold mb-4'>
						You can help us save lives through our virtual volunteer
						opportunity.
					</h1>
					<p className='max-w-3xl text-[26px] leading-9 text-[#101066]'>
						As a crisis support volunteer, you are on the front lines; working
						one-on-one with LGBTQ+ young people to help them navigate tough
						times and to prevent suicide.
					</p>
				</div>
			</section>
			{/* supportive adult */}
			<section className='py-16 pt-0 px-4 space-y-16'>
				{/* Block 1: Image Left, Text Right */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20'>
					<img
						src={supportiveAdult}
						alt='supportive adult'
						className='w-full md:w-[44%] h-[420px]  object-cover rounded-lg'
					/>
					<h1 className='text-[#101066] text-2xl md:text-[32px] font-semibold leading-snug text-center  max-w-sm'>
						Acceptance from at least one adult can decrease the risk of LGBTQ+
						youth attempting suicide by 40%.
					</h1>
				</div>

				{/* Block 2: Text Left, Image Right */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20'>
					<h1 className='text-[#101066] text-2xl md:text-[32px] font-semibold leading-snug text-center  max-w-sm'>
						One volunteer can help support more than 100 young people that
						wouldn’t be supported otherwise.
					</h1>
					<img
						src={amari}
						alt='support example'
						className='w-full md:w-[44%] h-[420px]  object-cover rounded-lg'
					/>
				</div>

				{/* Block 3: Image Left, Text Right */}
				<div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20'>
					<img
						src={volunteer2}
						alt='support another'
						className='w-full md:w-[44%] h-[420px]  object-cover rounded-lg'
					/>
					<h1 className='text-[#101066] text-2xl md:text-[32px] font-semibold leading-snug text-center  max-w-sm'>
						Over the past year, volunteers helped us answer over 65,000 calls,
						chats, and texts.
					</h1>
				</div>
			</section>
			<BecomingVolunteer />
			<ReasonToVolunteer />
			<VolunteerFAQ />
			<TestimonialCarousel />
			<OtherWaysToHelp />
			<Footer />
		</>
	);
};
export default Volunteer;
