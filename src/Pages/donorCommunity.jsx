import Hero from '../Components/DonorCommunity/hero';
import CircleOfLight from '../Components/DonorCommunity/CircleOfLight';
import BaseDonor from '../Components/DonorCommunity/baseDonor';
import JoinTheCircle from '../Components/DonorCommunity/JoinTheCircle';
import Footer from '../Components/footer';

const DonorCommunity = () => {
	return (
		<>
			<main>
				<Hero />
				<CircleOfLight />
				<BaseDonor />
				<JoinTheCircle />
			</main>
			<Footer />
		</>
	);
};
export default DonorCommunity;
