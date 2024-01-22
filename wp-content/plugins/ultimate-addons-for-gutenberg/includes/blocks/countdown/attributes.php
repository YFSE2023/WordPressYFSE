<?php
/**
 * Attributes File.
 *
 * @since 2.4.0
 *
 * @package uagb
 */

$box_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'box' );

$additional_attributes = apply_filters(
	'spectra_countdown_attributes',
	array()
);

return array_merge(
	array(
		'block_id'                     => '',
		'isFrontend'                   => true,
		'timerType'                    => 'date',
		'timerEndAction'               => 'zero',
		'redirectURL'                  => '',
		'endDateTime'                  => '2023-01-01T00:00:00Z',
		'displayEndDateTime'           => '2023-01-01T00:00:00Z',
		'showDays'                     => true,
		'showHours'                    => true,
		'showMinutes'                  => true,
		'showSeparator'                => true,
		'separatorType'                => ':',
		'showLabels'                   => true,
		'labelDays'                    => __( 'DAYS', 'ultimate-addons-for-gutenberg' ),
		'labelHours'                   => __( 'HOURS', 'ultimate-addons-for-gutenberg' ),
		'labelMinutes'                 => __( 'MINUTES', 'ultimate-addons-for-gutenberg' ),
		'labelSeconds'                 => __( 'SECONDS', 'ultimate-addons-for-gutenberg' ),
		// Digit.
		'digitLoadGoogleFonts'         => false,
		'digitColor'                   => '',
		'digitFontFamily'              => 'Default',
		'digitFontWeight'              => '',
		'digitFontStyle'               => 'normal',
		'digitTransform'               => '',
		'digitDecoration'              => '',
		'digitFontSizeType'            => 'px',
		'digitFontSizeTypeTablet'      => 'px',
		'digitFontSizeTypeMobile'      => 'px',
		'digitLineHeightType'          => 'em',
		'digitLetterSpacingType'       => 'em',
		'digitFontSize'                => '',
		'digitFontSizeTablet'          => '',
		'digitFontSizeMobile'          => '',
		'digitLineHeight'              => '',
		'digitLineHeightTablet'        => '',
		'digitLineHeightMobile'        => '',
		'digitLetterSpacing'           => '',
		'digitLetterSpacingTablet'     => '',
		'digitLetterSpacingMobile'     => '',
		// Label.
		'labelLoadGoogleFonts'         => false,
		'labelColor'                   => '',
		'labelFontFamily'              => 'Default',
		'labelFontWeight'              => '',
		'labelFontStyle'               => 'normal',
		'labelTransform'               => '',
		'labelDecoration'              => '',
		'labelFontSizeType'            => 'px',
		'labelFontSizeTypeTablet'      => 'px',
		'labelFontSizeTypeMobile'      => 'px',
		'labelLineHeightType'          => 'em',
		'labelLetterSpacingType'       => 'em',
		'labelFontSize'                => '',
		'labelFontSizeTablet'          => '',
		'labelFontSizeMobile'          => '',
		'labelLineHeight'              => '',
		'labelLineHeightTablet'        => '',
		'labelLineHeightMobile'        => '',
		'labelLetterSpacing'           => '',
		'labelLetterSpacingTablet'     => '',
		'labelLetterSpacingMobile'     => '',
		// Separator Styles.
		'separatorFontFamily'          => '',
		'separatorFontWeight'          => '',
		'separatorFontStyle'           => '',
		'separatorFontSize'            => '',
		'separatorColor'               => '',
		'separatorFontSizeType'        => 'px',
		'separatorFontSizeTypeTablet'  => 'px',
		'separatorFontSizeTypeMobile'  => 'px',
		'separatorFontSizeMobile'      => '',
		'separatorFontSizeTablet'      => '',
		'separatorLineHeight'          => '',
		'separatorLineHeightType'      => 'em',
		'separatorLineHeightMobile'    => '',
		'separatorLineHeightTablet'    => '',
		'separatorRightSpacing'        => 26,
		'separatorRightSpacingTablet'  => 14,
		'separatorRightSpacingMobile'  => 12,
		'separatorTopSpacing'          => '',
		'separatorTopSpacingTablet'    => '',
		'separatorTopSpacingMobile'    => '',
		// Block Margin.
		'blockTopMargin'               => '',
		'blockRightMargin'             => '',
		'blockLeftMargin'              => '',
		'blockBottomMargin'            => '',
		'blockTopMarginTablet'         => '',
		'blockRightMarginTablet'       => '',
		'blockLeftMarginTablet'        => '',
		'blockBottomMarginTablet'      => '',
		'blockTopMarginMobile'         => '',
		'blockRightMarginMobile'       => '',
		'blockLeftMarginMobile'        => '',
		'blockBottomMarginMobile'      => '',
		'blockMarginUnit'              => 'px',
		'blockMarginUnitTablet'        => 'px',
		'blockMarginUnitMobile'        => 'px',
		// Block Padding.
		'blockTopPadding'              => '',
		'blockRightPadding'            => '',
		'blockLeftPadding'             => '',
		'blockBottomPadding'           => '',
		'blockTopPaddingTablet'        => '',
		'blockRightPaddingTablet'      => '',
		'blockLeftPaddingTablet'       => '',
		'blockBottomPaddingTablet'     => '',
		'blockTopPaddingMobile'        => '',
		'blockRightPaddingMobile'      => '',
		'blockLeftPaddingMobile'       => '',
		'blockBottomPaddingMobile'     => '',
		'blockPaddingUnit'             => 'px',
		'blockPaddingUnitTablet'       => 'px',
		'blockPaddingUnitMobile'       => 'px',
		// Box Padding.
		'boxTopPadding'                => '',
		'boxRightPadding'              => '',
		'boxLeftPadding'               => '',
		'boxBottomPadding'             => '',
		'boxTopPaddingTablet'          => '',
		'boxRightPaddingTablet'        => '',
		'boxLeftPaddingTablet'         => '',
		'boxBottomPaddingTablet'       => '',
		'boxTopPaddingMobile'          => '',
		'boxRightPaddingMobile'        => '',
		'boxLeftPaddingMobile'         => '',
		'boxBottomPaddingMobile'       => '',
		'boxPaddingUnit'               => 'px',
		'boxPaddingUnitTablet'         => 'px',
		'boxPaddingUnitMobile'         => 'px',
		// Box Align.
		'align'                        => 'center',
		'alignTablet'                  => '',
		'alignMobile'                  => '',
		// Box Align.
		'boxAlign'                     => 'center',
		'boxAlignTablet'               => 'center',
		'boxAlignMobile'               => 'center',
		// Box Width.
		'boxWidth'                     => '',
		'boxWidthTablet'               => '',
		'boxWidthMobile'               => '',
		// Square Box.
		'isSquareBox'                  => true,
		// Box Spacing.
		'boxSpacing'                   => 38,
		'boxSpacingTablet'             => 20,
		'boxSpacingMobile'             => 18,
		// Internal Box Spacing - Gap between digits and labels.
		'internalBoxSpacing'           => '',
		'internalBoxSpacingTablet'     => '',
		'internalBoxSpacingMobile'     => '',
		// Box Flex.
		'boxFlex'                      => 'column',
		'boxFlexTablet'                => 'column',
		'boxFlexMobile'                => 'column',
		// Label vertical alignment.
		'labelVerticalAlignment'       => 'center',
		'labelVerticalAlignmentTablet' => '',
		'labelVerticalAlignmentMobile' => '',
		// Box Background.
		'boxBgType'                    => 'transparent',
		'boxBgColor'                   => '',
		// Box - Box Shadow.
		// Box Shadow.
		'useSeparateBoxShadows'        => true,
		'boxShadowColor'               => '#00000070',
		'boxShadowHOffset'             => 0,
		'boxShadowVOffset'             => 0,
		'boxShadowBlur'                => '',
		'boxShadowSpread'              => '',
		'boxShadowPosition'            => '',
		'boxShadowColorHover'          => '',
		'boxShadowHOffsetHover'        => 0,
		'boxShadowVOffsetHover'        => 0,
		'boxShadowBlurHover'           => '',
		'boxShadowSpreadHover'         => '',
		'boxShadowPositionHover'       => '',
		// For Global Block Styles.
		'globalBlockStyleName'         => '',
		'globalBlockStyleId'           => '',
	),
	$additional_attributes,
	$box_border_attribute,
	array(
		'boxBorderStyle' => 'default',
	)
);
