<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute(
	'overall'
);

return array_merge(
	array(
		'classMigrate'               => false,
		'headingAlign'               => 'center',
		'headingAlignTablet'         => 'center',
		'headingAlignMobile'         => 'center',
		'companyColor'               => '#888888',
		'descColor'                  => '#333',
		'authorColor'                => '#333',
		'nameFontSizeType'           => 'px',
		'nameFontSize'               => 20,
		'nameFontSizeTablet'         => '',
		'nameFontSizeMobile'         => '',
		'nameFontFamily'             => '',
		'nameFontWeight'             => 'Default',
		'nameFontStyle'              => '',
		'nameLineHeightType'         => 'em',
		'nameLineHeight'             => 2,
		'nameLineHeightTablet'       => '',
		'nameLineHeightMobile'       => '',
		'nameLoadGoogleFonts'        => false,
		'companyFontSizeType'        => 'px',
		'companyFontSize'            => '',
		'companyFontSizeTablet'      => '',
		'companyFontSizeMobile'      => '',
		'companyFontFamily'          => '',
		'companyFontWeight'          => '',
		'companyFontStyle'           => 'normal',
		'companyLineHeightType'      => 'em',
		'companyLineHeight'          => '',
		'companyLineHeightTablet'    => '',
		'companyLineHeightMobile'    => '',
		'companyLoadGoogleFonts'     => false,
		'descFontSizeType'           => 'px',
		'descFontSize'               => 18,
		'descFontSizeTablet'         => '',
		'descFontSizeMobile'         => '',
		'descFontFamily'             => '',
		'descFontWeight'             => '400',
		'descFontStyle'              => '',
		'descLineHeightType'         => 'em',
		'descLineHeight'             => 1.6,
		'descLineHeightTablet'       => '',
		'descLineHeightMobile'       => '',
		'descLoadGoogleFonts'        => false,
		'descSpace'                  => 20,
		'descSpaceTablet'            => '',
		'descSpaceMobile'            => '',
		'block_id'                   => '',
		'nameSpace'                  => 5,
		'nameSpaceMobile'            => '',
		'nameSpaceTablet'            => '',
		'imgVrPadding'               => 10,
		'imgHrPadding'               => 10,
		'imageWidth'                 => 60,
		'imageWidthTablet'           => '',
		'imageWidthMobile'           => '',
		'rowGap'                     => 10,
		'rowGapTablet'               => 10,
		'rowGapMobile'               => 10,
		'columnGap'                  => 10,
		'columnGapTablet'            => 10,
		'columnGapMobile'            => 10,
		'contentPadding'             => 5,
		'backgroundImage'            => '',
		'backgroundPosition'         => 'center-center',
		'backgroundSize'             => 'cover',
		'backgroundRepeat'           => 'no-repeat',
		'backgroundImageColor'       => '',
		'arrowColor'                 => '#333',
		'arrowDots'                  => 'arrowDots',
		'arrowBorderSize'            => 0,
		'arrowBorderRadius'          => 0,
		'columns'                    => 1,
		'autoplaySpeed'              => 2000,
		'autoplay'                   => true,
		'infiniteLoop'               => true,
		'pauseOnHover'               => true,
		'transitionSpeed'            => 500,
		'tcolumns'                   => 1,
		'mcolumns'                   => 1,
		'arrowSize'                  => 20,
		'test_item_count'            => 3,
		'imageWidthType'             => 'px',
		'arrowSizeType'              => 'px',
		'rowGapType'                 => 'px',
		'columnGapType'              => 'px',
		'descSpaceType'              => 'px',
		'nameSpaceType'              => 'px',
		'overlayType'                => 'color',
		'backgroundAttachment'       => '',
		'selectGradient'             => 'basic',
		'gradientValue'              => 'linear-gradient(90deg, rgb(6, 147, 227, 0.5) 0%, rgb(155, 81, 224, 0.5) 100%)',
		'descTransform'              => '',
		'descDecoration'             => '',
		'nameTransform'              => '',
		'nameDecoration'             => '',
		'companyTransform'           => '',
		'companyDecoration'          => '',
		'paddingUnit'                => 'px',
		'mobilePaddingUnit'          => 'px',
		'tabletPaddingUnit'          => 'px',
		'paddingTopTablet'           => '',
		'paddingRightTablet'         => '',
		'paddingBottomTablet'        => '',
		'paddingLeftTablet'          => '',
		'paddingTopMobile'           => '',
		'paddingRightMobile'         => '',
		'paddingBottomMobile'        => '',
		'paddingLeftMobile'          => '',
		'imgpaddingTopTablet'        => '',
		'imgpaddingRightTablet'      => '',
		'imgpaddingBottomTablet'     => '',
		'imgpaddingLeftTablet'       => '',
		'imgpaddingTopMobile'        => '',
		'imgpaddingRightMobile'      => '',
		'imgpaddingBottomMobile'     => '',
		'imgpaddingLeftMobile'       => '',
		'imgpaddingUnit'             => 'px',
		'imgmobilePaddingUnit'       => 'px',
		'imgtabletPaddingUnit'       => 'px',
		'backgroundType'             => 'none',
		'backgroundColor'            => '#eeeeee',
		'backgroundHoverColor'       => '',
		'gradientColor1'             => '#06558a',
		'gradientColor2'             => '#0063a1',
		'gradientType'               => 'linear',
		'gradientLocation1'          => 0,
		'gradientLocation2'          => 100,
		'gradientAngle'              => 0,
		'gradientPosition'           => 'center center',
		'equalHeight'                => false,
		'vAlignContent'              => 'flex-start',
		'nameLetterSpacing'          => '',
		'nameLetterSpacingTablet'    => '',
		'nameLetterSpacingMobile'    => '',
		'nameLetterSpacingType'      => 'px',
		'descLetterSpacing'          => '',
		'descLetterSpacingTablet'    => '',
		'descLetterSpacingMobile'    => '',
		'descLetterSpacingType'      => 'px',
		'companyLetterSpacing'       => '',
		'companyLetterSpacingTablet' => '',
		'companyLetterSpacingMobile' => '',
		'companyLetterSpacingType'   => 'px',
		'borderStyle'                => 'none',
		'borderWidth'                => 1,
		'borderRadius'               => '',
		'borderColor'                => '',
	),
	$border_attribute
);
