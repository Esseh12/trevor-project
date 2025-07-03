import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from 'react-icons/hi2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
export const CustomPrevArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-4 w-16 h-12 bg-[#003a48] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#003a48]/60 transition-colors z-10'>
		<HiMiniArrowLongLeft size={30} />
	</button>
);

export const CustomNextArrow = ({ onClick }) => (
	<button
		onClick={onClick}
		className='absolute -right-4 top-1/2 -translate-y-1/2 translate-x-4 w-16 h-12 bg-[#003a48] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#003a48]/60 transition-colors z-10'>
		<HiMiniArrowLongRight size={30} />
	</button>
);
