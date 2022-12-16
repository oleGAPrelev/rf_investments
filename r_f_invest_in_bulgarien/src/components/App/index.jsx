import Angebote from '../Angebote';
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
		</div>
	);
}

export default App;
