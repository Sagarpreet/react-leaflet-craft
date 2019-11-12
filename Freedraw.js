'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _leafletCraft = require('leaflet-craft');

Object.keys(_leafletCraft).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _leafletCraft[key];
    }
  });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _leafletCraft2 = _interopRequireDefault(_leafletCraft);

var _reactLeaflet = require('react-leaflet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Freedraw = function (_MapLayer) {
  _inherits(Freedraw, _MapLayer);

  function Freedraw() {
    _classCallCheck(this, Freedraw);

    return _possibleConstructorReturn(this, (Freedraw.__proto__ || Object.getPrototypeOf(Freedraw)).apply(this, arguments));
  }

  _createClass(Freedraw, [{
    key: 'createLeafletElement',
    value: function createLeafletElement(props) {
      return new _leafletCraft2.default(_extends({}, props));
    }
  }, {
    key: 'updateLeafletElement',
    value: function updateLeafletElement(fromProps, toProps) {

      if (fromProps.showUndoRedoBar !== toProps.showUndoRedoBar) {
        this.leafletElement.toggleUndoRedoBar(toProps.showUndoRedoBar);
      }

      if (fromProps.showControlBar !== toProps.showControlBar) {
        this.leafletElement.toggleControlBar(toProps.showControlBar);
      }

      if (fromProps.mode != toProps.mode) {
        this.leafletElement.mode(toProps.mode);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var map = this.props.leaflet.map;

      map.addLayer(this.leafletElement);
    }

    // attachEvents() {
    //   this.leafletElement.on('markers', this.props.onMarkers);
    //   this.leafletElement.on('mode', this.props.onModeChange);
    // }

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Freedraw;
}(_reactLeaflet.MapLayer);

exports.default = (0, _reactLeaflet.withLeaflet)(Freedraw);

