import Hero from '../Components/Donate/hero';
import BeTheOne from '../Components/Donate/beTheOne';
import Carousel from '../Components/Donate/Carousel';
import ContactForm from '../Components/Donate/contactForm';
import Campaign from '../Components/Donate/Campaign';
import GradientCards from '../Components/Donate/gradientCards';
import Footer from '../Components/footer';

const Donate = () => {
	return (
		<>
			<main>
				<Hero />
				<BeTheOne />
				<Carousel />
				<ContactForm />
				<Campaign />
				<GradientCards />
			</main>
			<Footer />
		</>
	);
};
export default Donate;
