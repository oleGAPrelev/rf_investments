import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';

function App() {
	return (
		<>
			<Routes>
				<Route>
					<Route path="/" element={<Layout />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
