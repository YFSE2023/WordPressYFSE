<?php
/**
 * Specific note template.
 *
 * @since 1.8.4
 *
 * @var string $content
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="wpforms-specific-note-wrap">
	<div class="wpforms-specific-note-lightbulb">
		<svg viewBox="0 0 14 20">
			<path d="M3.75 17.97c0 .12 0 .23.08.35l.97 1.4c.12.2.32.28.51.28H8.4c.2 0 .39-.08.5-.27l.98-1.41c.04-.12.08-.23.08-.35v-1.72H3.75v1.72Zm3.13-5.47c.66 0 1.25-.55 1.25-1.25 0-.66-.6-1.25-1.26-1.25-.7 0-1.25.59-1.25 1.25 0 .7.55 1.25 1.25 1.25Zm0-12.5A6.83 6.83 0 0 0 0 6.88c0 1.75.63 3.32 1.68 4.53.66.74 1.68 2.3 2.03 3.59H5.6c0-.16 0-.35-.08-.55-.2-.7-.86-2.5-2.42-4.25a5.19 5.19 0 0 1-1.21-3.32c-.04-2.86 2.3-5 5-5 2.73 0 5 2.26 5 5 0 1.2-.47 2.38-1.26 3.32a11.72 11.72 0 0 0-2.42 4.25c-.07.2-.07.35-.07.55H10a10.56 10.56 0 0 1 2.03-3.6A6.85 6.85 0 0 0 6.88 0Zm-.4 8.75h.75c.3 0 .58-.23.62-.55l.5-3.75a.66.66 0 0 0-.62-.7H5.98a.66.66 0 0 0-.63.7l.5 3.75c.05.32.32.55.63.55Z"/>
		</svg>
	</div>

	<div class="wpforms-specific-note-content">
		<?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
</div>
