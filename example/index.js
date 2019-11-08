import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import Freedraw from '../Freedraw';

class Example extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', event => {
      // Cancel the current FreeDraw action when the escape key is pressed.
      if (event.key === 'Escape') {
        this.freedrawRef.current.leafletElement.cancel();
      }
    });
  }

  // Listen for when the mode changes
  handleModeChange = event => {
    console.log('mode changed', event);
  };

  freedrawRef = React.createRef();

  render() {
 

    return (
      <div>
        <Map
          className="map"
          center={[20.5937, 78.9629]}
          zoom={5}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          <Freedraw
            ref={this.freedrawRef}
          />
        </Map>
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));
