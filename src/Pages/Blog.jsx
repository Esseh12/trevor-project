import Footer from '../Components/footer';
import BlogComponent from '../Components/BlogComponent';
import SupportAdult from '../assets/TTP_SupportiveAdult_Tom-Skyler1.JPG-720x479.jpg';

const Blogs = () => {
	return (
		<>
			<section className='bg-[#0c4653] pt-32  md:py-16 md:px-6 md:min-h-screen flex items-center justify-center'>
				<div className='w-full md:max-w-7xl md:mx-auto'>
					<div className='flex flex-col lg:flex-row items-center gap-12'>
						{/* Left side - Text content */}
						<div className='flex-1 text-white text-center md:text-left'>
							<p className='tracking-wide uppercase mb-2 md:mb-4'>BLOG</p>
							<h1 className='text-4xl lg:text-[52px] leading-16 font-bold mb-4 md:mb-6'>
								Featured Stories
							</h1>
							<p className='text-lg lg:text-[22px] leading-8 max-w-lg'>
								We're always exploring new topics, asking questions, and looking
								for new ways to learn.
							</p>
						</div>

						{/* Right side - Image */}
						<div className='flex-1'>
							<img
								src={SupportAdult}
								alt='Supportive adult with young person'
								className='w-full h-auto md:rounded-lg object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section>
				<BlogComponent />
			</section>
			<Footer />
		</>
	);
};

export default Blogs;
