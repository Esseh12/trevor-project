import Hero from '../Components/Pride/hero';
import TrevorProjectPride from '../Components/Pride/TrevorProjectPride';
import CorporatePartnersCarousel from '../Components/Pride/CorporatePartnersCarousel';
import SupportiveAdult from '../Components/Pride/supportiveAdult';
import Research from '../Components/Pride/research';
import PrideCard from '../Components/Pride/prideCard';
import TrevorSupportSection from '../Components/Pride/SupportCard';
import Footer from '../Components/footer';

const Pride = () => {
	return (
		<>
			<main>
				<Hero />
				<TrevorProjectPride />
				<Research />
				<TrevorSupportSection />
				<SupportiveAdult />
				<PrideCard />
				<CorporatePartnersCarousel />
			</main>
			<Footer />
		</>
	);
};
export default Pride;
