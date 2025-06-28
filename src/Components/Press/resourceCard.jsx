const ResourceCard = ({ image, category, title, description, tags, date }) => (
	<div className='bg-white rounded-lg overflow-hidden'>
		<div className='aspect-[4/3] bg-gray-100 relative overflow-hidden'>
			<img
				src={image}
				alt=''
				className='w-full h-full object-cover'
			/>
		</div>
		<div className='p-6 text-[#003A48]'>
			<div className='text-sm font-semibold  leading-4.5 mb-2'>{category}</div>
			<h3 className='text-xl md:text-[26px] font-semibold mb-3 leading-8'>
				{title}
			</h3>
			{date && <div className='text-sm  mb-3'>{date}</div>}
			<p className='text-sm leading-5.5 mb-4'>{description}</p>
			<div className='flex flex-wrap gap-2'>
				{tags.map((tag, index) => (
					<span
						key={index}
						className='px-3 py-1 bg-purple-100  text-xs rounded-full font-medium'>
						{tag}
					</span>
				))}
			</div>
		</div>
	</div>
);

export default ResourceCard;
