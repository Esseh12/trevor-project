import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Blogs from './Pages/Blog';
import Research from './Pages/Reasearch';
import Career from './Pages/career';
import Partners from './Pages/partners';
import Volunteer from './Pages/volunteer';

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
					path='/careers'
					element={<Career />}
				/>
				<Route
					path='/partner-with-us'
					element={<Partners />}
				/>
				<Route
					path='/volunteer'
					element={<Volunteer />}
				/>
			</Routes>
		</div>
	);
}

export default App;
