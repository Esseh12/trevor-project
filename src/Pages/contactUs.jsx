import ContactUsHero from '../Components/ContactUs/hero';
import ContactMain from '../Components/ContactUs/TrevorProjectContact';
import SpeakerRequestSection from '../Components/ContactUs/SpeakerRequestSection';
import ContactBase from '../Components/ContactUs/contactBase';
import Footer from '../Components/footer';

const ContactUs = () => {
	return (
		<>
			<main>
				<ContactUsHero />
				<ContactMain />
				<SpeakerRequestSection />
				<ContactBase />

				<div className='text-[#101066] my-16 px-4 text-center text-sm sm:text-base max-w-4xl mx-auto'>
					The Trevor Project is a 501(c)(3), tax-exempt organization. Our EIN is
					95-4681287.{' '}
					<span className='underline underline-offset-8'>Privacy Policy.</span>
				</div>
			</main>
			<Footer backgroundColor='#101066' />
		</>
	);
};
export default ContactUs;
