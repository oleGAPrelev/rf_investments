import { useState } from 'react';
import AbountUs from '../AbountUs';
import Angebote from '../Angebote';
import Consultant from '../Consultant';
import CustomerReviews from '../CustomerReviews';
import Footer from '../Footer';
import Header from '../Header';
import KryptoBlock from '../KryptoBlock';
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
			<KryptoBlock />
			<CustomerReviews />
			<Consultant />
			<AbountUs />
			<Footer />
		</div>
	);
}

export default App;
