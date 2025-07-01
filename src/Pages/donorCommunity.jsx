import Hero from '../Components/DonorCommunity/hero';
import CircleOfLight from '../Components/DonorCommunity/CircleOfLight';
import Testimonial from '../Components/DonorCommunity/Testimonial';
import BaseDonor from '../Components/DonorCommunity/baseDonor';
import JoinTheCircle from '../Components/DonorCommunity/JoinTheCircle';
import Footer from '../Components/footer';

const DonorCommunity = () => {
	return (
		<>
			<main>
				<Hero />
				<CircleOfLight />
				<div className='py-10 px-4'>
					<div className='max-w-3xl mx-auto text-[#101066] text-center'>
						<h1 className='font-bold text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-[48px] md:leading-[52px]'>
							Your gift helps LGBTQ+ young people find their light.
						</h1>
						<p className='mt-4 text-base sm:text-lg md:text-xl leading-relaxed'>
							As part of the Circle of Light, your partnership makes our mission
							possible, whether you give $10 or $10,000.
						</p>
					</div>
				</div>

				<Testimonial />
				<BaseDonor />
				<JoinTheCircle />
			</main>
			<Footer />
		</>
	);
};
export default DonorCommunity;
