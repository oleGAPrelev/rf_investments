import { Route, Routes } from 'react-router-dom';
import { Context } from '../../context';
import CategoriesPages from '../../pages/CategoriesPages';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import Footer from '../Footer';
import Nav from '../Nav';

function App() {
	return (
		<>
			<Context.Provider value={{}}>
				<Nav />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/categories" element={<CategoriesPages />} />
					<Route />
					<Route />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</Context.Provider>
		</>
	);
}

export default App;
