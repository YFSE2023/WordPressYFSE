<?php

namespace Automattic\WooCommerce\StoreApi\Routes\V1\AI;

use Automattic\WooCommerce\Blocks\Patterns\ProductUpdater;
use Automattic\WooCommerce\StoreApi\Routes\V1\AbstractRoute;

/**
 * Product class.
 *
 * @internal
 */
class Product extends AbstractRoute {
	/**
	 * The route identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'ai/product';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const SCHEMA_TYPE = 'ai/product';

	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/ai/product';
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
					'index'                => [
						'description' => __( 'The business description for a given store.', 'woocommerce' ),
						'type'        => 'integer',
					],
					'products_information' => [
						'description' => __( 'Data generated by AI for updating dummy products.', 'woocommerce' ),
						'type'        => 'object',
					],
				],
			],
			'schema'      => [ $this->schema, 'get_public_item_schema' ],
			'allow_batch' => [ 'v1' => true ],
		];
	}

	/**
	 * Update product with the content and image powered by AI.
	 *
	 * @param  \WP_REST_Request $request Request object.
	 *
	 * @return bool|string|\WP_Error|\WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {
		$product_updater = new ProductUpdater();
		$dummy_products  = $product_updater->fetch_dummy_products_to_update();

		if ( empty( $dummy_products ) ) {
			return rest_ensure_response(
				array(
					'ai_content_generated' => true,
				)
			);
		}

		$index = $request['index'];
		if ( ! is_numeric( $index ) ) {
			return rest_ensure_response(
				array(
					'ai_content_generated' => false,
				)
			);
		}

		$products_information = $request['products_information'] ?? array();

		if ( ! isset( $dummy_products[ $index ] ) ) {
			return rest_ensure_response(
				array(
					'ai_content_generated' => false,
				)
			);
		}

		$product_updater->update_product_content( $dummy_products[ $index ], $products_information );

		return rest_ensure_response(
			array(
				'ai_content_generated' => true,
			)
		);
	}

}
