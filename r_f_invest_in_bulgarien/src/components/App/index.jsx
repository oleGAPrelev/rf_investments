import Angebote from '../Angebote';
import BeratungContainer from '../BeratungContainer';
import CustomerReviews from '../CustomerReviews';
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
			<BeratungContainer />
		</div>
	);
}

export default App;
