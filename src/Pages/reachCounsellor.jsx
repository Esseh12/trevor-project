import Hero from '../Components/ReachCounselor/hero';
import MainReachCounsellor from '../Components/ReachCounselor/mainReachCounsellor';
import OtherKindOfSupport from '../Components/ReachCounselor/otherKindOfSupport';
import Footer from '../Components/footer';

const ReachCounselor = () => {
	return (
		<>
			<main>
				<Hero />
				<MainReachCounsellor />
				<OtherKindOfSupport />
			</main>
			<Footer />
		</>
	);
};
export default ReachCounselor;
