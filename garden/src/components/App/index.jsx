import { Route, Routes } from 'react-router-dom';
import CategoriesPages from '../../pages/CategoriesPages';
import HomePage from '../../pages/HomePage';
import Footer from '../Footer';
import Nav from '../Nav';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/categories" element={<CategoriesPages />} />
				<Route />
				<Route />
				<Route />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
