/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    ServerSideRender = _wp$components.ServerSideRender;


registerBlockType("spa/spa-render", {
  title: __("SPA Reviews"),
  icon: "lock",
  category: "common",
  attributes: {
    headerbg: {
      type: "string",
      default: "#002539"
    },
    headerrating: {
      type: "boolean",
      default: "1"
    },
    headertitle: {
      type: "string",
      default: "{overallrating} Overall Satisfaction Rating"
    },
    headersubtitle: {
      type: "string",
      default: "Based on {numberofcustomer} Customer Ratings Ratings from Actual Customers"
    },
    bodybg: {
      type: "string",
      default: "#072538"
    },
    spa_block_css: {
      type: "string",
      default: ""
    }
  },
  edit: function edit(props) {
    var clientId = props.clientId,
        _props$attributes = props.attributes,
        headerbg = _props$attributes.headerbg,
        headerrating = _props$attributes.headerrating,
        headertitle = _props$attributes.headertitle,
        headersubtitle = _props$attributes.headersubtitle,
        bodybg = _props$attributes.bodybg,
        spa_block_css = _props$attributes.spa_block_css,
        setAttributes = props.setAttributes,
        className = props.className;

    spa_ajax_main_response(0, "newest");

    var HeaderbgStyle = headerbg ? "background-color :" + headerbg + ";" : "";
    var BodybgStyle = bodybg ? "background-color :" + bodybg + ";" : "";

    var spa_css = ".spa_header_container.remove_padding{" + HeaderbgStyle + "}" + ".spa_content_container{" + BodybgStyle + "}";

    setAttributes({ spa_block_css: spa_css });

    return [wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        { key: clientId },
        wp.element.createElement(
          PanelBody,
          { title: __("Header Settings"), initialOpen: true },
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(ColorPalette, {
              onChange: function onChange(value) {
                return setAttributes({ headerbg: value });
              },
              disableAlpha: true
            })
          ),
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(ToggleControl, {
              label: "Header rating enable",
              checked: headerrating,
              onChange: function onChange() {
                return setAttributes({ headerrating: !headerrating });
              },
              className: "toggle-setting-class"
            })
          ),
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(TextareaControl, {
              label: "Header title",
              help: "Add content Like  (ie. {overallrating} Overall Satisfaction Rating )",
              value: headertitle,
              onChange: function onChange(value) {
                return setAttributes({ headertitle: value });
              }
            })
          ),
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(TextareaControl, {
              label: "Header sub title",
              help: "Add content Like (ie. Based on {numberofcustomer} Customer Ratings Ratings from Actual Customers )",
              value: headersubtitle,
              onChange: function onChange(value) {
                return setAttributes({ headersubtitle: value });
              }
            })
          )
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Body Settings"), initialOpen: false },
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(ColorPalette, {
              onChange: function onChange(value) {
                return setAttributes({ bodybg: value });
              },
              disableAlpha: true
            })
          )
        )
      ),
      wp.element.createElement(ServerSideRender, {
        attributes: {
          spa_block_css: spa_block_css,
          headerrating: headerrating,
          headertitle: headertitle,
          headersubtitle: headersubtitle
        },
        className: className,
        block: "spa/spa-render"
      })
    )];
  },
  save: function save(props) {
    // Rendering in PHP
    return null;
  }
});

/***/ })
/******/ ]);