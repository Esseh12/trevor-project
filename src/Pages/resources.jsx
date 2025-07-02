import Hero from '../Components/Resources/hero';
import {
	trending,
	sexualOrientation,
	mentalHealth,
} from '../Components/Resources/data';
import TrevorCarousel from '../Components/Resources/trevorCarousel';
import ComingOutHero from '../Components/Resources/ComingOutHero';
import WordOfTheDay from '../Components/Resources/WordOfTheDay';
import Footer from '../Components/footer';

const Resources = () => {
	return (
		<>
			<main className='bg-gradient-to-tr from-[#683bcb] via-[#947bf0] to-[#927aef]'>
				<Hero />
				<TrevorCarousel
					items={trending}
					title='Trending'
					subtitle='Explore the latest articles, resources, and guides.'
					slidesToShow={2.5}
					className=''
				/>
				<TrevorCarousel
					items={sexualOrientation}
					title='Sexual Orientation Resources'
					subtitle='Sexual Orientation is just one piece of who you are. The Trevor Project offers several resources for members and allies of the LGBTQ+ community, including articles about understanding LGBTQ+ identities and guides for coming out and supporting young people attracted to more than one gender.'
					slidesToShow={2.5}
					className=''
				/>
				<TrevorCarousel
					items={mentalHealth}
					title='LGBTQ+ Mental Health Resources'
					subtitle='You matter. Let’s keep you thriving. The Trevor Project offers several resources supporting the mental health of LGBTQ+ young people, including self-care guides and articles regarding mental wellness.'
					slidesToShow={2.5}
					className=''
				/>
				<ComingOutHero />
				<TrevorCarousel
					items={trending}
					title='Trending'
					subtitle='Explore the latest articles, resources, and guides.'
					slidesToShow={2.5}
					className=''
				/>
				<TrevorCarousel
					items={sexualOrientation}
					title='Sexual Orientation Resources'
					subtitle='Sexual Orientation is just one piece of who you are. The Trevor Project offers several resources for members and allies of the LGBTQ+ community, including articles about understanding LGBTQ+ identities and guides for coming out and supporting young people attracted to more than one gender.'
					slidesToShow={2.5}
					className=''
				/>
				<TrevorCarousel
					items={mentalHealth}
					title='LGBTQ+ Mental Health Resources'
					subtitle='You matter. Let’s keep you thriving. The Trevor Project offers several resources supporting the mental health of LGBTQ+ young people, including self-care guides and articles regarding mental wellness.'
					slidesToShow={2.5}
					className=''
				/>
				<WordOfTheDay />
			</main>
			<Footer />
		</>
	);
};
export default Resources;
