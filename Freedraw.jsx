import React from 'react';
import LeafletFreedraw, {clickUndo, clickRedo, toggleControlBar, toggleUndoRedoBar} from 'leaflet-craft';
import { MapLayer, withLeaflet } from 'react-leaflet';

class Freedraw extends MapLayer {
  createLeafletElement(props) {
    return new LeafletFreedraw({ ...props });
  }

  updateLeafletElement(fromProps, toProps) {

    const {map} = toProps.leaflet;

    if(fromProps.showUndoRedoBar !== toProps.showUndoRedoBar) {
      toggleUndoRedoBar(toProps.showUndoRedoBar, map);
    } 

    if(fromProps.showControlBar !== toProps.showControlBar) {
      toggleControlBar(toProps.showControlBar, map);
    }

    // this.leafletElement.mode(toProps.mode);
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
