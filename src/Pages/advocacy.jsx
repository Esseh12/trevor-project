import heroImg from '../assets/TTP_BrandIllustrations_ShowYourPride_Horizontal.webp';
import Hero from '../Components/Volunteer/Hero';
import OurWork from '../Components/Advocacy/OurWork';
import AdvocacyInAction from '../Components/Advocacy/AdvocacyInAction';
import QrCode from '../Components/Advocacy/qrcode';
import Testimonial from '../Components/Advocacy/testimonial';
import Footer from '../Components/footer';

const Advocacy = () => {
	return (
		<>
			<main>
				<Hero
					image={heroImg}
					title='Advocacy & Government'
					highlight='Affairs'
					subText={`Creating a more welcoming world.`}
				/>
				<OurWork />
				<AdvocacyInAction />
				<QrCode />
				<Testimonial />
			</main>
			<Footer />
		</>
	);
};
export default Advocacy;
