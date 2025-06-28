import leaf from '../../assets/TTP_Icons_White_Program-Crisis-Services.svg';
import softSkills from '../../assets/TTP_Icons_White_Program-Education-Public-Awareness.svg';
import computer from '../../assets/TTP_Icons_White_Learn.svg';

const reasons = [
	{ icon: leaf, text: 'Supportive Community Network' },
	{ icon: softSkills, text: 'Gain Important Soft Skills' },
	{ icon: computer, text: 'World-Class Crisis Intervention Training' },
];

const ReasonToVolunteer = () => {
	return (
		<div className='bg-[#005e67] text-white py-16 px-4'>
			<div className='max-w-5xl mx-auto space-y-12'>
				{/* Heading */}
				<div className='text-center max-w-3xl mx-auto'>
					<h1 className='font-semibold text-[32px] md:text-[46px] leading-tight mb-4'>
						Reasons to volunteer
					</h1>
					<p className='text-lg md:text-2xl leading-relaxed'>
						We don’t have to tell you that becoming a crisis counselor is a
						rewarding experience. But we will anyway.
					</p>
				</div>

				{/* Reasons */}
				<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
					{reasons.map(({ icon, text }, index) => (
						<div
							key={index}
							className='text-center max-w-xs'>
							<img
								src={icon}
								alt=''
								className='w-20 h-20 mx-auto mb-4'
							/>
							<p className='text-base md:text-lg font-medium'>{text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReasonToVolunteer;
