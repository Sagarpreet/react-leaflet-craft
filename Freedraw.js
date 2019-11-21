'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _leafletCraft = require('leaflet-craft');

var _leafletCraft2 = _interopRequireDefault(_leafletCraft);

var _reactLeaflet = require('react-leaflet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FreeCraft = function (_MapLayer) {
  _inherits(FreeCraft, _MapLayer);

  function FreeCraft() {
    _classCallCheck(this, FreeCraft);

    return _possibleConstructorReturn(this, (FreeCraft.__proto__ || Object.getPrototypeOf(FreeCraft)).apply(this, arguments));
  }

  _createClass(FreeCraft, [{
    key: 'createLeafletElement',
    value: function createLeafletElement(props) {
      return new _leafletCraft2.default(_extends({}, props));
    }
  }, {
    key: 'updateLeafletElement',
    value: function updateLeafletElement(fromProps, toProps) {
      if (fromProps.showUndoRedoBar !== toProps.showUndoRedoBar) {
        this.leafletElement.toggleUndoRedoBar(toProps.showUndoRedoBar);
        if (!toProps.showUndoRedoBar) {
          this.leafletElement.mode(0);
        }
      }

      if (fromProps.showControlBar !== toProps.showControlBar) {
        this.leafletElement.toggleControlBar(toProps.showControlBar);
        if (!toProps.showControlBar) {
          this.leafletElement.mode(0);
        }
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
      this.attachEvents(map);
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents(map) {
      this.leafletElement.on('markers', function (e) {
        if (e.eventType === 'create') {
          (0, _leafletCraft.clickUndo)(map);
          (0, _leafletCraft.clickRedo)(map);
        }
      });
      // this.leafletElement.on('mode', this.props.onModeChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // this.leafletElement.mode(0);
      var map = this.props.leaflet.map;

      map.removeLayer(this.leafletElement);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return FreeCraft;
}(_reactLeaflet.MapLayer);

exports.default = (0, _reactLeaflet.withLeaflet)(FreeCraft);

