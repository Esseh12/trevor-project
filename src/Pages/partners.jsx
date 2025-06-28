import Hero from '../Components/Partnership/hero';
import OtherWaysToHelp from '../Components/OtherWaysToHelp';
import Footer from '../Components/footer';

const offerings = [
	{
		title: 'Corporate Partnerships',
		text: 'Our corporate partnership philosophy is rooted in a win-win mentality; we develop long-term partnerships that broaden our impact while...',
	},
	{
		title: 'Product Partnerships',
		text: "Trevor's well-known and well-respected brand provides a powerful opportunity for companies to show their support and commitment to the LGBTQ+...",
	},
	{
		title: 'Institutional Grants',
		text: 'Trevor partners with private foundations and governments whose giving priorities align with our work in any of the following impact areas: mental health,...',
	},
];

const Partners = () => (
	<>
		<Hero />

		<section className='bg-[#d9e2e4] py-16 px-4 sm:px-6 lg:px-8 text-center text-[#003A48]'>
			<div className='max-w-3xl mx-auto'>
				<h1 className='text-xl lg:text-2xl font-medium'>OUR PHILOSOPHY</h1>
				<p className='mt-3 text-xl md:text-2xl font-semibold'>
					Our partnerships empower us to serve every LGBTQ+ young person that
					needs our support.
				</p>
			</div>
		</section>

		<section className='bg-white py-28 px-4 sm:px-6 lg:px-8 text-[#101066] text-center'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl lg:text-[40px] font-bold mb-4'>
					Our Partnership Offerings
				</h2>
				<p className='text-xl md:text-2xl mb-18 md:mb-24 max-w-4xl mx-auto'>
					There are many ways that ERGs can partner and support our mission to
					save young LGBTQ+ lives.
				</p>

				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left text-[#003A48]'>
					{offerings.map(({ title, text }) => (
						<div
							key={title}
							className='border border-[#b2cfd2] rounded-lg p-6 pb-18'>
							<h3 className='text-xl  md:text-[26px] font-semibold mb-4 leading-9 text-black'>
								{title}
							</h3>
							<p className='text-xl leading-[30px] mb-6 text-black'>{text}</p>
							<button className='text-xl text-black leading-[26px] font-bold underline underline-offset-8 hover:decoration-wavy'>
								Learn More
							</button>
						</div>
					))}
				</div>

				<div className='mt-12'>
					<button className='bg-[#101066] text-white p-6  rounded-md font-bold  text-xl leading-7 hover:bg-[#101066]/80 transition-colors'>
						Become A Partner with The Trevor Project
					</button>
				</div>
			</div>
		</section>

		<OtherWaysToHelp />
		<Footer backgroundColor='#101066' />
	</>
);

export default Partners;
