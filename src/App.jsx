import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Blogs from './Pages/Blog';
import Research from './Pages/Reasearch';
import Partners from './Pages/partners';
import NewsPress from './Pages/newsPress';
import Volunteer from './Pages/volunteer';
import BreathingExcercise from './Pages/breathingExcercises';
import Fundraise from './Pages/fundraise';
import CrisisServices from './Pages/crisisServices';

function App() {
	return (
		<div className='App'>
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
			</Routes>
		</div>
	);
}

export default App;
