import { FaChevronDown } from 'react-icons/fa';
import img1 from '../../assets/CircleOfLight.webp';
import img2 from '../../assets/CircleOfLight_Beacons.webp';
import img3 from '../../assets/CircleOfLight_Constellations.webp';
import img4 from '../../assets/CircleOfLight_Luminaries.webp';
import img5 from '../../assets/CircleOfLight_NorthStars.webp';

const CircleOfLight = () => {
	const donorGroups = [
		{
			title: 'Beacons',
			description: 'Donors making a difference every single day.',
			email: 'beacons@thetrevorproject.org',
			icon: img2,
		},
		{
			title: 'The Constellation',
			description: 'Donors planning to leave a legacy gift.',
			email: 'constellation@thetrevorproject.org',
			icon: img3,
		},
		{
			title: 'Luminaries',
			description: 'Donors making monthly gifts.',
			email: 'luminaries@thetrevorproject.org',
			icon: img4,
		},
		{
			title: 'North Stars',
			description: 'Donors investing in transformative impact.',
			email: 'northstars@thetrevorproject.org',
			icon: img5,
		},
	];

	return (
		<div className='min-h-screen bg-[#101066]'>
			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 py-16'>
				{/* Circle of Light Logo */}
				<div className='text-center mb-12'>
					<div className='inline-flex items-center justify-center w-48 h-48  mb-8 mx-auto '>
						<img
							src={img1}
							alt='circle of light'
						/>
					</div>

					<h1 className='text-4xl md:text-[46px] font-bold leading-14 text-white mb-8'>
						What is the Circle of Light?
					</h1>

					<div className='max-w-4xl mx-auto text-white text-lg md:text-xl leading-relaxed space-y-6'>
						<p>
							The Circle of Light is The Trevor Project's community of donors, a
							committed group of supporters for our mission to end suicide among
							lesbian, gay, bisexual, transgender, queer & questioning young
							people. Together we share a vision of a world where all LGBTQ+
							young people feel loved, seen and celebrated, and Circle of Light
							donors shine the way to that vision.
						</p>

						<p className='text-xl font-medium'>
							Some Circle of Light donors are recognized as part of the
							following groups:
						</p>
					</div>
				</div>

				{/* Donor Groups Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
					{donorGroups.map((group, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl  shadow-xl hover:shadow-2xl transition-all duration-300 '>
							{/* Circle Badge */}
							<div className='flex justify-between items-start mb-6 p-6'>
								<div>
									<h3 className='text-2xl font-bold text-gray-800 mb-3'>
										{group.title}
									</h3>
									<p className='text-[#003A48] text-xl leading-7 max-w-sm'>
										{group.description}
									</p>
								</div>
								<div
									className={`w-24 h-24 ${group.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
									<img
										src={group.icon}
										alt='group icons'
									/>
								</div>
							</div>

							{/* Contact Info */}
							<div className='space-y-4 bg-[#f3f3f7] p-10 rounded-b-2xl'>
								<div>
									<p className='text-[#101066]  mb-2 font-bold'>
										For more information, contact
									</p>
									<a
										href={`mailto:${group.email}`}
										className='text-[#101066] hover:text-[#101066]  font-bold underline underline-offset-4 transition-colors'>
										{group.email}
									</a>
								</div>

								<button className='text-[#101066]  font-bold flex items-center space-x-1 transition-colors bg-white p-3 rounded-full px-4 mt-6'>
									<span>Expand to see more</span>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CircleOfLight;
