import Hero from '../Components/MentalHealthSurvey/hero';
import TrevorProjectSurvey from '../Components/MentalHealthSurvey/countryCard';
import Map from '../Components/MentalHealthSurvey/map';
import Footer from '../Components/footer';

const MentalHealthSurvey = () => {
	return (
		<>
			<main>
				<Hero />
				<TrevorProjectSurvey />
				<Map />
			</main>
			<Footer backgroundColor='#40009a' />
		</>
	);
};
export default MentalHealthSurvey;
