import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import s from './index.module.css';
export default function Socials({ placement }) {
  return (
    <div className={s.icons_block}>
      <base target='_blank' />
      <a href='/'>
        <FaFacebookF
          className={placement === 'header' ? s.header_icons : s.footer_icons}
        />
      </a>
      <a href='https://www.youtube.com/watch?v=MeCWAFMu_XE'>
        <CiYoutube
          className={placement === 'header' ? s.header_icons : s.footer_icons}
        />
      </a>
      <a href='https://www.instagram.com/rf_investpro_eu/?igshid=YmMyMTA2M2Y%3D'>
        <AiOutlineInstagram
          className={placement === 'header' ? s.header_icons : s.footer_icons}
        />
      </a>
    </div>
  );
}
