import React, {useContext} from 'react';
import { Map, TileLayer, Popup } from 'react-leaflet';
import mapaContext from "../../contex/mapa/mapaContex";



const styles = {
  wrapper: { 
    height: 400, 
    width: '100%', 
    margin: '0 auto', 
    display: 'flex' ,
    borderRadius: 10
  },
  map: {
    flex: 1
  } 
};


const Moves = props => {

  const contextMapa = useContext(mapaContext);
  const {coordenadas, coordenadasDefault} = contextMapa;

  return (
    <div style={styles.wrapper}>
      <Map 
      style={styles.map}
      center={[coordenadasDefault.lat, coordenadasDefault.long]}
    zoom={props.zoom}
    >
    <Popup
    position={[coordenadas.lat,coordenadas.long]}
    >
        <div>
            <h2>{coordenadas.lugar}</h2>
            <p>{coordenadas.hora}</p>
        </div>
    </Popup>
    
    
        <TileLayer url={props.url} />
      </Map>
    </div>
  );
}

Moves.defaultProps = {
  center: [],
  zoom: 10,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

export default Moves;