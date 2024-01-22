<?php

namespace EssentialBlocks\Core;

use EssentialBlocks\Utils\Helper;
use EssentialBlocks\blocks\WPForms;
use EssentialBlocks\blocks\FluentForms;
use EssentialBlocks\Traits\HasSingletone;

class Scripts {
    use HasSingletone;

    private $is_gutenberg_editor = false;

    public $plugin = null;

    public function __construct() {
        add_action(
            'init',
            function () {
                $this->plugin = wpdev_essential_blocks();
            },
            1
        );

        // Enqueue Assets Only for FSE
        global $pagenow;
        if ( $pagenow === 'site-editor.php' ) {
            add_action( 'admin_init', [$this, 'block_editor_assets'], 1 );
            add_action( 'admin_init', [$this, 'frontend_backend_assets'] );
        }

        add_action( 'enqueue_block_editor_assets', [$this, 'block_editor_assets'] );
        add_action( 'enqueue_block_editor_assets', [$this, 'frontend_backend_assets'] );
        add_action( 'wp_enqueue_scripts', [$this, 'frontend_backend_assets'] );
        add_action( 'init', [$this, 'localize_enqueue_scripts'] );
    }

    public function block_editor_assets() {
        $this->is_gutenberg_editor = true;

        global $pagenow;

        wpdev_essential_blocks()->assets->register( 'twenty-move', 'js/jquery.event.move.js' );
        wpdev_essential_blocks()->assets->register( 'image-loaded', 'js/images-loaded.min.js' );
        wpdev_essential_blocks()->assets->register( 'isotope', 'js/isotope.pkgd.min.js' );
        wpdev_essential_blocks()->assets->register( 'twenty-twenty', 'js/jquery.twentytwenty.js' );
        wpdev_essential_blocks()->assets->register( 'fslightbox-js', 'js/fslightbox.min.js' );
        wpdev_essential_blocks()->assets->register( 'masonry', 'js/masonry.min.js' );
        wpdev_essential_blocks()->assets->register( 'slickjs', 'js/slick.min.js' );
        wpdev_essential_blocks()->assets->register( 'patterns', 'js/eb-patterns.js' );
        wpdev_essential_blocks()->assets->register(
            'controls-util',
            '../dist/controls.js',
            [
                'essential-blocks-blocks-localize'
            ]
        );

        $editor_scripts_deps = [
            'essential-blocks-vendor-bundle',
            'essential-blocks-controls-util',
            'essential-blocks-twenty-move',
            'essential-blocks-image-loaded',
            'essential-blocks-isotope',
            'essential-blocks-twenty-twenty',
            'essential-blocks-fslightbox-js',
            'essential-blocks-masonry',
            'essential-blocks-typedjs',
            'essential-blocks-slickjs',
            'essential-blocks-patterns'
        ];

        if ( $pagenow !== 'widgets.php' ) {
            //global-styles
            wpdev_essential_blocks()->assets->register( 'global-styles', '../lib/global-styles/dist/index.js' );
            $editor_scripts_deps[] = 'essential-blocks-global-styles';

            //templately-installer
            wpdev_essential_blocks()->assets->register( 'templately-installer', '../lib/templately-installer/dist/index.js' );
            $editor_scripts_deps[] = 'essential-blocks-templately-installer';
        }

        wpdev_essential_blocks()->assets->register( 'editor-script', '../dist/index.js', $editor_scripts_deps );

        // If vendor files has css and extists
        if ( file_exists( ESSENTIAL_BLOCKS_DIR_PATH . 'vendor-bundle/style.css' ) ) {
            wpdev_essential_blocks()->assets->register( 'admin-vendor-style', '../vendor-bundle/style.css' );
        }

        $editor_styles_deps = [
            'essential-blocks-slick-style',
            'essential-blocks-fslightbox-style',
            'essential-blocks-twenty-twenty-style-image-comparison',
            'essential-blocks-hover-effects-style',
            'essential-blocks-hover-css',
            'essential-blocks-fontpicker-material-theme',
            'essential-blocks-fontpicker-default-theme',
            'essential-blocks-fontawesome',
            'essential-blocks-frontend-style',
            'essential-blocks-block-common',
            'essential-blocks-common-style'
        ];

        if ( $pagenow !== 'widgets.php' ) {
            //Global Styles
            wpdev_essential_blocks()->assets->register( 'global-styles', '../lib/global-styles/dist/style.css' );
            $editor_styles_deps[] = 'essential-blocks-global-styles';

            //templately-installer
            wpdev_essential_blocks()->assets->register( 'templately-installer', '../lib/templately-installer/dist/style.css' );
            $editor_styles_deps[] = 'essential-blocks-templately-installer';
        }

        // register styles
        wpdev_essential_blocks()->assets->register( 'editor-css', '../dist/controls.css', $editor_styles_deps );
    }

    /**
     * enqueue/register assets files in frontend/backend
     *
     * @return void
     */
    public function frontend_backend_assets() {
        wpdev_essential_blocks()->assets->register( 'eb-animation', 'js/eb-animation-load.js' );
        wpdev_essential_blocks()->assets->register( 'animation', 'css/animate.min.css' );

        wpdev_essential_blocks()->assets->register( 'vendor-bundle', '../vendor-bundle/index.js' );
        wpdev_essential_blocks()->assets->register( 'frontend-style', '../dist/style.css' );
        wpdev_essential_blocks()->assets->register( 'fontawesome', 'css/font-awesome5.css' );
        wpdev_essential_blocks()->assets->register( 'fontpicker-default-theme', 'css/fonticonpicker.base-theme.react.css' );
        wpdev_essential_blocks()->assets->register( 'fontpicker-material-theme', 'css/fonticonpicker.material-theme.react.css' );
        wpdev_essential_blocks()->assets->register( 'hover-css', 'css/hover-min.css' );
        wpdev_essential_blocks()->assets->register( 'hover-effects-style', 'css/hover-effects.css' );
        wpdev_essential_blocks()->assets->register( 'twenty-twenty-style-image-comparison', 'css/twentytwenty.css' );
        wpdev_essential_blocks()->assets->register( 'fslightbox-style', 'css/fslightbox.min.css' );
        wpdev_essential_blocks()->assets->register( 'slick-style', 'css/slick.css' );
        wpdev_essential_blocks()->assets->register( 'block-common', 'css/block-common.css' );
        wpdev_essential_blocks()->assets->register( 'common-style', 'css/eb-common.css' );
        wpdev_essential_blocks()->assets->register( 'typedjs', 'js/typed.min.js' );

        wpdev_essential_blocks()->assets->register( 'flv', 'js/react-player/flv.min.js' );
        wpdev_essential_blocks()->assets->register( 'dash', 'js/react-player/dash.all.min.js' );
        wpdev_essential_blocks()->assets->register( 'hls', 'js/react-player/hls.min.js' );

        //CSS Var for Global Colors
        $global_color_settings = wp_unslash( get_option( 'eb_global_styles' ) );

        //global solid colors
        $global_colors = [];
        if ( isset( $global_color_settings['global_colors'] ) && Helper::isJson( $global_color_settings['global_colors'] ) ) {
            $global_colors = json_decode( $global_color_settings['global_colors'] );
        } else {
            $global_colors = Helper::global_colors();
        }

        //custom solid colors
        $custom_colors = [];
        if ( isset( $global_color_settings['custom_colors'] ) && Helper::isJson( $global_color_settings['custom_colors'] ) ) {
            $custom_colors = json_decode( $global_color_settings['custom_colors'] );
        }

        //global gradient colors
        $gradient_colors = [];
        if ( isset( $global_color_settings['gradient_colors'] ) && Helper::isJson( $global_color_settings['gradient_colors'] ) ) {
            $gradient_colors = json_decode( $global_color_settings['gradient_colors'] );
        } else {
            $gradient_colors = Helper::gradient_colors();
        }

        //custom gradient colors
        $custom_gradient_colors = [];
        if ( isset( $global_color_settings['custom_gradient_colors'] ) && Helper::isJson( $global_color_settings['custom_gradient_colors'] ) ) {
            $custom_gradient_colors = json_decode( $global_color_settings['custom_gradient_colors'] );
        }

        $colors_css = "";

        //Global Colors to CSS String
        $colors_css .= $this->array_to_css( $global_colors );

        //Custom Colors to CSS String
        $colors_css .= $this->array_to_css( $custom_colors );

        //Gradient Colors to CSS String
        $colors_css .= $this->array_to_css( $gradient_colors );

        //Custom Gradient Colors to CSS String
        $colors_css .= $this->array_to_css( $custom_gradient_colors );

        $custom_css = "
            :root {
                {$colors_css}
            }
        ";
        wp_add_inline_style( 'essential-blocks-frontend-style', $custom_css );
    }

    private function array_to_css( $css_array ) {
        $css = '';
        if ( is_array( $css_array ) && count( $css_array ) > 0 ) {
            foreach ( $css_array as $color ) {
                if ( ! isset( $color->color ) ) {
                    $color->color = '#000';
                }
                if ( isset( $color->var ) ) {
                    $css .= "{$color->var}: {$color->color};\n";
                }
            }
        }
        return $css;
    }

    /**
     * enqueue localize scripts
     *
     * @return void
     */
    public function localize_enqueue_scripts() {
        wpdev_essential_blocks()->assets->enqueue( 'blocks-localize', 'js/eb-blocks-localize.js' );

        global $pagenow;
        $editor_type = '';
        if ( $pagenow == 'post-new.php' || $pagenow == 'post.php' ) {
            $editor_type = 'edit-post';
        } elseif ( $pagenow == 'site-editor.php' || ( $pagenow == 'themes.php' && isset( $_GET['page'] ) && $_GET['page'] == 'gutenberg-edit-site' ) ) {
            $editor_type = 'edit-site';
        } elseif ( $pagenow == 'widgets.php' ) {
            $editor_type = 'edit-widgets';
        }
        wpdev_essential_blocks()->assets->localize(
            'blocks-localize',
            'eb_conditional_localize',
            [
                'editor_type' => $editor_type
            ]
        );

        $eb_settings = get_option( 'eb_settings', [] );
        $googleFont  = ! empty( $eb_settings['googleFont'] ) ? $eb_settings['googleFont'] : 'true';
        $fontAwesome = ! empty( $eb_settings['fontAwesome'] ) ? $eb_settings['fontAwesome'] : 'true';

        $plugin = $this->plugin;

        $localize_array = [
            'eb_plugins_url'             => ESSENTIAL_BLOCKS_URL,
            'eb_wp_version'              => ESSENTIAL_BLOCKS_WP_VERSION,
            'eb_version'                 => ESSENTIAL_BLOCKS_VERSION,
            'eb_admin_url'               => get_admin_url(),
            'rest_rootURL'               => get_rest_url(),
            'ajax_url'                   => admin_url( 'admin-ajax.php' ),
            'nft_nonce'                  => wp_create_nonce( 'eb-nft-nonce' ),
            'post_grid_pagination_nonce' => wp_create_nonce( 'eb-pagination-nonce' ),
            'placeholder_image'          => ESSENTIAL_BLOCKS_PLACEHOLDER_IMAGE,
            'is_pro_active'              => ESSENTIAL_BLOCKS_IS_PRO_ACTIVE ? "true" : "false",
            'upgrade_pro_url'            => ESSENTIAL_BLOCKS_UPGRADE_PRO_URL
        ];
        if ( is_admin() ) {
            $admin_localize_array = [
                'admin_nonce'         => wp_create_nonce( 'admin-nonce' ),
                'fluent_form_lists'   => json_encode( FluentForms::form_list() ),
                'wpforms_lists'       => json_encode( WPForms::form_list() ),
                'all_blocks'          => $plugin::$blocks->all(),
                'all_blocks_default'  => $plugin::$blocks->defaults( true, false ),
                'get_plugins'         => Helper::get_plugin_list_for_localize(),
                'googleFont'          => $googleFont,
                'fontAwesome'         => $fontAwesome,
                'globalColors'        => Helper::global_colors(),
                'gradientColors'      => Helper::gradient_colors(),
                'unfilter_capability' => current_user_can( 'unfiltered_html' ) ? 'true' : 'false'
            ];

            $localize_array = array_merge( $localize_array, $admin_localize_array );
        }

        wpdev_essential_blocks()->assets->localize( 'blocks-localize', 'EssentialBlocksLocalize', $localize_array );
    }
}
