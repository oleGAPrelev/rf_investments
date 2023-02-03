import { useState } from 'react';
import AbountUs from '../AbountUs';
import Consultation from '../Consultation';
import CryptoBlock from '../CryptoBlock';
import CustomerReviews from '../CustomerReviews';
import Footer from '../Footer';
import Header from '../Header';
import Modal from '../Modal';
import Nav from '../Nav';
import Range from '../Range';
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
			<Range />
			<CryptoBlock />
			<CustomerReviews />
			<Consultation />
			<AbountUs />
			<Footer />
		</div>
	);
}

export default App;
