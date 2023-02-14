import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileTabletView from './MobileTabletView';
import DesktopView from './DesktopView';
import s from './index.module.css';

export default function Footer({ setModal }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <footer className={s.footer}>
      {isDesktop ? (
        <DesktopView setModal={setModal} />
      ) : (
        <MobileTabletView setModal={setModal} />
      )}
    </footer>
  );
}
