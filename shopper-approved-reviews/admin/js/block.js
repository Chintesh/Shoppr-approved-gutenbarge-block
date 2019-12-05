const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { InspectorControls, ColorPalette } = wp.editor;
const {
  PanelBody,
  PanelRow,
  Button,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  ServerSideRender
} = wp.components;

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
      default:
        "Based on {numberofcustomer} Customer Ratings Ratings from Actual Customers"
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
  edit: function(props) {
    const {
      clientId,
      attributes: {
        headerbg,
        headerrating,
        headertitle,
        headersubtitle,
        bodybg,
        spa_block_css
      },
      setAttributes,
      className
    } = props;
    spa_ajax_main_response(0, "newest");

    let HeaderbgStyle = headerbg ? "background-color :" + headerbg + ";" : "";
    let BodybgStyle = bodybg ? "background-color :" + bodybg + ";" : "";

    let spa_css =
      ".spa_header_container.remove_padding{" +
      HeaderbgStyle +
      "}" +
      ".spa_content_container{" +
      BodybgStyle +
      "}";

    setAttributes({ spa_block_css: spa_css });

    return [
      <Fragment>
        <InspectorControls key={clientId}>
          <PanelBody title={__("Header Settings")} initialOpen={true}>
            <PanelRow>
              <ColorPalette
                onChange={value => setAttributes({ headerbg: value })}
                disableAlpha
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label="Header rating enable"
                checked={headerrating}
                onChange={() => setAttributes({ headerrating: !headerrating })}
                className="toggle-setting-class"
              />
            </PanelRow>
            <PanelRow>
              <TextareaControl
                label="Header title"
                help="Add content Like  (ie. {overallrating} Overall Satisfaction Rating )"
                value={headertitle}
                onChange={value => setAttributes({ headertitle: value })}
              />
            </PanelRow>
            <PanelRow>
              <TextareaControl
                label="Header sub title"
                help="Add content Like (ie. Based on {numberofcustomer} Customer Ratings Ratings from Actual Customers )"
                value={headersubtitle}
                onChange={value => setAttributes({ headersubtitle: value })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title={__("Body Settings")} initialOpen={false}>
            <PanelRow>
              <ColorPalette
                onChange={value => setAttributes({ bodybg: value })}
                disableAlpha
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <ServerSideRender
          attributes={{
            spa_block_css: spa_block_css,
            headerrating: headerrating,
            headertitle: headertitle,
            headersubtitle: headersubtitle
          }}
          className={className}
          block="spa/spa-render"
        />
      </Fragment>
    ];
  },
  save: function(props) {
    // Rendering in PHP
    return null;
  }
});
