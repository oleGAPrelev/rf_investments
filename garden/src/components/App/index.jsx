import Catigories from '../Categories';
import Discount from '../Categories/Discount';
import Nav from '../Nav';
import Sale from '../Sale';

function App() {
	return (
		<div>
			<Nav />
			<Sale />
			<Catigories />
			<Discount />
		</div>
	);
}

export default App;
