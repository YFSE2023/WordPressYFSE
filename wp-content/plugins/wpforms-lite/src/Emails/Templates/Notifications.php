<?php

namespace WPForms\Emails\Templates;

use WPForms\Emails\Helpers;

/**
 * Class Notifications.
 *
 * This is a wrapper for the General template to extend it.
 * This is the default template for all notifications.
 *
 * @since 1.8.5
 */
class Notifications extends General {

	/**
	 * Whether is preview or not.
	 *
	 * @since 1.8.5
	 *
	 * @var bool
	 */
	protected $is_preview = false;

	/**
	 * Initialize class.
	 * In case the class instance meant for preview, we need to set the plain text property to false.
	 *
	 * @since 1.8.5
	 * @since 1.8.5.2 New param was added, $current_template
	 *
	 * @param string $message          Optional. Message.
	 * @param bool   $is_preview       Optional. Whether is preview or not. Default false.
	 * @param string $current_template Optional. The name of the email template to evaluate.
	 */
	public function __construct( $message = '', $is_preview = false, $current_template = '' ) {

		parent::__construct( $message );

		$this->is_preview = $is_preview;
		$this->plain_text = ! $is_preview && Helpers::is_plain_text_template( $current_template );

		// Call the parent method after to set the correct header properties.
		$this->set_initial_args();
	}

	/**
	 * Set template message.
	 *
	 * @since 1.8.5
	 *
	 * @param string $message Message.
	 */
	public function set_field( $message ) {

		// Leave if not a string.
		if ( ! is_string( $message ) ) {
			return;
		}

		// Set the template message.
		$this->set_args(
			[
				'body' => [
					'message' => $message,
				],
			]
		);
	}

	/**
	 * Get field template.
	 *
	 * @since 1.8.5
	 *
	 * @return string
	 */
	public function get_field_template() {

		return $this->get_content_part( 'field' );
	}
}
