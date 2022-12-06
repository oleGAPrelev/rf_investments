import { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { Context } from '../../context';
import CategoriesPages from '../../pages/CategoriesPages';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import Footer from '../Footer';
import Nav from '../Nav';
import { getCatigories } from '../../requests/catigories';
import { getProducts } from '../../requests/products';
import ProductsPage from '../../pages/ProductsPage';

function App() {
	const [products, setProducts] = useState([]);
	const [catigories, setCatigories] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getCatigories(setCatigories);
	}, []);

	useEffect(() => {
		getProducts(setProducts);
	}, [id]);

	return (
		<>
			<Context.Provider value={{ catigories, products }}>
				<Nav />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/categories" element={<CategoriesPages />} />
					<Route path="/categories/:id" element={<ProductsPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</Context.Provider>
		</>
	);
}

export default App;
