import { useState } from 'react';
// import AboutUs from '../Contacts';
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

  document.body.style.overflow = modal ? 'hidden' : 'auto';

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
      {/* <AboutUs /> */}
      <Footer setModal={setModal} />
    </div>
  );
}

export default App;
