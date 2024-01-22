<?php

namespace Automattic\WooCommerce\StoreApi\Routes\V1\AI;

use Automattic\WooCommerce\Blocks\AI\Connection;
use Automattic\WooCommerce\Blocks\Patterns\ProductUpdater;
use Automattic\WooCommerce\StoreApi\Routes\V1\AbstractRoute;

/**
 * Products class.
 *
 * @internal
 */
class Products extends AbstractRoute {
	/**
	 * The route identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'ai/products';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const SCHEMA_TYPE = 'ai/products';

	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/ai/products';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => [ Middleware::class, 'is_authorized' ],
				'args'                => [
					'business_description' => [
						'description' => __( 'The business description for a given store.', 'woocommerce' ),
						'type'        => 'string',
					],
					'images'               => [
						'description' => __( 'The images for a given store.', 'woocommerce' ),
						'type'        => 'object',
					],
				],
			],
			'schema'      => [ $this->schema, 'get_public_item_schema' ],
			'allow_batch' => [ 'v1' => true ],
		];
	}

	/**
	 * Generate the content for the products.
	 *
	 * @param  \WP_REST_Request $request Request object.
	 *
	 * @return bool|string|\WP_Error|\WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {
		$allow_ai_connection = get_option( 'woocommerce_blocks_allow_ai_connection' );

		if ( ! $allow_ai_connection ) {
			return rest_ensure_response(
				$this->error_to_response(
					new \WP_Error(
						'ai_connection_not_allowed',
						__( 'AI content generation is not allowed on this store. Update your store settings if you wish to enable this feature.', 'woocommerce' )
					)
				)
			);
		}

		$business_description = sanitize_text_field( wp_unslash( $request['business_description'] ) );

		if ( empty( $business_description ) ) {
			$business_description = get_option( 'woo_ai_describe_store_description' );
		}

		$last_business_description = get_option( 'last_business_description_with_ai_content_generated' );

		if ( $last_business_description === $business_description ) {
			return rest_ensure_response(
				$this->prepare_item_for_response(
					[
						'ai_content_generated' => true,
						'product_content'      => null,
					],
					$request
				)
			);
		}

		$ai_connection = new Connection();

		$site_id = $ai_connection->get_site_id();

		if ( is_wp_error( $site_id ) ) {
			return $this->error_to_response( $site_id );
		}

		$token = $ai_connection->get_jwt_token( $site_id );

		if ( is_wp_error( $token ) ) {
			return $this->error_to_response( $token );
		}

		$images = $request['images'];

		$populate_products = ( new ProductUpdater() )->generate_content( $ai_connection, $token, $images, $business_description );

		if ( is_wp_error( $populate_products ) ) {
			return $this->error_to_response( $populate_products );
		}

		if ( ! isset( $populate_products['product_content'] ) ) {
			return $this->error_to_response( new \WP_Error( 'product_content_not_found', __( 'Product content not found.', 'woocommerce' ) ) );
		}

		$product_content = $populate_products['product_content'];

		$item = array(
			'ai_content_generated' => true,
			'product_content'      => $product_content,
		);

		return rest_ensure_response( $item );
	}
}
