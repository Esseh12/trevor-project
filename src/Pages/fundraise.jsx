import heroImg from '../assets/TTP_FundraiserPage_Images_Hero.webp';
import Hero from '../Components/Fundraise/hero';
import MainFundRaiser from '../Components/Fundraise/mainFundraiser';
import FundraiserStart from '../Components/Fundraise/FundraiserStar';
import Footer from '../Components/footer';

const Fundraise = () => {
	return (
		<>
			<main>
				<Hero image={heroImg} />
				<div className='mt-24'>
					<MainFundRaiser />
					<FundraiserStart />
				</div>
			</main>
			<Footer backgroundColor='#101066' />
		</>
	);
};
export default Fundraise;
