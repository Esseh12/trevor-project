import { Link } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';

const AdvocacyResources = () => {
	const resources = [
		{
			id: 1,
			title:
				'A Guide to Testifying Against Harmful Bills for Parents and Supportive Adults',
			link: '#',
		},
		{
			id: 2,
			title: 'Advocates for Youth Program Application',
			link: '#',
		},
		{
			id: 3,
			title:
				'Navigating Personal Safety while Taking Action as an LGBTQ+ Young Person',
			link: '#',
		},
	];

	return (
		<div className='bg-[#003a48] flex items-center justify-center p-4 min-h-[70vh]'>
			<div className='bg-white rounded-lg shadow-2xl p-8 max-w-md w-full'>
				<h2 className='text-2xl font-bold text-[#003a48] mb-6 text-center'>
					LGBTQ+ Advocacy Resources
				</h2>

				<div className='space-y-4'>
					{resources.map((resource) => (
						<div
							key={resource.id}
							className='flex items-start space-x-3 group'>
							<div className='flex-shrink-0 mt-1'>
								<GiCheckMark className='w-5 h-5 text-[#225763]' />
							</div>
							<div className=' max-w-sm'>
								<Link
									to={resource.link}
									className='text-[#103942] hover:text-[#003a48] transition-colors duration-200 underline decoration-2 underline-offset-2 decoration-[#003a48] hover:decoration-[#003a48]'>
									{resource.title}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdvocacyResources;
