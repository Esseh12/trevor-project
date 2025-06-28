export default function TrainingPrograms() {
	return (
		<div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-52'>
			<div className='max-w-6xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold text-teal-700 mb-6'>
						Our program offerings
					</h1>
					<p className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
						Designed for youth-serving professionals, these trainings offer
						tools and educational resources to help prevent suicide amongst
						LGBTQ+ young people.
					</p>
				</div>

				{/* Training Programs Grid */}
				<div className='grid md:grid-cols-2  gap-8 mb-12 sm: max-w-lg md:max-w-3xl mx-auto'>
					{/* Ally Training */}
					<div className='bg-white rounded-lg  p-8 flex flex-col'>
						<h2 className='text-2xl font-bold text-teal-700 mb-6 text-center'>
							Ally Training
						</h2>
						<p className='text-gray-700 mb-8 flex-grow leading-relaxed'>
							This training program provides a basic framework for understanding
							LGBTQ+ identities and the unique challenges young people often
							face.
						</p>
						<button className='w-full border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-lg font-medium hover:bg-teal-700 hover:text-white transition-colors duration-200'>
							Learn More
						</button>
					</div>

					{/* CARE Training */}
					<div className='bg-white rounded-lg  p-8 flex flex-col'>
						<h2 className='text-2xl font-bold text-teal-700 mb-6 text-center'>
							CARE Training
						</h2>
						<p className='text-gray-700 mb-8 flex-grow leading-relaxed'>
							An interactive training program for youth-serving adults that
							focuses on suicide prevention for LGBTQ+ youth.
						</p>
						<button className='w-full border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-lg font-medium hover:bg-teal-700 hover:text-white transition-colors duration-200'>
							Learn More
						</button>
					</div>

					{/* LGBTQ+ Athletes Training */}
					<div className='bg-white rounded-lg  p-8 flex flex-col md:col-span-2 lg:col-span-1'>
						<h2 className='text-2xl font-bold text-teal-700 mb-6 text-center'>
							LGBTQ+ Athletes Training
						</h2>
						<p className='text-gray-700 mb-8 flex-grow leading-relaxed'>
							An interactive training program for an administrator, a coach, a
							parent, or a student. This training will teach you how to support
							LGBTQ+ young people and help drive positive sports environments
							for all.
						</p>
						<button className='w-full border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-lg font-medium hover:bg-teal-700 hover:text-white transition-colors duration-200'>
							Learn More
						</button>
					</div>
				</div>

				{/* Contact Button */}
				<div className='text-center'>
					<button className='bg-teal-800 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-teal-900 transition-colors duration-200 shadow-lg'>
						Contact Our Training Team
					</button>
				</div>
			</div>
		</div>
	);
}
