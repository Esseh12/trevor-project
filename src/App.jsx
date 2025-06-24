import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
