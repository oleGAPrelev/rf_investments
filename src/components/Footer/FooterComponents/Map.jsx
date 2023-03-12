import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import s from '../index.module.css';
import { offices } from '../../../data/offices';

const {
  REACT_APP_MAPBOX_ACCESS_TOKEN,
  REACT_APP_MAPBOX_USERNAME,
  REACT_APP_MAPBOX_STYLE_ID,
} = process.env;

export default function Map() {
  const mapCenterPosition = [49.486, 10.096];
  const mapIcon = L.icon({
    iconUrl: '/media/map-logo.svg',
    iconSize: [35, 35],
    iconAnchor: [17, 17],
    popupAnchor: [0, -17],
  });

  return (
    <MapContainer
      center={mapCenterPosition}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: '100%', minHeight: '400px', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${REACT_APP_MAPBOX_USERNAME}/${REACT_APP_MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${REACT_APP_MAPBOX_ACCESS_TOKEN}`}
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/about/">OpenStreetMap</a> <b><a href="https://www.mapbox.com/map-feedback/">Improve this map</a></b>'
        accessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
      {offices.map((office) => (
        <Marker
          key={office.id}
          position={office.location}
          icon={mapIcon}
          eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
          }}
        >
          <Popup>
            <img
              src={office.image}
              className={s.popup_img}
              alt={office.title}
            />
            <b>{office.title}</b>
            <br />
            <a href={`tel:${office.contact}`}>{office.contact}</a>
          </Popup>
        </Marker>
      ))}
      <a
        href={'https://www.mapbox.com/about/maps/'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        <div className={s.mapbox_logo} type={'submit'}></div>
      </a>
    </MapContainer>
  );
}
