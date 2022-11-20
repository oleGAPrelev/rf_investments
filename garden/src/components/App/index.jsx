import BargainSale from '../BargainSale';
import Catigories from '../Categories';
import Discount from '../Discount';
import Footer from '../Footer';
import Nav from '../Nav';
import Sale from '../Sale';

function App() {
	return (
		<div>
			<Nav />
			<Sale />
			<Catigories />
			<Discount />
			<BargainSale />
			<Footer />
		</div>
	);
}

export default App;
