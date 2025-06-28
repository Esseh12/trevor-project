import Hero from '../Components/Volunteer/Hero';
import Bluebg from '../Components/LandingPage/blueBg';
import JobOpenings from '../Components/Career/jobOpening';
import OtherWaysToHelp from '../Components/OtherWaysToHelp';
import Footer from '../Components/footer';
import careerImg from '../assets/AdobeStock_407170488-scaled.jpeg';

const Career = () => {
	return (
		<>
			<Hero
				title='Wake up every day with'
				highlight='purpose.'
				image={careerImg}
				subText='If you’re looking for the opportunity to work with a talented team that is dedicated to lifting up LGBTQ young people, look no further. The Trevor Project offers many remote career opportunities and internships through LGBTQ suicide prevention hotlines, advocacy, clinical operations, community affairs, and organizational support.'
			/>
			<section className='mt-10 sm:mt-24 md:mt-56'>
				<Bluebg />
			</section>
			<JobOpenings />
			<OtherWaysToHelp />
			<Footer backgroundColor='#101066' />
		</>
	);
};
export default Career;
