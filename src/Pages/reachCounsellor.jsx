import Hero from '../Components/ReachCounselor/hero';
import MainReachCounsellor from '../Components/ReachCounselor/mainReachCounsellor';
import NotReadyToTalk from '../Components/ReachCounselor/NotReadyToTalk';
import OtherKindOfSupport from '../Components/ReachCounselor/otherKindOfSupport';
import Footer from '../Components/footer';

const ReachCounselor = () => {
	return (
		<>
			<main>
				<Hero />
				<MainReachCounsellor />
				{/* Info notice */}
				<section className='bg-white px-4 py-12'>
					<div className='max-w-4xl mx-auto bg-[#f4f4f9] rounded-xl px-6 sm:px-10 py-10 text-center'>
						<p className='text-base sm:text-lg md:text-xl text-[#000054] font-medium leading-relaxed'>
							In very specific instances of abuse or a clear concern
							<br className='hidden sm:block' />
							of an in-progress or imminent suicide, Trevor
							<br className='hidden sm:block' />
							counselors may need to contact a child welfare
							<br className='hidden sm:block' />
							agency or emergency service.
						</p>

						<a
							href='#'
							className='inline-block mt-6 text-[#000054] text-base sm:text-lg font-semibold underline hover:text-blue-800 transition-colors'>
							Learn More
						</a>
					</div>
				</section>
				<NotReadyToTalk />
				<OtherKindOfSupport />
			</main>
			<Footer />
		</>
	);
};
export default ReachCounselor;
