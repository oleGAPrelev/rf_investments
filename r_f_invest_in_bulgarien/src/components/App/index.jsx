import { useState } from 'react';
import AbountUs from '../AbountUs';
import Angebote from '../Angebote';
import Consultation from '../Consultation';
import CryptoBlock from '../CryptoBlock';
import CustomerReviews from '../CustomerReviews';
import Footer from '../Footer';
import Header from '../Header';
import Modal from '../Modal';
import Nav from '../Nav';
import Services from '../Services';
import Touren from '../Touren';
import YouTubeLink from '../YouTubeLink';

function App() {
	const [modal, setModal] = useState(false);

	return (
		<div>
			<Header />
			<Nav />
			<Services />
			<YouTubeLink />
			<Touren setModal={setModal} />
			<Modal modal={modal} setModal={setModal} />
			<Angebote />
			<CryptoBlock />
			<CustomerReviews />
			<Consultation />
			<AbountUs />
			<Footer />
		</div>
	);
}

export default App;
