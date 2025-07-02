import Hero from '../Components/LandingPage/Hero';
import CelebratePride from '../Components/LandingPage/celebratePride';
import TrainedCounsellor from '../Components/LandingPage/traninedCounsellor';
import Project from '../Components/LandingPage/Project';
import ResourceCenter from '../Components/LandingPage/ResourceCenter';
import Base from '../Components/LandingPage/base';
import Footer from '../Components/footer';

const Homepage = () => {
	return (
		<>
			<Hero />
			<CelebratePride />
			<TrainedCounsellor />
			<ResourceCenter />
			<Project />
			<Base />
			<Footer />
		</>
	);
};

export default Homepage;
