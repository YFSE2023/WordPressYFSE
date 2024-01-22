<?php
namespace WPDeveloper\BetterDocs\Editors\BlockEditor\Patterns;


class CategoryArchive extends BasePattern {

    public function register() {
        register_block_pattern(
            'betterdocs/doc-category',
            array(
                'title'         => __( 'Doc Category Archive', 'betterdocs' ),
                'description'   => _x( 'Doc Category Archive Layout', 'Block pattern description', 'betterdocs' ),
                'content'       => '<!-- wp:group {"style":{"color":{"background":"#f2f4f7"},"spacing":{"padding":{"bottom":"50px"}}},"layout":{"type":"default"}} -->
                <div
                    class="wp-block-group has-background"
                    style="background-color: #f2f4f7; padding-bottom: 50px"
                >
                    <!-- wp:group {"style":{"color":{"background":"#f7f7f7"}},"layout":{"backgroundColor":"#f2f4f7","inherit":true,"contentSize":"1400px","type":"constrained"}} -->
                    <div
                        class="wp-block-group has-background"
                        style="background-color: #f7f7f7"
                    >
                        <!-- wp:betterdocs/searchbox /-->
                    </div>
                    <!-- /wp:group -->

                    <!-- wp:group {"layout":{"backgroundColor":"#f2f4f7","inherit":true,"contentSize":"1400px","type":"constrained"}} -->
                    <div class="wp-block-group">
                        <!-- wp:columns {"align":"wide"} -->
                        <div class="wp-block-columns alignwide">
                            <!-- wp:column {"width":"33.33%"} -->
                            <div class="wp-block-column" style="flex-basis: 33.33%">
                                <!-- wp:betterdocs/sidebar /-->
                            </div>
                            <!-- /wp:column -->

                            <!-- wp:column {"width":"66.66%","style":{"spacing":{"padding":{"top":"30px","bottom":"30px","left":"30px","right":"30px"}}},"backgroundColor":"base"} -->
                            <div class="wp-block-column has-base-background-color has-background" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;flex-basis:66.66%">
                                <!-- wp:betterdocs/breadcrumb /-->
                                <!-- wp:betterdocs/archive-doc-list /-->
                            </div>
                            <!-- /wp:column -->
                        </div>
                        <!-- /wp:columns -->
                    </div>
                    <!-- /wp:group -->
                </div>
                <!-- /wp:group -->',
                'categories'    => array( 'betterdocs-catgory' ),
                'keywords'      => array( 'betterdocs', 'doc archive' ),
                'viewportWidth' => 800,
            )
        );
    }
}
