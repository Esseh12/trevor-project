import img1 from '../../assets/mexico.webp';
import img2 from '../../assets/peru.svg';
import img3 from '../../assets/philippines.svg';
import img4 from '../../assets/uk.svg';
import img5 from '../../assets/usa.svg';

const CountryCard = ({ flag, country, year, languages, collaborators }) => (
	<div className='bg-white rounded-lg shadow-md p-6 max-w-xs'>
		<div className='flex flex-col  gap-3 mb-4'>
			<img
				src={flag}
				alt={`${country} flag`}
				className='w-8 h-6 object-cover rounded'
			/>
			<h3 className='text-3xl font-extrabold leading-9.5 text-[#101066]'>
				{country}
			</h3>
		</div>
		<div className='bg-purple-100 text-[#101066] hover:bg-[#101066] hover:text-white px-3 py-1 rounded-full inline-block mb-4 text-xl font-extrabold leading-5'>
			{year}
		</div>
		<div className='mb-4'>
			<p className='text-sm text-[#101066] mb-1 font-bold leading-5'>
				AVAILABLE IN:
			</p>
			<p className='text-xs font-medium text-[#101066]'>{languages}</p>
			<div className='w-12 h-1 bg-orange-500 mt-2'></div>
		</div>
		<p className='text-sm text-[#101066] leading-normal'>{collaborators}</p>
	</div>
);

const TrevorProjectSurvey = () => {
	const countries = [
		{
			flag: img1,
			country: 'México',
			year: '2024',
			languages: 'ESPAÑOL, ENGLISH',
			collaborators:
				'In collaboration with Tania Esmeralda Rocha Sánchez, Aline Itzel Blanco Vera, Yaaj, and Infancias Trans',
		},
		{
			flag: img2,
			country: 'Perú',
			year: '2024',
			languages: 'ESPAÑOL, ENGLISH',
			collaborators:
				'In collaboration with Dr. Kelika Konda, Franceska León Morris, and Dr. Michael Reyes Díaz',
		},
		{
			flag: img3,
			country: 'Philippines',
			year: '2024',
			languages: 'FILIPINO, ENGLISH',
			collaborators:
				'In collaboration with Marc Eric S. Reyes, Junix Jerald I. Delos Santos, Angelle D. Bautista, Moniq M. Muyargas, Jan Gabriel M. Castañeda, Beatriz A. Torre, the Psychological Association of the Philippines, and the PAP LGBT Psychology Special Interest Group',
		},
		{
			flag: img4,
			country: 'United Kingdom',
			year: '2024',
			languages: 'ENGLISH',
			collaborators:
				'In collaboration with Professor Elizabeth McDermott, Dr. Jason Schaub, Dr. Willem J. Stander, McPin Foundation, and the University of Birmingham',
		},
		{
			flag: img5,
			country: 'United States',
			year: '2024',
			languages: 'ENGLISH',
			collaborators: '',
		},
	];

	return (
		<div className='min-h-screen bg-white relative overflow-hidden'>
			{/* Decorative blobs - hidden on mobile */}
			<div className='hidden lg:block'>
				{/* Top left coral blob */}
				<div
					className='absolute top-32 -left-16 w-32 h-40 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full transform rotate-12 opacity-80'
					style={{ backgroundColor: '#ff9999' }}></div>

				{/* Top right coral blob */}
				<div
					className='absolute top-40 -right-20 w-40 h-48 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full transform -rotate-12 opacity-80'
					style={{ backgroundColor: '#ff9999' }}></div>

				{/* Left blue blob */}
				<div className='absolute top-80 -left-12 w-28 h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform rotate-45 opacity-80'></div>

				{/* Right blue blob */}
				<div className='absolute top-72 -right-16 w-36 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full transform -rotate-25 opacity-80'></div>

				{/* Bottom left teal blob */}
				<div className='absolute bottom-40 -left-8 w-24 h-28 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full transform rotate-30 opacity-80'></div>

				{/* Bottom right teal blob */}
				<div className='absolute bottom-32 -right-12 w-32 h-36 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full transform -rotate-15 opacity-80'></div>

				{/* Small yellow accent blobs */}
				<div className='absolute top-96 left-20 w-6 h-6 bg-yellow-400 rounded-full opacity-70'></div>
				<div className='absolute top-80 right-32 w-4 h-4 bg-yellow-400 rounded-full opacity-70'></div>
				<div className='absolute bottom-60 left-40 w-8 h-8 bg-yellow-300 rounded-full opacity-60'></div>
				<div className='absolute bottom-80 right-48 w-5 h-5 bg-purple-300 rounded-full opacity-60'></div>
				<div className='absolute top-60 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50'></div>
			</div>

			{/* Main content */}
			<div className='relative z-10 container mx-auto px-4 py-12'>
				{/* Header section */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h1 className='text-4xl md:text-[50px]  font-extrabold text-[#101066] mb-8 leading-normal'>
						Critical Insights from Around the Globe
					</h1>
					<p className='text-lg md:text-2xl text-[#101066] leading-normal max-w-2xl mx-auto'>
						We are committed to producing innovative research that brings
						knowledge and clinical implications to the field of LGBTQ+ mental
						health and suicide research. We accomplish this by leading the
						development, execution, and analysis of survey data collected from
						LGBTQ+ young people. We translate these findings and statistics to
						inform evidence-based policies and practices.
					</p>
				</div>

				{/* Countries grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12'>
					{countries.map((country, index) => (
						<CountryCard
							key={index}
							{...country}
						/>
					))}
				</div>

				{/* Footer text */}
				<div className='text-center max-w-4xl mx-auto'>
					<p className='text-gray-600 text-sm md:text-base'>
						Below is a list of the countries surveyed by The Trevor Project,
						which currently includes the United States, México, the Philippines,
						the United Kingdom, and Perú.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TrevorProjectSurvey;
