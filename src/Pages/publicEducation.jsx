import learnTogether from '../assets/TTP_BrandIllustrations_LearnTogether_Horizontal.webp';
import Hero from '../Components/Volunteer/Hero';
import TestimonialCarousel from '../Components/Volunteer/testimonialCarousel';
import PublicEducationStats from '../Components/PublicEducation/PublicEducationStats';
import TrainingPrograms from '../Components/PublicEducation/Programs';
import OtherWaysToHelp from '../Components/OtherWaysToHelp';
import Footer from '../Components/footer';

const PublicEducation = () => {
	return (
		<>
			<main>
				<div className='relative'>
					<Hero
						title='Knowledge that has the power'
						backgroundColor='#101066'
						highlight='to heal.'
						image={learnTogether}
						subText={`Competent suicide prevention starts with how we educate ourselves and each other. The Trevor Project offers LGBTQ+ youth suicide prevention trainings that give everyone the ability to help.`}
						imageSize='medium'
						className='pt-36 md:pt-0'
					/>
					<div className='h-0 md:h-24' />
				</div>
				<PublicEducationStats />
				<TrainingPrograms />
				<TestimonialCarousel />
				<OtherWaysToHelp />
			</main>
			<Footer />
		</>
	);
};
export default PublicEducation;
