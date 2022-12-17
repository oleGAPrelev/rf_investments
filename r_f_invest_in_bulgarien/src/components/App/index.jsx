import AbountUs from '../AbountUs';
import Angebote from '../Angebote';
import Consultant from '../Consultant';
import CustomerReviews from '../CustomerReviews';
import Footer from '../Footer';
import Header from '../Header';
import KryptoBlock from '../KryptoBlock';
import Nav from '../Nav';
import Services from '../Services';
import Touren from '../Touren';
import YouTubeLink from '../YouTubeLink';

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<Services />
			<YouTubeLink />
			<Touren />
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
