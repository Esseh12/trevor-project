import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function VolunteerFAQ() {
	const [openItems, setOpenItems] = useState({});

	const toggleItem = (index) => {
		setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	const faqs = [
		{
			question: 'What is the time commitment for volunteers?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'What are the technical requirements for volunteers?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'What is the training like?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				'Do I have to be available during specific days and times for training?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'When do volunteer shifts take place?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				'What if I want to go on vacation or something comes up and I have to miss my shift?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'Can I volunteer from anywhere?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				'Do you accept clinical field placement / practicum students as volunteers?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				'Do you verify volunteer hours for school or court-mandated service?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'Do you have any other volunteer opportunities?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question: 'How can my company get involved with The Trevor Project?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				'I am not able to volunteer my time. How else can I get involved?',
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
		{
			question:
				"I already submitted my application, but haven't heard anything. What should I do?",
			answer:
				'After completing a 40-hour training over the course of 8 weeks, volunteers must commit to a weekly 3-hour shift for a minimum of one year.',
		},
	];

	return (
		<div className='max-w-4xl mx-auto py-6 md:py-12 lg:py-24 px-4 md:px-6 lg:px-8 bg-white'>
			<h1 className='text-xl md:text-2xl lg:text-3xl font-semibold leading-6 md:leading-7 text-[#003A48] mb-6 md:mb-8 text-left'>
				Volunteer FAQs
			</h1>

			<div className='space-y-2 md:space-y-4'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						className='border-b border-gray-200'>
						<button
							onClick={() => toggleItem(index)}
							className='w-full flex justify-between items-start md:items-center py-4 md:py-6 lg:py-8 text-left transition-colors duration-200'>
							<h3 className='text-base md:text-lg lg:text-2xl font-medium md:font-semibold leading-6 md:leading-7 lg:leading-9 text-[#003A48] pr-4'>
								{faq.question}
							</h3>
							<div className='flex-shrink-0 mt-1 md:mt-0'>
								{openItems[index] ? (
									<FiMinus className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#003A48]' />
								) : (
									<FiPlus className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#003A48]' />
								)}
							</div>
						</button>

						{openItems[index] && faq.answer && (
							<div className='pb-4 md:pb-6'>
								<div className='bg-gray-100 p-3 md:p-4 text-sm md:text-base lg:text-xl leading-5 md:leading-6 lg:leading-7 text-gray-700'>
									{faq.answer}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
