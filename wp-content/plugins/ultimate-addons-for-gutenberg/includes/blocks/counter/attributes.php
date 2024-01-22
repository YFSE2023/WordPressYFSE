<?php
/**
 * Attributes File.
 *
 * @since 2.1.0
 *
 * @package uagb
 */

$icon_wrap_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'iconWrap' );

return array_merge(
	array(
		'block_id'                   => '',
		'isFrontend'                 => true,
		'layout'                     => 'number',
		'align'                      => 'center',
		'alignTablet'                => '',
		'alignMobile'                => '',
		'startNumber'                => 0,
		'endNumber'                  => 80,
		'totalNumber'                => 100,
		'decimalPlaces'              => 0,
		'numberPrefix'               => '',
		'numberSuffix'               => '%',
		'animationDuration'          => 1500,
		'thousandSeparator'          => ',',
		// heading.
		'heading'                    => __( 'Add Your Title Here…', 'ultimate-addons-for-gutenberg' ),
		'headingTag'                 => '',
		'headingFontFamily'          => 'Default',
		'headingFontWeight'          => '',
		'headingFontStyle'           => 'normal',
		'headingTransform'           => '',
		'headingFontSize'            => '',
		'headingColor'               => '#4B4F58',
		'headingTransform'           => '',
		'headingDecoration'          => '',
		'headingFontSizeType'        => 'px',
		'headingFontSizeMobile'      => '',
		'headingFontSizeTablet'      => '',
		'headingLineHeight'          => 'em',
		'headingLineHeightType'      => 'em',
		'headingLineHeightMobile'    => '',
		'headingLineHeightTablet'    => '',
		'headingLetterSpacingType'   => 'px',
		'headingLetterSpacing'       => '',
		'headingLetterSpacingTablet' => '',
		'headingLetterSpacingMobile' => '',
		// Heading Margin.
		'headingTopMargin'           => '',
		'headingRightMargin'         => '',
		'headingLeftMargin'          => '',
		'headingBottomMargin'        => '',
		'headingTopMarginTablet'     => '',
		'headingRightMarginTablet'   => '',
		'headingLeftMarginTablet'    => '',
		'headingBottomMarginTablet'  => '',
		'headingTopMarginMobile'     => '',
		'headingRightMarginMobile'   => '',
		'headingLeftMarginMobile'    => '',
		'headingBottomMarginMobile'  => '',
		'headingMarginUnit'          => 'px',
		'headingMarginUnitTablet'    => 'px',
		'headingMarginUnitMobile'    => 'px',
		// Block Margin.
		'blockTopMargin'             => '',
		'blockRightMargin'           => '',
		'blockLeftMargin'            => '',
		'blockBottomMargin'          => '',
		'blockTopMarginTablet'       => '',
		'blockRightMarginTablet'     => '',
		'blockLeftMarginTablet'      => '',
		'blockBottomMarginTablet'    => '',
		'blockTopMarginMobile'       => '',
		'blockRightMarginMobile'     => '',
		'blockLeftMarginMobile'      => '',
		'blockBottomMarginMobile'    => '',
		'blockMarginUnit'            => 'px',
		'blockMarginUnitTablet'      => 'px',
		'blockMarginUnitMobile'      => 'px',
		// Block Padding.
		'blockTopPadding'            => '',
		'blockRightPadding'          => '',
		'blockLeftPadding'           => '',
		'blockBottomPadding'         => '',
		'blockTopPaddingTablet'      => '',
		'blockRightPaddingTablet'    => '',
		'blockLeftPaddingTablet'     => '',
		'blockBottomPaddingTablet'   => '',
		'blockTopPaddingMobile'      => '',
		'blockRightPaddingMobile'    => '',
		'blockLeftPaddingMobile'     => '',
		'blockBottomPaddingMobile'   => '',
		'blockPaddingUnit'           => 'px',
		'blockPaddingUnitTablet'     => 'px',
		'blockPaddingUnitMobile'     => 'px',
		// number.
		'numberColor'                => '',
		'numberFontFamily'           => '',
		'numberFontStyle'            => 'normal',
		'numberTransform'            => '',
		'numberDecoration'           => '',
		'numberFontSizeType'         => 'px',
		'numberLineHeightType'       => 'em',
		'numberFontSize'             => '',
		'numberFontWeight'           => '',
		'numberFontSizeTablet'       => '',
		'numberFontSizeMobile'       => '',
		'numberLineHeight'           => '',
		'numberLineHeightTablet'     => '',
		'numberLineHeightMobile'     => '',
		'numberTopMargin'            => '',
		'numberRightMargin'          => '',
		'numberLeftMargin'           => '',
		'numberBottomMargin'         => '',
		'numberTopMarginTablet'      => '',
		'numberRightMarginTablet'    => '',
		'numberLeftMarginTablet'     => '',
		'numberBottomMarginTablet'   => '',
		'numberTopMarginMobile'      => '',
		'numberRightMarginMobile'    => '',
		'numberLeftMarginMobile'     => '',
		'numberBottomMarginMobile'   => '',
		'numberMarginUnit'           => 'px',
		'numberMarginUnitTablet'     => 'px',
		'numberMarginUnitMobile'     => 'px',
		'numberLetterSpacingType'    => 'px',
		'numberLetterSpacing'        => '',
		'numberLetterSpacingTablet'  => '',
		'numberLetterSpacingMobile'  => '',
		// Prefix.
		'prefixRightDistance'        => 0,
		'prefixRightDistanceTablet'  => '',
		'prefixRightDistanceMobile'  => '',
		// Suffix.
		'suffixLeftDistance'         => 0,
		'suffixLeftDistanceTablet'   => '',
		'suffixLeftDistanceMobile'   => '',
		// circle.
		'circleSize'                 => 230,
		'circleStokeSize'            => 8,
		'circleForeground'           => '#007cba',
		'circleBackground'           => '#eaeaea',
		// bar.
		'barSize'                    => '',
		'barForeground'              => '#007cba',
		'barBackground'              => '#eaeaea',
		'barFlip'                    => false,
		// Box Shadow.
		'boxShadowColor'             => '#00000070',
		'boxShadowHOffset'           => 0,
		'boxShadowVOffset'           => 0,
		'boxShadowBlur'              => '',
		'boxShadowSpread'            => '',
		'boxShadowPosition'          => '',
		'boxShadowColorHover'        => '',
		'boxShadowHOffsetHover'      => 0,
		'boxShadowVOffsetHover'      => 0,
		'boxShadowBlurHover'         => '',
		'boxShadowSpreadHover'       => '',
		'boxShadowPositionHover'     => '',
		'showIcon'                   => true,
		// Icon and Image.
		'sourceType'                 => 'icon',
		'icon'                       => 'star',
		'iconColor'                  => '#4B4F58',
		'iconBackgroundColor'        => '',
		'iconHoverColor'             => '',
		'iconBackgroundHoverColor'   => '',
		'iconSize'                   => 30,
		'iconSizeTablet'             => '',
		'iconSizeMobile'             => '',
		'iconSizeType'               => 'px',
		'iconSizeTypeTablet'         => 'px',
		'iconSizeTypeMobile'         => 'px',
		'iconImgPosition'            => 'top',
		'imageWidthType'             => true,
		'imageWidth'                 => '',
		'imageWidthTablet'           => '',
		'imageWidthMobile'           => '',
		'imageWidthUnit'             => 'px',
		'imageWidthUnitTablet'       => 'px',
		'imageWidthUnitMobile'       => 'px',
		// Icon Padding.
		'iconTopPadding'             => '',
		'iconRightPadding'           => '',
		'iconLeftPadding'            => '',
		'iconBottomPadding'          => '',
		'iconTopPaddingTablet'       => '',
		'iconRightPaddingTablet'     => '',
		'iconLeftPaddingTablet'      => '',
		'iconBottomPaddingTablet'    => '',
		'iconTopPaddingMobile'       => '',
		'iconRightPaddingMobile'     => '',
		'iconLeftPaddingMobile'      => '',
		'iconBottomPaddingMobile'    => '',
		'iconPaddingUnit'            => 'px',
		'iconPaddingUnitTablet'      => 'px',
		'iconPaddingUnitMobile'      => 'px',
		'iconTopMargin'              => '',
		'iconRightMargin'            => '',
		'iconLeftMargin'             => '',
		'iconBottomMargin'           => '',
		'iconTopMarginTablet'        => '',
		'iconRightMarginTablet'      => '',
		'iconLeftMarginTablet'       => '',
		'iconBottomMarginTablet'     => '',
		'iconTopMarginMobile'        => '',
		'iconRightMarginMobile'      => '',
		'iconLeftMarginMobile'       => '',
		'iconBottomMarginMobile'     => '',
		'iconMarginUnit'             => 'px',
		'iconMarginUnitTablet'       => 'px',
		'iconMarginUnitMobile'       => 'px',
	),
	$icon_wrap_border_attribute
);
