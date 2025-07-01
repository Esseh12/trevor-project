import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/dr-ronita-nath.jpg';
import img2 from '../../assets/JDProfeshHeadshot.jpg';
import img3 from '../../assets/Steven_Hobaica.webp';
import img4 from '../../assets/Derrick-Matthews-headshot.jpg';
import img5 from '../../assets/Tiffany-Eden.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const staff = [
	{
		name: 'Dr. Ronita Nath',
		role: 'Research',
		pronouns: '(she/her)',
		img: img1,
	},
	{
		name: 'Dr. Jonah DeChants',
		role: 'Research',
		pronouns: '(he/him)',
		img: img2,
	},
	{
		name: 'Dr. Steven Hobaica',
		role: 'Research',
		pronouns: '(he/him)',
		img: img3,
	},
	{
		name: 'Dr. Derrick Matthews',
		role: 'Research',
		pronouns: '(he/him)',
		img: img4,
	},
	{
		name: 'Dr. Tiffany Eden',
		role: 'Research',
		pronouns: '(she/her)',
		img: img5,
	},
];

const ResearchTeam = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const checkWidth = () => setIsMobileView(window.innerWidth < 1024);
		checkWidth();
		window.addEventListener('resize', checkWidth);
		return () => window.removeEventListener('resize', checkWidth);
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 640, settings: { slidesToShow: 2 } },
			{ breakpoint: 1024, settings: { slidesToShow: 2 } },
			{ breakpoint: 1280, settings: { slidesToShow: 3 } },
			{ breakpoint: 1536, settings: { slidesToShow: 4 } },
		],
	};

	const StaffCard = ({ person }) => (
		<div className='bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-[250px] mx-auto'>
			<img
				src={person.img}
				alt={person.name}
				className='w-full h-44 object-cover'
			/>
			<div className='p-4 text-center text-[#003a48]'>
				<h3 className='font-semibold text-lg'>{person.name}</h3>
				<div className='flex items-center justify-center gap-2'>
					<p className='text-sm text-gray-600'>{person.role}</p>|
					<p className='text-sm text-gray-500'>{person.pronouns}</p>
				</div>
			</div>
		</div>
	);

	return (
		<section className='bg-white px-4 py-16'>
			<div className='max-w-6xl mx-auto text-center'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#003a48] mb-10'>
					Research Staff at The Trevor Project
				</h2>

				{isMobileView ? (
					<Slider {...settings}>
						{staff.map((person, index) => (
							<div
								key={index}
								className='px-3 flex justify-center items-center'>
								<StaffCard person={person} />
							</div>
						))}
					</Slider>
				) : (
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
						{staff.map((person, index) => (
							<StaffCard
								key={index}
								person={person}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default ResearchTeam;
