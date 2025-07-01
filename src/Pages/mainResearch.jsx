import Hero from '../Components/Volunteer/Hero';
import TrevorResearch from '../Components/Reasearch/TrevorResearch';
import ResearchTeam from '../Components/Reasearch/Team';
import NationalSurvey from '../Components/Reasearch/NationalSurvey';
import ResearchOverview from '../Components/Reasearch/ResearchOverview';
import Footer from '../Components/footer';
import heroImg from '../assets/TTP_BrandIllustrations_Community_Horizontal.webp';

const MainReasearch = () => {
	return (
		<>
			<main>
				<Hero
					image={heroImg}
					title='Data makes a '
					highlight='difference.'
					subText={`We believe that research has the opportunity to save LGBTQ+ lives and reveal problems that need solving.`}
					buttonText={`Visit Our Resource Center`}
					backgroundColor='#101066'
				/>
				<TrevorResearch />
				<NationalSurvey />
				<ResearchTeam />
				<ResearchOverview />
			</main>
			<Footer />
		</>
	);
};
export default MainReasearch;
