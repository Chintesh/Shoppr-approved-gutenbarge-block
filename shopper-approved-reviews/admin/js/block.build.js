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
    InspectorAdvancedControls = _wp$editor.InspectorAdvancedControls,
    ColorPalette = _wp$editor.ColorPalette;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    ServerSideRender = _wp$components.ServerSideRender,
    SelectControl = _wp$components.SelectControl;


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
    headerborderwidth: {
      type: "number",
      default: 1
    },
    headerbordertype: {
      type: "string",
      default: "none"
    },
    headerbordercolor: {
      type: "string",
      default: "#000"
    },
    headerborderradius: {
      type: "number",
      default: 0
    },
    bodybg: {
      type: "string",
      default: "#072538"
    },
    bodyfontcolor: {
      type: "string",
      default: "#839595"
    },
    bodyborderwidth: {
      type: "number",
      default: 1
    },
    bodybordertype: {
      type: "string",
      default: "none"
    },
    bodybordercolor: {
      type: "string",
      default: "#000"
    },
    bodyborderradius: {
      type: "number",
      default: 0
    },
    contentbg: {
      type: "string",
      default: "#fff"
    },
    contentborderwidth: {
      type: "number",
      default: 1
    },
    contentbordertype: {
      type: "string",
      default: "none"
    },
    contentbordercolor: {
      type: "string",
      default: "#000"
    },
    contentborderradius: {
      type: "number",
      default: 0
    },
    username: {
      type: "boolean",
      default: "1"
    },
    date: {
      type: "boolean",
      default: "1"
    },
    rating: {
      type: "boolean",
      default: "1"
    },
    description: {
      type: "boolean",
      default: "1"
    },
    product_satisfaction: {
      type: "boolean",
      default: "1"
    },
    customer_service: {
      type: "boolean",
      default: "1"
    },
    referral: {
      type: "boolean",
      default: "1"
    },
    customCssText: {
      type: "string",
      default: ""
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
        contentbg = _props$attributes.contentbg,
        bodyfontcolor = _props$attributes.bodyfontcolor,
        headerborderwidth = _props$attributes.headerborderwidth,
        headerbordertype = _props$attributes.headerbordertype,
        headerbordercolor = _props$attributes.headerbordercolor,
        headerborderradius = _props$attributes.headerborderradius,
        username = _props$attributes.username,
        date = _props$attributes.date,
        rating = _props$attributes.rating,
        description = _props$attributes.description,
        product_satisfaction = _props$attributes.product_satisfaction,
        customer_service = _props$attributes.customer_service,
        referral = _props$attributes.referral,
        bodyborderwidth = _props$attributes.bodyborderwidth,
        bodybordertype = _props$attributes.bodybordertype,
        bodybordercolor = _props$attributes.bodybordercolor,
        bodyborderradius = _props$attributes.bodyborderradius,
        contentborderwidth = _props$attributes.contentborderwidth,
        contentbordertype = _props$attributes.contentbordertype,
        contentbordercolor = _props$attributes.contentbordercolor,
        contentborderradius = _props$attributes.contentborderradius,
        customCssText = _props$attributes.customCssText,
        spa_block_css = _props$attributes.spa_block_css,
        setAttributes = props.setAttributes,
        className = props.className;


    spa_ajax_main_response(0, "newest");

    var HeaderbgStyle = headerbg ? "background-color :" + headerbg + ";" : "";
    var BodybgStyle = bodybg ? "background-color :" + bodybg + ";" : "";
    var ContentbgbgStyle = contentbg ? "background-color :" + contentbg + ";" : "";
    var bodyfontcolorStyle = bodyfontcolor ? "color:" + bodyfontcolor + ";" : "";
    var headerratingStyle = !headerrating ? "display :none;" : "";

    var headerborderwidthStyle = headerborderwidth ? "border-width :" + headerborderwidth + "px;" : "";
    var headerbordertypeStyle = headerbordertype ? "border-style :" + headerbordertype + ";" : "";
    var headerbordercolorStyle = headerbordercolor ? "border-color :" + headerbordercolor + ";" : "";
    var headerborderradiusStyle = headerborderradius ? "border-radius :" + headerborderradius + "px;" : "";

    var usernameStyle = !username ? "display :none;" : "";
    var dateStyle = !date ? "display :none;" : "";
    var ratingStyle = !rating ? "display :none;" : "";
    var descriptionStyle = !description ? "display :none;" : "";
    var product_satisfactionStyle = !product_satisfaction ? "display :none;" : "";
    var customer_serviceStyle = !customer_service ? "display :none;" : "";
    var referralStyle = !referral ? "display :none;" : "";

    var bodyborderwidthStyle = bodyborderwidth ? "border-width :" + bodyborderwidth + "px;" : "";
    var bodybordertypeStyle = bodybordertype ? "border-style :" + bodybordertype + ";" : "";
    var bodybordercolorStyle = bodybordercolor ? "border-color :" + bodybordercolor + ";" : "";
    var bodyborderradiusStyle = bodyborderradius ? "border-radius :" + bodyborderradius + "px;" : "";

    var contentborderwidthStyle = contentborderwidth ? "border-width :" + contentborderwidth + "px;" : "";
    var contentbordertypeStyle = contentbordertype ? "border-style :" + contentbordertype + ";" : "";
    var contentbordercolorStyle = contentbordercolor ? "border-color :" + contentbordercolor + ";" : "";
    var contentborderradiusStyle = contentborderradius ? "border-radius :" + contentborderradius + "px;" : "";

    var spa_css = ".spa_header_container.remove_padding{" + HeaderbgStyle + headerborderwidthStyle + headerbordertypeStyle + headerbordercolorStyle + headerborderradiusStyle + "}" + ".spa_content_container{" + BodybgStyle + bodyborderwidthStyle + bodybordertypeStyle + bodybordercolorStyle + bodyborderradiusStyle + "}" + ".spa_review_title span.spa_reviewer_name{" + usernameStyle + "}" + ".spa_header_content span.fa.fa-star{" + headerratingStyle + "}" + ".spa_review_container .spa_review_title span.small.grey{" + dateStyle + "}" + ".spa_review_container .spa_star_rating{" + ratingStyle + "}" + ".spa_reviewer_comment p.text-left.reviewcomments{" + descriptionStyle + "}" + ".spa_various_ratings .product_satisfaction{" + product_satisfactionStyle + "}" + ".spa_various_ratings .customer_service{" + customer_serviceStyle + "}" + ".spa_various_ratings .referral{" + referralStyle + "}" + ".spa_content_container .spa_review_border.whitebg.padding{" + ContentbgbgStyle + contentborderwidthStyle + contentbordertypeStyle + contentbordercolorStyle + contentborderradiusStyle + "}" + ".spa_review_border.whitebg.padding *{" + bodyfontcolorStyle + "}" + customCssText;

    setAttributes({ spa_block_css: spa_css });

    return [wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorAdvancedControls,
        null,
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(TextareaControl, {
              label: "Custom CSS",
              value: customCssText,
              onChange: function onChange(value) {
                return setAttributes({ customCssText: value });
              }
            })
          )
        )
      ),
      wp.element.createElement(
        InspectorControls,
        { key: clientId },
        wp.element.createElement(
          PanelBody,
          { title: __("Header Settings"), initialOpen: true },
          wp.element.createElement(
            "label",
            null,
            "Header background"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
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
          ),
          wp.element.createElement(
            "label",
            null,
            "Header Border Type"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(SelectControl, {
              value: headerbordertype,
              options: [{ label: __("None"), value: "none" }, { label: __("Solid"), value: "solid" }, { label: __("Dashed"), value: "dashed" }, { label: __("Dotted"), value: "dotted" }],
              onChange: function onChange(value) {
                return setAttributes({ headerbordertype: value });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Header Border Width"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(RangeControl, {
              value: headerborderwidth,
              min: "0",
              max: "100",
              step: "1",
              onChange: function onChange(value) {
                return setAttributes({ headerborderwidth: value });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Header Border Color"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(ColorPalette, {
              value: headerbordercolor,
              onChange: function onChange(value) {
                return setAttributes({
                  headerbordercolor: value
                });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Header Border Radius"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(RangeControl, {
              value: headerborderradius,
              min: "0",
              max: "100",
              step: "1",
              onChange: function onChange(value) {
                return setAttributes({ headerborderradius: value });
              }
            })
          )
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Body Settings"), initialOpen: false },
          wp.element.createElement(
            "label",
            null,
            "Body background"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(ColorPalette, {
              onChange: function onChange(value) {
                return setAttributes({ bodybg: value });
              },
              disableAlpha: true
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Body Border Type"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(SelectControl, {
              value: bodybordertype,
              options: [{ label: __("None"), value: "none" }, { label: __("Solid"), value: "solid" }, { label: __("Dashed"), value: "dashed" }, { label: __("Dotted"), value: "dotted" }],
              onChange: function onChange(value) {
                return setAttributes({ bodybordertype: value });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Body Border Width"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(RangeControl, {
              value: bodyborderwidth,
              min: "0",
              max: "100",
              step: "1",
              onChange: function onChange(value) {
                return setAttributes({ bodyborderwidth: value });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Body Border Color"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(ColorPalette, {
              value: bodybordercolor,
              onChange: function onChange(value) {
                return setAttributes({
                  bodybordercolor: value
                });
              }
            })
          ),
          wp.element.createElement(
            "label",
            null,
            "Body Border Radius"
          ),
          wp.element.createElement(
            PanelRow,
            { className: "spa_panal_row_class" },
            wp.element.createElement(RangeControl, {
              value: bodyborderradius,
              min: "0",
              max: "100",
              step: "1",
              onChange: function onChange(value) {
                return setAttributes({ bodyborderradius: value });
              }
            })
          ),
          wp.element.createElement(
            PanelBody,
            { title: __("Inner Content Settings"), initialOpen: false },
            wp.element.createElement(
              "label",
              null,
              "Innter Content background"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(ColorPalette, {
                onChange: function onChange(value) {
                  return setAttributes({ contentbg: value });
                },
                disableAlpha: true
              })
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(
                "strong",
                { className: "spa_panel_row_strong" },
                "Show Below Fields"
              ),
              wp.element.createElement(
                "ul",
                null,
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Username",
                    checked: username,
                    onChange: function onChange() {
                      return setAttributes({ username: !username });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Date",
                    checked: date,
                    onChange: function onChange() {
                      return setAttributes({ date: !date });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Rating",
                    checked: rating,
                    onChange: function onChange() {
                      return setAttributes({ rating: !rating });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Description",
                    checked: description,
                    onChange: function onChange() {
                      return setAttributes({ description: !description });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Product satisfaction",
                    checked: product_satisfaction,
                    onChange: function onChange() {
                      return setAttributes({
                        product_satisfaction: !product_satisfaction
                      });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Customer service",
                    checked: customer_service,
                    onChange: function onChange() {
                      return setAttributes({ customer_service: !customer_service });
                    },
                    className: "toggle-setting-class"
                  })
                ),
                wp.element.createElement(
                  "li",
                  { className: "spa_panel_row_tootgle" },
                  wp.element.createElement(ToggleControl, {
                    label: "Referral",
                    checked: referral,
                    onChange: function onChange() {
                      return setAttributes({ referral: !referral });
                    },
                    className: "toggle-setting-class"
                  })
                )
              )
            ),
            wp.element.createElement(
              "label",
              null,
              "Inner Content Border Type"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(SelectControl, {
                value: contentbordertype,
                options: [{ label: __("None"), value: "none" }, { label: __("Solid"), value: "solid" }, { label: __("Dashed"), value: "dashed" }, { label: __("Dotted"), value: "dotted" }],
                onChange: function onChange(value) {
                  return setAttributes({ contentbordertype: value });
                }
              })
            ),
            wp.element.createElement(
              "label",
              null,
              "Inner Content Border Width"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(RangeControl, {
                value: contentborderwidth,
                min: "0",
                max: "100",
                step: "1",
                onChange: function onChange(value) {
                  return setAttributes({ contentborderwidth: value });
                }
              })
            ),
            wp.element.createElement(
              "label",
              null,
              "inner Content Border Color"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(ColorPalette, {
                value: contentbordercolor,
                onChange: function onChange(value) {
                  return setAttributes({
                    contentbordercolor: value
                  });
                }
              })
            ),
            wp.element.createElement(
              "label",
              null,
              "Inner Content Border Radius"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(RangeControl, {
                value: contentborderradius,
                min: "0",
                max: "100",
                step: "1",
                onChange: function onChange(value) {
                  return setAttributes({ contentborderradius: value });
                }
              })
            ),
            wp.element.createElement(
              "label",
              null,
              "Body font color"
            ),
            wp.element.createElement(
              PanelRow,
              { className: "spa_panal_row_class" },
              wp.element.createElement(ColorPalette, {
                onChange: function onChange(value) {
                  return setAttributes({ bodyfontcolor: value });
                },
                disableAlpha: true
              })
            )
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
    var _props$attributes2 = props.attributes,
        spa_block_css = _props$attributes2.spa_block_css,
        headerrating = _props$attributes2.headerrating,
        headertitle = _props$attributes2.headertitle,
        headersubtitle = _props$attributes2.headersubtitle;
    // Rendering in PHP

    return null;
  }
});

/***/ })
/******/ ]);