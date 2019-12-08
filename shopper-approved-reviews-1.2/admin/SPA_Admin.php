<?php /** @noinspection ALL */
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
if ( !class_exists( 'SPA_Admin' ) ) {
    /**
     * @property mixed|void options
     */
    class SPA_Admin
    {
        function __construct()
        {
            add_action('admin_init', array($this, 'spa_sub_menu_page_create'));
            add_action('admin_menu', array($this, 'spa_create_menu'));
            add_action('admin_enqueue_scripts', array($this, 'spa_enqueue_style_admin'));
        }

        public function spa_enqueue_style_admin() {
            wp_enqueue_style('spa-admin-style', SPA_PLUGIN_DIR.'admin/css/spa_admin.css');
        }

        /**
         * Create menu
         * @since 1.0
         */
        public function spa_create_menu()
        {
            add_options_page(
                __('SPA settings', 'textdomain'),
                'SPA settings',
                'manage_options',
                'spa-page-content',
                array($this, 'spa_page_content'),
                'dashicons-editor-insertmore',
                6
            );
        }

        /**
         * Menu page content
         * @since 1.0
         */
        public function spa_page_content()
        {
            $this->options = get_option('spa_setting_options');

            wp_enqueue_media();

            echo '<div class="wrap sap_form_container">';

            printf('<h1>%s</h1>', __('SPA Options', 'shopperapproved'));

            echo '<form method="post" action="options.php">';

            settings_fields('spa_setting');

            do_settings_sections('spa-setting-page');

            submit_button();

            echo '</form></div><div class="sap_api_doc"><b>Step1 :-</b> Please refer document for ganrate siteid and token.<a href="https://help.fomo.com/integration-guides/shopper-approved/where-do-i-find-my-shopper-approved-api-token" target="_blank">click here</a><br><b>Step2 :-</b> Use <code>[spa_shortcode]</code> shortcode in your page</div>';
        }

        /**
         * Add setting section
         * @since 1.0
         */
        public function spa_sub_menu_page_create()
        {
            register_setting(
                'spa_setting', // Option group
                'spa_setting_options', // Option name
                array($this, 'spa_sanitize') // Sanitize
            );
            add_settings_section(
                'sap_site_id', // ID
                __('Site id', 'shopperapproved'), // Title
                array($this, 'sap_site_id_callback'), // Callback
                'spa-setting-page' // Page
            );
            add_settings_section(
                'sap_token', // ID
                __('Token', 'shopperapproved'), // Title
                array($this, 'sap_token_callback'), // Callback
                'spa-setting-page' // Page
            );
        }

        public function spa_sanitize($input)
        {
            $new_input = array();

            if (isset($input['sap_site_id']))
                $new_input['sap_site_id'] = sanitize_text_field($input['sap_site_id']);

            if (isset($input['sap_token']))
                $new_input['sap_token'] = sanitize_text_field($input['sap_token']);

            return $new_input;
        }

        /**
         * Get the settings option array and print one of its values
         */
        public function sap_site_id_callback()
        {
            printf(
                '<input type="text" id="sap_site_id" name="spa_setting_options[sap_site_id]" value="%s" required/>',
                isset($this->options['sap_site_id']) ? esc_attr($this->options['sap_site_id']) : ''
            );
        }

        public function sap_token_callback()
        {
            printf(
                '<input type="text" id="sap_token" name="spa_setting_options[sap_token]" value="%s" required/>',
                isset($this->options['sap_token']) ? esc_attr($this->options['sap_token']) : ''
            );
        }
    }
}