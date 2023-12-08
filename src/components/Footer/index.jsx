import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileTabletView from './MobileTabletView';
import DesktopView from './DesktopView';
import s from './index.module.css';

export default function Footer({ setModal, setModalContent }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <footer className={s.footer}>
      {isDesktop ? (
        <DesktopView setModal={setModal} setModalContent={setModalContent} />
      ) : (
        <MobileTabletView
          setModal={setModal}
          setModalContent={setModalContent}
        />
      )}
    </footer>
  );
}
