import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Blogs from './Pages/Blog';

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
			</Routes>
		</div>
	);
}

export default App;
