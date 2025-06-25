import Banner from '../Components/Banner';
import ResearchComponent from '../Components/Research';
import Footer from '../Components/footer';

const Research = () => {
	return (
		<>
			<Banner
				title='Our Latest Research Briefs and Reports'
				description='The Trevor Project is committed to producing research that provides new knowledge and clinical implications related to LGBTQ youth and suicide risk.'
			/>
			<ResearchComponent />
			<Footer />
		</>
	);
};
export default Research;
