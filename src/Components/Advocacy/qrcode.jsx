import qrcode from '../../assets/Advocacy-SMS-QR-Code.png';
import sms from '../../assets/Advocacy-SMS-Social-Media-Post.jpg';

const QrCode = () => {
	return (
		<div className='min-h-screen bg-[#005e67]'>
			{/* Main Content */}
			<div className='flex flex-col items-center justify-center px-4 py-16 text-center text-white'>
				{/* Main Heading */}
				<h1 className='text-2xl sm:text-4xl font-semibold mb-8 max-w-4xl'>
					Become an Advocate with The Trevor Project
				</h1>

				{/* Description */}
				<p className='text-lg  mb-12 max-w-6xl leading-7'>
					LGBTQ+ young people are facing unprecedented attacks across the United
					States, leading to harmful impacts on mental health. Help fight back
					by becoming a Trevor Advocate.
				</p>

				{/* QR Code Section */}
				<div className='bg-white p-6 rounded-2xl'>
					{/* Replace this div with your actual QR code image */}
					<div className='w-48 h-48   mb-4'>
						<img
							src={qrcode}
							alt='QR Code for Trevor Project updates'
							className='w-full h-full object-contain'
							onError={(e) => {
								e.target.style.display = 'none';
								e.target.nextSibling.style.display = 'block';
							}}
						/>
					</div>
				</div>

				<p className=' mb-12 font-semibold mt-5 leading-7.5'>
					Get Instant Updates – Scan the QR Code and Text to Subscribe!
				</p>

				{/* Call to Action Card */}
				<div className=' p-8 max-w-2xl w-full text-center relative overflow-hidden '>
					<img
						src={sms}
						alt=''
						className='rounded-2xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default QrCode;
