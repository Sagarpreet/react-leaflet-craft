import React from 'react';
import LeafletFreedraw, {clickUndo, clickRedo, toggleControlBar, toggleUndoRedoBar} from 'leaflet-craft';
import { MapLayer, withLeaflet } from 'react-leaflet';

class Freedraw extends MapLayer {
  createLeafletElement(props) {
    return new LeafletFreedraw({ ...props });
  }

  updateLeafletElement(fromProps, toProps) {

    if(fromProps.showUndoRedoBar !== toProps.showUndoRedoBar) {
      this.leafletElement.toggleUndoRedoBar(toProps.showUndoRedoBar);
    } 

    if(fromProps.showControlBar !== toProps.showControlBar) {
      this.leafletElement.toggleControlBar(toProps.showControlBar);
    }

    if(fromProps.mode != toProps.mode) {
      this.leafletElement.mode(toProps.mode);
    }
    
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addLayer(this.leafletElement);
  }

  // attachEvents() {
  //   this.leafletElement.on('markers', this.props.onMarkers);
  //   this.leafletElement.on('mode', this.props.onModeChange);
  // }

  render() {
    return null;
  }
}

export default withLeaflet(Freedraw);

export * from 'leaflet-craft';
