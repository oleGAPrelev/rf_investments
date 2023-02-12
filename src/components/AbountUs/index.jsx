import React from 'react';
import s from './index.module.css';
import logo from './media/nav_logo.png';
import {FaPhoneAlt, FaFacebookF} from 'react-icons/fa';
import {CiYoutube} from 'react-icons/ci';
import {AiOutlineInstagram} from 'react-icons/ai';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import L from 'leaflet';

const {REACT_APP_MAPBOX_USERNAME, REACT_APP_MAPBOX_STYLE_ID, REACT_APP_MAPBOX_ACCESS_TOKEN} = process.env;

export default function AbountUs() {
  const mapCenterPosition = [49.486, 10.096];
  const positionM = [48.149, 11.573];
  const testPosition = [48.456, 9.125];
  
  
  const originalIcon = L.icon({
    iconUrl: '/media/rf_logo.svg',
    iconSize: [35, 39], // size of the icon
    iconAnchor: [17, 19], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
  });
  
  const mapIcon = L.icon({
    iconUrl: '/media/maps_logo.svg',
    iconSize: [27, 30], // size of the icon
    iconAnchor: [13, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
  });
  
  return (
    <section className={s.about_us_section}>
      <div className="wrapper">
        <div className={s.about_us_logo}>
          <img src={logo} alt="logo"/>
        </div>
        
        <div className={s.about_us_container}>
          <div>
            
            <MapContainer
              center={mapCenterPosition}
              zoom={6}
              scrollWheelZoom={true}
              style={{minHeight: '400px', minWidth: '900px'}}
            >
              <TileLayer
                url='https://api.mapbox.com/styles/v1/rfinvest/cldxmgsjj004q01padn7qd7q3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmZpbnZlc3QiLCJhIjoiY2xkeG1hcDNiMGZ6cjNxb2FmbmR2OHc2ciJ9.EGri_5kPtzXOzl4O4_6zLw'
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/about/">OpenStreetMap</a> <b><a href="https://www.mapbox.com/map-feedback/">Improve this map</a></b>'
              />
              <Marker position={positionM} icon={originalIcon}>
                <Popup>
                  <img className={s.popup_img} src="/media/office.jpg" alt="Our office in Dresden"/>
                  Unser schönes Büro in München <br/>
                  Rindermarkt 7, 80331 München
                </Popup>
              </Marker>
  
              <Marker position={testPosition} icon={mapIcon}>
                <Popup>
                  <img className={s.popup_img} src="/media/office.jpg" alt="Our office in Dresden"/>
                  Unser schönes Büro in München <br/>
                  Rindermarkt 7, 80331 München
                </Popup>
              </Marker>
              
              
              <a href={'https://www.mapbox.com/about/maps/'} target={'_blank'} rel={'noopener noreferrer'}>
                <div className={s.mapbox_logo} type={'submit'}></div>
              </a>
            </MapContainer>
          
          </div>
          
          
          <div className={s.rf}>
            <p> R&F INVESTMENS OOD </p>
            <p> Harmony Suites 12 </p>
            <p> 8240 Nesebar, Bulgarien </p>
          </div>
          
          <div>
            <div className={s.icons_block}>
              <base target="_blank"/>
              <a href="/">
                <FaFacebookF className={s.icons}/>
              </a>
              <a href="https://www.youtube.com/watch?v=MeCWAFMu_XE">
                <CiYoutube className={s.icons}/>
              </a>
              <a href="https://www.instagram.com/rf_investpro_eu/?igshid=YmMyMTA2M2Y%3D">
                <AiOutlineInstagram className={s.icons}/>
              </a>
            </div>
            
            <div>
              <div className={s.contacts}>
                <FaPhoneAlt className={s.phone}/>
                <p>Anton Fuchs +49 176 10175414</p>
              </div>
              
              <div className={s.contacts}>
                <FaPhoneAlt className={s.phone}/>
                <p>Artur Runge +49 176 24672123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    ;
}
