import { Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Components/navbar';
import HomePage from './Pages/home';
import Blogs from './Pages/Blog';
import Research from './Pages/Reasearch';
import Partners from './Pages/partners';
import NewsPress from './Pages/newsPress';
import Volunteer from './Pages/volunteer';
import BreathingExcercise from './Pages/breathingExcercises';
import Fundraise from './Pages/fundraise';
import CrisisServices from './Pages/crisisServices';
import PublicEducation from './Pages/publicEducation';
import PeerSupport from './Pages/peerSuppoert';
import ContactUs from './Pages/contactUs';
import FinancialReport from './Pages/financialReport';
import CommemorativeGiving from './Pages/commemorativeGiving';
import ReachCounselor from './Pages/reachCounsellor';
import MentalHealthSurvey from './Pages/mentalHealthSurvey';
import DonorCommunity from './Pages/donorCommunity';
import MainReasearch from './Pages/mainResearch';
import Resources from './Pages/resources';
import Donate from './Pages/donate';
import Advocacy from './Pages/advocacy';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/blog'
					element={<Blogs />}
				/>
				<Route
					path='/research-briefs'
					element={<Research />}
				/>
				<Route
					path='/partner-with-us'
					element={<Partners />}
				/>
				<Route
					path='/press'
					element={<NewsPress />}
				/>
				<Route
					path='/volunteer'
					element={<Volunteer />}
				/>
				<Route
					path='/breathing-exercise'
					element={<BreathingExcercise />}
				/>
				<Route
					path='/fundraise'
					element={<Fundraise />}
				/>
				<Route
					path='/crisis-services'
					element={<CrisisServices />}
				/>
				<Route
					path='/public-education'
					element={<PublicEducation />}
				/>
				<Route
					path='/visit-trevorspace'
					element={<PeerSupport />}
				/>
				<Route
					path='/contact-us'
					element={<ContactUs />}
				/>
				<Route
					path='/financial-reports'
					element={<FinancialReport />}
				/>
				<Route
					path='/commemorative-giving'
					element={<CommemorativeGiving />}
				/>
				<Route
					path='/get-help'
					element={<ReachCounselor />}
				/>
				<Route
					path='/survey-international'
					element={<MentalHealthSurvey />}
				/>
				<Route
					path='/circle-of-light'
					element={<DonorCommunity />}
				/>
				<Route
					path='/research'
					element={<MainReasearch />}
				/>
				<Route
					path='/resources'
					element={<Resources />}
				/>
				<Route
					path='/be-the-one'
					element={<Donate />}
				/>
				<Route
					path='/advocacy'
					element={<Advocacy />}
				/>
				<Route
					path='*'
					element={<HomePage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
