const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  InspectorAdvancedControls,
  ColorPalette
} = wp.editor;
const {
  PanelBody,
  PanelRow,
  Button,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  ServerSideRender,
  SelectControl
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
  edit: function(props) {
    const {
      clientId,
      attributes: {
        headerbg,
        headerrating,
        headertitle,
        headersubtitle,
        bodybg,
        contentbg,
        bodyfontcolor,
        headerborderwidth,
        headerbordertype,
        headerbordercolor,
        headerborderradius,
        username,
        date,
        rating,
        description,
        product_satisfaction,
        customer_service,
        referral,
        bodyborderwidth,
        bodybordertype,
        bodybordercolor,
        bodyborderradius,
        contentborderwidth,
        contentbordertype,
        contentbordercolor,
        contentborderradius,
        customCssText,
        spa_block_css
      },
      setAttributes,
      className
    } = props;

    spa_ajax_main_response(0, "newest");

    let HeaderbgStyle = headerbg ? "background-color :" + headerbg + ";" : "";
    let BodybgStyle = bodybg ? "background-color :" + bodybg + ";" : "";
    let ContentbgbgStyle = contentbg
      ? "background-color :" + contentbg + ";"
      : "";
    let bodyfontcolorStyle = bodyfontcolor
      ? "color:" + bodyfontcolor + ";"
      : "";
    let headerratingStyle = !headerrating ? "display :none;" : "";

    let headerborderwidthStyle = headerborderwidth
      ? "border-width :" + headerborderwidth + "px;"
      : "";
    let headerbordertypeStyle = headerbordertype
      ? "border-style :" + headerbordertype + ";"
      : "";
    let headerbordercolorStyle = headerbordercolor
      ? "border-color :" + headerbordercolor + ";"
      : "";
    let headerborderradiusStyle = headerborderradius
      ? "border-radius :" + headerborderradius + "px;"
      : "";

    let usernameStyle = !username ? "display :none;" : "";
    let dateStyle = !date ? "display :none;" : "";
    let ratingStyle = !rating ? "display :none;" : "";
    let descriptionStyle = !description ? "display :none;" : "";
    let product_satisfactionStyle = !product_satisfaction
      ? "display :none;"
      : "";
    let customer_serviceStyle = !customer_service ? "display :none;" : "";
    let referralStyle = !referral ? "display :none;" : "";

    let bodyborderwidthStyle = bodyborderwidth
      ? "border-width :" + bodyborderwidth + "px;"
      : "";
    let bodybordertypeStyle = bodybordertype
      ? "border-style :" + bodybordertype + ";"
      : "";
    let bodybordercolorStyle = bodybordercolor
      ? "border-color :" + bodybordercolor + ";"
      : "";
    let bodyborderradiusStyle = bodyborderradius
      ? "border-radius :" + bodyborderradius + "px;"
      : "";

    let contentborderwidthStyle = contentborderwidth
      ? "border-width :" + contentborderwidth + "px;"
      : "";
    let contentbordertypeStyle = contentbordertype
      ? "border-style :" + contentbordertype + ";"
      : "";
    let contentbordercolorStyle = contentbordercolor
      ? "border-color :" + contentbordercolor + ";"
      : "";
    let contentborderradiusStyle = contentborderradius
      ? "border-radius :" + contentborderradius + "px;"
      : "";

    let spa_css =
      ".spa_header_container.remove_padding{" +
      HeaderbgStyle +
      headerborderwidthStyle +
      headerbordertypeStyle +
      headerbordercolorStyle +
      headerborderradiusStyle +
      "}" +
      ".spa_content_container{" +
      BodybgStyle +
      bodyborderwidthStyle +
      bodybordertypeStyle +
      bodybordercolorStyle +
      bodyborderradiusStyle +
      "}" +
      ".spa_review_title span.spa_reviewer_name{" +
      usernameStyle +
      "}" +
      ".spa_header_content span.fa.fa-star{" +
      headerratingStyle +
      "}" +
      ".spa_review_container .spa_review_title span.small.grey{" +
      dateStyle +
      "}" +
      ".spa_review_container .spa_star_rating{" +
      ratingStyle +
      "}" +
      ".spa_reviewer_comment p.text-left.reviewcomments{" +
      descriptionStyle +
      "}" +
      ".spa_various_ratings .product_satisfaction{" +
      product_satisfactionStyle +
      "}" +
      ".spa_various_ratings .customer_service{" +
      customer_serviceStyle +
      "}" +
      ".spa_various_ratings .referral{" +
      referralStyle +
      "}" +
      ".spa_content_container .spa_review_border.whitebg.padding{" +
      ContentbgbgStyle +
      contentborderwidthStyle +
      contentbordertypeStyle +
      contentbordercolorStyle +
      contentborderradiusStyle +
      "}" +
      ".spa_review_border.whitebg.padding *{" +
      bodyfontcolorStyle +
      "}" +
      customCssText;

    setAttributes({ spa_block_css: spa_css });

    return [
      <Fragment>
        <InspectorAdvancedControls>
          <PanelRow>
            <PanelRow>
              <TextareaControl
                label="Custom CSS"
                value={customCssText}
                onChange={value => setAttributes({ customCssText: value })}
              />
            </PanelRow>
          </PanelRow>
        </InspectorAdvancedControls>
        <InspectorControls key={clientId}>
          <PanelBody title={__("Header Settings")} initialOpen={true}>
            <label>Header background</label>
            <PanelRow className="spa_panal_row_class">
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
            <label>Header Border Type</label>
            <PanelRow className="spa_panal_row_class">
              <SelectControl
                value={headerbordertype}
                options={[
                  { label: __("None"), value: "none" },
                  { label: __("Solid"), value: "solid" },
                  { label: __("Dashed"), value: "dashed" },
                  { label: __("Dotted"), value: "dotted" }
                ]}
                onChange={value => setAttributes({ headerbordertype: value })}
              />
            </PanelRow>
            <label>Header Border Width</label>
            <PanelRow className="spa_panal_row_class">
              <RangeControl
                value={headerborderwidth}
                min="0"
                max="100"
                step="1"
                onChange={value => setAttributes({ headerborderwidth: value })}
              />
            </PanelRow>
            <label>Header Border Color</label>
            <PanelRow className="spa_panal_row_class">
              <ColorPalette
                value={headerbordercolor}
                onChange={value =>
                  setAttributes({
                    headerbordercolor: value
                  })
                }
              />
            </PanelRow>
            <label>Header Border Radius</label>
            <PanelRow className="spa_panal_row_class">
              <RangeControl
                value={headerborderradius}
                min="0"
                max="100"
                step="1"
                onChange={value => setAttributes({ headerborderradius: value })}
              />
            </PanelRow>
          </PanelBody>
          <PanelBody title={__("Body Settings")} initialOpen={false}>
            <label>Body background</label>
            <PanelRow className="spa_panal_row_class">
              <ColorPalette
                onChange={value => setAttributes({ bodybg: value })}
                disableAlpha
              />
            </PanelRow>

            <label>Body Border Type</label>
            <PanelRow className="spa_panal_row_class">
              <SelectControl
                value={bodybordertype}
                options={[
                  { label: __("None"), value: "none" },
                  { label: __("Solid"), value: "solid" },
                  { label: __("Dashed"), value: "dashed" },
                  { label: __("Dotted"), value: "dotted" }
                ]}
                onChange={value => setAttributes({ bodybordertype: value })}
              />
            </PanelRow>
            <label>Body Border Width</label>
            <PanelRow className="spa_panal_row_class">
              <RangeControl
                value={bodyborderwidth}
                min="0"
                max="100"
                step="1"
                onChange={value => setAttributes({ bodyborderwidth: value })}
              />
            </PanelRow>
            <label>Body Border Color</label>
            <PanelRow className="spa_panal_row_class">
              <ColorPalette
                value={bodybordercolor}
                onChange={value =>
                  setAttributes({
                    bodybordercolor: value
                  })
                }
              />
            </PanelRow>
            <label>Body Border Radius</label>
            <PanelRow className="spa_panal_row_class">
              <RangeControl
                value={bodyborderradius}
                min="0"
                max="100"
                step="1"
                onChange={value => setAttributes({ bodyborderradius: value })}
              />
            </PanelRow>
            <PanelBody title={__("Inner Content Settings")} initialOpen={false}>
              <label>Innter Content background</label>
              <PanelRow className="spa_panal_row_class">
                <ColorPalette
                  onChange={value => setAttributes({ contentbg: value })}
                  disableAlpha
                />
              </PanelRow>
              <PanelRow className="spa_panal_row_class">
                <strong className="spa_panel_row_strong">
                  Show Below Fields
                </strong>
                <ul>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Username"
                      checked={username}
                      onChange={() => setAttributes({ username: !username })}
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Date"
                      checked={date}
                      onChange={() => setAttributes({ date: !date })}
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Rating"
                      checked={rating}
                      onChange={() => setAttributes({ rating: !rating })}
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Description"
                      checked={description}
                      onChange={() =>
                        setAttributes({ description: !description })
                      }
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Product satisfaction"
                      checked={product_satisfaction}
                      onChange={() =>
                        setAttributes({
                          product_satisfaction: !product_satisfaction
                        })
                      }
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Customer service"
                      checked={customer_service}
                      onChange={() =>
                        setAttributes({ customer_service: !customer_service })
                      }
                      className="toggle-setting-class"
                    />
                  </li>
                  <li className="spa_panel_row_tootgle">
                    <ToggleControl
                      label="Referral"
                      checked={referral}
                      onChange={() => setAttributes({ referral: !referral })}
                      className="toggle-setting-class"
                    />
                  </li>
                </ul>
              </PanelRow>
              <label>Inner Content Border Type</label>
              <PanelRow className="spa_panal_row_class">
                <SelectControl
                  value={contentbordertype}
                  options={[
                    { label: __("None"), value: "none" },
                    { label: __("Solid"), value: "solid" },
                    { label: __("Dashed"), value: "dashed" },
                    { label: __("Dotted"), value: "dotted" }
                  ]}
                  onChange={value =>
                    setAttributes({ contentbordertype: value })
                  }
                />
              </PanelRow>
              <label>Inner Content Border Width</label>
              <PanelRow className="spa_panal_row_class">
                <RangeControl
                  value={contentborderwidth}
                  min="0"
                  max="100"
                  step="1"
                  onChange={value =>
                    setAttributes({ contentborderwidth: value })
                  }
                />
              </PanelRow>
              <label>inner Content Border Color</label>
              <PanelRow className="spa_panal_row_class">
                <ColorPalette
                  value={contentbordercolor}
                  onChange={value =>
                    setAttributes({
                      contentbordercolor: value
                    })
                  }
                />
              </PanelRow>
              <label>Inner Content Border Radius</label>
              <PanelRow className="spa_panal_row_class">
                <RangeControl
                  value={contentborderradius}
                  min="0"
                  max="100"
                  step="1"
                  onChange={value =>
                    setAttributes({ contentborderradius: value })
                  }
                />
              </PanelRow>
              <label>Body font color</label>
              <PanelRow className="spa_panal_row_class">
                <ColorPalette
                  onChange={value => setAttributes({ bodyfontcolor: value })}
                  disableAlpha
                />
              </PanelRow>
            </PanelBody>
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
    const {
      attributes: { spa_block_css, headerrating, headertitle, headersubtitle }
    } = props;
    // Rendering in PHP
    return null;
  }
});
