import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Blogs from './Pages/Blog';
import Research from './Pages/Reasearch';
import Career from './Pages/career';

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
			</Routes>
		</div>
	);
}

export default App;
