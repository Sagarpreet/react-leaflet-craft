[![npm version](https://badge.fury.io/js/react-leaflet-craft.svg)](https://badge.fury.io/js/react-leaflet-craft)
# react-leaflet-craft

React component built on top of [react-leaflet](https://github.com/PaulLeCam/react-leaflet) that integrates [Leaflet-Craft](https://github.com/sagarpreet-chadha/Leaflet-Craft) library.

## Install

`npm install react-leaflet-craft`

Make sure that you have the following peer dependencies installed.

`npm install leaflet react-leaflet leaflet-craft ramda react react-dom`

## Getting started

Please make sure that you go through [Leaflet-Craft](https://github.com/sagarpreet-chadha/Leaflet-Craft) readme before integrating this component.

You need to wrap this component into Map component and pass the options as shown below.

```javascript
import { Map } from 'react-leaflet';
import Freedraw, { ALL } from 'react-leaflet-craft';

const Component = () => (
  <Map>
    <Freedraw
      mode={ALL}
      onMarkers={this.handleOnMarkers}
      onModeChange={this.handleModeChange}
      ref={this.freedrawRef}
    />
  </Map>
);
```

It supports all the options mentioned in [Leaflet-Craft](https://github.com/sagarpreet-chadha/Leaflet-Craft).

A detailed example of how to use this component is in the [example folder of this repo](https://github.com/elangobharathi/react-leaflet-craft/tree/master/example). To run the example,

1. Clone this repo
2. Run `npm i`
3. Run `npm run example`
