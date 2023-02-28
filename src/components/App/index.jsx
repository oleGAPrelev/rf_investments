import { useState } from 'react';
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
    <>
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
      <Footer setModal={setModal} />
    </>
  );
}

export default App;
