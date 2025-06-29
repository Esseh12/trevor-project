import { Routes, Route } from 'react-router-dom';
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
			</Routes>
		</div>
	);
}

export default App;
