import { useState } from 'react';
import image1 from '../../assets/EOY2023_Landing_Photos_SubmitForm.webp';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		pronouns: '',
		message: '',
		shareExperience: false,
	});

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<div className='min-h-screen bg-[#f9c058]'>
			{/* Header Section */}
			<div className='bg-white px-4 py-8 md:px-8'>
				<div className='max-w-6xl mx-auto text-center md:text-left'>
					<h1 className='text-3xl md:text-4xl font-bold text-[#101066] mb-4'>
						Meet Our Community
					</h1>
					<p className='text-lg text-[#101066] '>
						Get to know the incredible LGBTQ+ young people and supportive adults
						who are a part of our community!
					</p>
				</div>
			</div>

			{/* Main Content Section */}
			<div className='px-4 py-12 md:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
						{/* Left Content */}
						<div className=''>
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#101066] mb-6 leading-tight '>
								LGBTQ+ Young People Need to Hear Your Support
							</h2>
							<p className='text-lg text-[#101066] mb-8'>
								Share words of affirmation for LGBTQ+ young people
							</p>

							{/* Form */}
							<form
								onSubmit={handleSubmit}
								className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-[#101066] mb-2'>
											Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border-0 rounded-md bg-white shadow-sm '
										/>
									</div>
									<div>
										<label
											htmlFor='pronouns'
											className='block text-sm font-medium text-[#101066] mb-2'>
											Pronouns
										</label>
										<input
											type='text'
											id='pronouns'
											name='pronouns'
											value={formData.pronouns}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border-0 rounded-md bg-white shadow-sm '
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-[#101066] mb-2'>
										Message*
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleInputChange}
										rows={4}
										className='w-full px-4 py-3 border-0 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none'
									/>
								</div>

								<div className='flex items-start space-x-3'>
									<input
										type='checkbox'
										id='shareExperience'
										name='shareExperience'
										checked={formData.shareExperience}
										onChange={handleInputChange}
										className='mt-1 h-4 w-4 text-[#101066]  border-gray-300 rounded'
									/>
									<label
										htmlFor='shareExperience'
										className='text-sm text-[#101066]'>
										The Trevor Project may share my experience in future
										communications.*
									</label>
								</div>

								<button
									type='submit'
									className='bg-[#101066] text-white px-8 py-3 rounded-md font-medium hover:bg-[#101066] transition-colors focus:outline-none'>
									Submit
								</button>
							</form>
						</div>

						{/* Right Images */}
						<div className=' flex justify-center'>
							<div className='relative'>
								{/* Image arrangement */}
								<div className='w-80 h-80 md:w-96 md:h-[34rem]'>
									{/* Top image */}
									<div className=''>
										<img
											src={image1}
											alt='Smiling young person'
											className='w-full h-full object-cover'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
