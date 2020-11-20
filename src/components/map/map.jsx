import React from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import styles from './styles/map.module.css'
import mapIcon from '../../utils/mapIcon'

export default function Map({ data }) {
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[data.address.geo.lat, data.address.geo.lng]}
        zoom={16}
        style={{ width: '100%', height: 280 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={mapIcon}
          position={[data.address.geo.lat, data.address.geo.lng]}
        >
          <Popup closeButton={false}>
            <span>Empresa: {data.company.name}</span>
            <br />
            <span>Slogan: {data.company.catchPhrase}</span>
          </Popup>
        </Marker>
        );
      </MapContainer>
    </div>
  )
}
