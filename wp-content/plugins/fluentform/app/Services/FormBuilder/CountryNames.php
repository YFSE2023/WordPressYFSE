<?php
/**
 * Countries
 *
 * Returns an array of countries and codes.
 *
 * @author      WooThemes
 *
 * @category    i18n
 * @package     fluentform/i18n
 *
 * @version     2.5.0
 */
if (! defined('ABSPATH')) {
    exit;
}

$country_names = [
    'AF' => __('Afghanistan', 'fluentform'),
    'AX' => __('Aland Islands', 'fluentform'),
    'AL' => __('Albania', 'fluentform'),
    'DZ' => __('Algeria', 'fluentform'),
    'AS' => __('American Samoa', 'fluentform'),
    'AD' => __('Andorra', 'fluentform'),
    'AO' => __('Angola', 'fluentform'),
    'AI' => __('Anguilla', 'fluentform'),
    'AQ' => __('Antarctica', 'fluentform'),
    'AG' => __('Antigua and Barbuda', 'fluentform'),
    'AR' => __('Argentina', 'fluentform'),
    'AM' => __('Armenia', 'fluentform'),
    'AW' => __('Aruba', 'fluentform'),
    'AU' => __('Australia', 'fluentform'),
    'AT' => __('Austria', 'fluentform'),
    'AZ' => __('Azerbaijan', 'fluentform'),
    'BS' => __('Bahamas', 'fluentform'),
    'BH' => __('Bahrain', 'fluentform'),
    'BD' => __('Bangladesh', 'fluentform'),
    'BB' => __('Barbados', 'fluentform'),
    'BY' => __('Belarus', 'fluentform'),
    'BE' => __('Belgium', 'fluentform'),
    'PW' => __('Belau', 'fluentform'),
    'BZ' => __('Belize', 'fluentform'),
    'BJ' => __('Benin', 'fluentform'),
    'BM' => __('Bermuda', 'fluentform'),
    'BT' => __('Bhutan', 'fluentform'),
    'BO' => __('Bolivia', 'fluentform'),
    'BQ' => __('Bonaire, Saint Eustatius and Saba', 'fluentform'),
    'BA' => __('Bosnia and Herzegovina', 'fluentform'),
    'BW' => __('Botswana', 'fluentform'),
    'BV' => __('Bouvet Island', 'fluentform'),
    'BR' => __('Brazil', 'fluentform'),
    'IO' => __('British Indian Ocean Territory', 'fluentform'),
    'VG' => __('British Virgin Islands', 'fluentform'),
    'BN' => __('Brunei', 'fluentform'),
    'BG' => __('Bulgaria', 'fluentform'),
    'BF' => __('Burkina Faso', 'fluentform'),
    'BI' => __('Burundi', 'fluentform'),
    'KH' => __('Cambodia', 'fluentform'),
    'CM' => __('Cameroon', 'fluentform'),
    'CA' => __('Canada', 'fluentform'),
    'CV' => __('Cape Verde', 'fluentform'),
    'KY' => __('Cayman Islands', 'fluentform'),
    'CF' => __('Central African Republic', 'fluentform'),
    'TD' => __('Chad', 'fluentform'),
    'CL' => __('Chile', 'fluentform'),
    'CN' => __('China', 'fluentform'),
    'CX' => __('Christmas Island', 'fluentform'),
    'CC' => __('Cocos (Keeling) Islands', 'fluentform'),
    'CO' => __('Colombia', 'fluentform'),
    'KM' => __('Comoros', 'fluentform'),
    'CG' => __('Republic of the Congo (Brazzaville)', 'fluentform'),
    'CD' => __('Democratic Republic of the Congo (Kinshasa)', 'fluentform'),
    'CK' => __('Cook Islands', 'fluentform'),
    'CR' => __('Costa Rica', 'fluentform'),
    'HR' => __('Croatia', 'fluentform'),
    'CU' => __('Cuba', 'fluentform'),
    'CW' => __('Cura&ccedil;ao', 'fluentform'),
    'CY' => __('Cyprus', 'fluentform'),
    'CZ' => __('Czech Republic', 'fluentform'),
    'DK' => __('Denmark', 'fluentform'),
    'DJ' => __('Djibouti', 'fluentform'),
    'DM' => __('Dominica', 'fluentform'),
    'DO' => __('Dominican Republic', 'fluentform'),
    'EC' => __('Ecuador', 'fluentform'),
    'EG' => __('Egypt', 'fluentform'),
    'SV' => __('El Salvador', 'fluentform'),
    'GQ' => __('Equatorial Guinea', 'fluentform'),
    'ER' => __('Eritrea', 'fluentform'),
    'EE' => __('Estonia', 'fluentform'),
    'ET' => __('Ethiopia', 'fluentform'),
    'FK' => __('Falkland Islands', 'fluentform'),
    'FO' => __('Faroe Islands', 'fluentform'),
    'FJ' => __('Fiji', 'fluentform'),
    'FI' => __('Finland', 'fluentform'),
    'FR' => __('France', 'fluentform'),
    'GF' => __('French Guiana', 'fluentform'),
    'PF' => __('French Polynesia', 'fluentform'),
    'TF' => __('French Southern Territories', 'fluentform'),
    'GA' => __('Gabon', 'fluentform'),
    'GM' => __('Gambia', 'fluentform'),
    'GE' => __('Georgia', 'fluentform'),
    'DE' => __('Germany', 'fluentform'),
    'GH' => __('Ghana', 'fluentform'),
    'GI' => __('Gibraltar', 'fluentform'),
    'GR' => __('Greece', 'fluentform'),
    'GL' => __('Greenland', 'fluentform'),
    'GD' => __('Grenada', 'fluentform'),
    'GP' => __('Guadeloupe', 'fluentform'),
    'GU' => __('Guam', 'fluentform'),
    'GT' => __('Guatemala', 'fluentform'),
    'GG' => __('Guernsey', 'fluentform'),
    'GN' => __('Guinea', 'fluentform'),
    'GW' => __('Guinea-Bissau', 'fluentform'),
    'GY' => __('Guyana', 'fluentform'),
    'HT' => __('Haiti', 'fluentform'),
    'HM' => __('Heard Island and McDonald Islands', 'fluentform'),
    'HN' => __('Honduras', 'fluentform'),
    'HK' => __('Hong Kong', 'fluentform'),
    'HU' => __('Hungary', 'fluentform'),
    'IS' => __('Iceland', 'fluentform'),
    'IN' => __('India', 'fluentform'),
    'ID' => __('Indonesia', 'fluentform'),
    'IR' => __('Iran', 'fluentform'),
    'IQ' => __('Iraq', 'fluentform'),
    'IE' => __('Ireland', 'fluentform'),
    'IM' => __('Isle of Man', 'fluentform'),
    'IL' => __('Israel', 'fluentform'),
    'IT' => __('Italy', 'fluentform'),
    'CI' => __('Ivory Coast', 'fluentform'),
    'JM' => __('Jamaica', 'fluentform'),
    'JP' => __('Japan', 'fluentform'),
    'JE' => __('Jersey', 'fluentform'),
    'JO' => __('Jordan', 'fluentform'),
    'KZ' => __('Kazakhstan', 'fluentform'),
    'KE' => __('Kenya', 'fluentform'),
    'KI' => __('Kiribati', 'fluentform'),
    'XK' => __('Kosovo', 'fluentform'),
    'KW' => __('Kuwait', 'fluentform'),
    'KG' => __('Kyrgyzstan', 'fluentform'),
    'LA' => __('Laos', 'fluentform'),
    'LV' => __('Latvia', 'fluentform'),
    'LB' => __('Lebanon', 'fluentform'),
    'LS' => __('Lesotho', 'fluentform'),
    'LR' => __('Liberia', 'fluentform'),
    'LY' => __('Libya', 'fluentform'),
    'LI' => __('Liechtenstein', 'fluentform'),
    'LT' => __('Lithuania', 'fluentform'),
    'LU' => __('Luxembourg', 'fluentform'),
    'MO' => __('Macao S.A.R., China', 'fluentform'),
    'MK' => __('Macedonia', 'fluentform'),
    'MG' => __('Madagascar', 'fluentform'),
    'MW' => __('Malawi', 'fluentform'),
    'MY' => __('Malaysia', 'fluentform'),
    'MV' => __('Maldives', 'fluentform'),
    'ML' => __('Mali', 'fluentform'),
    'MT' => __('Malta', 'fluentform'),
    'MH' => __('Marshall Islands', 'fluentform'),
    'MQ' => __('Martinique', 'fluentform'),
    'MR' => __('Mauritania', 'fluentform'),
    'MU' => __('Mauritius', 'fluentform'),
    'YT' => __('Mayotte', 'fluentform'),
    'MX' => __('Mexico', 'fluentform'),
    'FM' => __('Micronesia', 'fluentform'),
    'MD' => __('Moldova', 'fluentform'),
    'MC' => __('Monaco', 'fluentform'),
    'MN' => __('Mongolia', 'fluentform'),
    'ME' => __('Montenegro', 'fluentform'),
    'MS' => __('Montserrat', 'fluentform'),
    'MA' => __('Morocco', 'fluentform'),
    'MZ' => __('Mozambique', 'fluentform'),
    'MM' => __('Myanmar', 'fluentform'),
    'NA' => __('Namibia', 'fluentform'),
    'NR' => __('Nauru', 'fluentform'),
    'NP' => __('Nepal', 'fluentform'),
    'NL' => __('Netherlands', 'fluentform'),
    'NC' => __('New Caledonia', 'fluentform'),
    'NZ' => __('New Zealand', 'fluentform'),
    'NI' => __('Nicaragua', 'fluentform'),
    'NE' => __('Niger', 'fluentform'),
    'NG' => __('Nigeria', 'fluentform'),
    'NU' => __('Niue', 'fluentform'),
    'NF' => __('Norfolk Island', 'fluentform'),
    'MP' => __('Northern Mariana Islands', 'fluentform'),
    'KP' => __('North Korea', 'fluentform'),
    'NO' => __('Norway', 'fluentform'),
    'OM' => __('Oman', 'fluentform'),
    'PK' => __('Pakistan', 'fluentform'),
    'PS' => __('Palestinian Territory', 'fluentform'),
    'PA' => __('Panama', 'fluentform'),
    'PG' => __('Papua New Guinea', 'fluentform'),
    'PY' => __('Paraguay', 'fluentform'),
    'PE' => __('Peru', 'fluentform'),
    'PH' => __('Philippines', 'fluentform'),
    'PN' => __('Pitcairn', 'fluentform'),
    'PL' => __('Poland', 'fluentform'),
    'PT' => __('Portugal', 'fluentform'),
    'PR' => __('Puerto Rico', 'fluentform'),
    'QA' => __('Qatar', 'fluentform'),
    'RE' => __('Reunion', 'fluentform'),
    'RO' => __('Romania', 'fluentform'),
    'RU' => __('Russia', 'fluentform'),
    'RW' => __('Rwanda', 'fluentform'),
    'BL' => __('Saint Barth&eacute;lemy', 'fluentform'),
    'SH' => __('Saint Helena', 'fluentform'),
    'KN' => __('Saint Kitts and Nevis', 'fluentform'),
    'LC' => __('Saint Lucia', 'fluentform'),
    'MF' => __('Saint Martin (French part)', 'fluentform'),
    'SX' => __('Saint Martin (Dutch part)', 'fluentform'),
    'PM' => __('Saint Pierre and Miquelon', 'fluentform'),
    'VC' => __('Saint Vincent and the Grenadines', 'fluentform'),
    'SM' => __('San Marino', 'fluentform'),
    'ST' => __('Sao Tome and Principe', 'fluentform'),
    'SA' => __('Saudi Arabia', 'fluentform'),
    'SN' => __('Senegal', 'fluentform'),
    'RS' => __('Serbia', 'fluentform'),
    'SC' => __('Seychelles', 'fluentform'),
    'SL' => __('Sierra Leone', 'fluentform'),
    'SG' => __('Singapore', 'fluentform'),
    'SK' => __('Slovakia', 'fluentform'),
    'SI' => __('Slovenia', 'fluentform'),
    'SB' => __('Solomon Islands', 'fluentform'),
    'SO' => __('Somalia', 'fluentform'),
    'ZA' => __('South Africa', 'fluentform'),
    'GS' => __('South Georgia/Sandwich Islands', 'fluentform'),
    'KR' => __('South Korea', 'fluentform'),
    'SS' => __('South Sudan', 'fluentform'),
    'ES' => __('Spain', 'fluentform'),
    'LK' => __('Sri Lanka', 'fluentform'),
    'SD' => __('Sudan', 'fluentform'),
    'SR' => __('Suriname', 'fluentform'),
    'SJ' => __('Svalbard and Jan Mayen', 'fluentform'),
    'SZ' => __('Swaziland', 'fluentform'),
    'SE' => __('Sweden', 'fluentform'),
    'CH' => __('Switzerland', 'fluentform'),
    'SY' => __('Syria', 'fluentform'),
    'TW' => __('Taiwan', 'fluentform'),
    'TJ' => __('Tajikistan', 'fluentform'),
    'TZ' => __('Tanzania', 'fluentform'),
    'TH' => __('Thailand', 'fluentform'),
    'TL' => __('Timor-Leste', 'fluentform'),
    'TG' => __('Togo', 'fluentform'),
    'TK' => __('Tokelau', 'fluentform'),
    'TO' => __('Tonga', 'fluentform'),
    'TT' => __('Trinidad and Tobago', 'fluentform'),
    'TN' => __('Tunisia', 'fluentform'),
    'TR' => __('Turkey', 'fluentform'),
    'TM' => __('Turkmenistan', 'fluentform'),
    'TC' => __('Turks and Caicos Islands', 'fluentform'),
    'TV' => __('Tuvalu', 'fluentform'),
    'UG' => __('Uganda', 'fluentform'),
    'UA' => __('Ukraine', 'fluentform'),
    'AE' => __('United Arab Emirates', 'fluentform'),
    'GB' => __('United Kingdom (UK)', 'fluentform'),
    'US' => __('United States (US)', 'fluentform'),
    'UM' => __('United States (US) Minor Outlying Islands', 'fluentform'),
    'VI' => __('United States (US) Virgin Islands', 'fluentform'),
    'UY' => __('Uruguay', 'fluentform'),
    'UZ' => __('Uzbekistan', 'fluentform'),
    'VU' => __('Vanuatu', 'fluentform'),
    'VA' => __('Vatican', 'fluentform'),
    'VE' => __('Venezuela', 'fluentform'),
    'VN' => __('Vietnam', 'fluentform'),
    'WF' => __('Wallis and Futuna', 'fluentform'),
    'EH' => __('Western Sahara', 'fluentform'),
    'WS' => __('Samoa', 'fluentform'),
    'YE' => __('Yemen', 'fluentform'),
    'ZM' => __('Zambia', 'fluentform'),
    'ZW' => __('Zimbabwe', 'fluentform'),
];

$country_names = apply_filters_deprecated(
    'fluent_editor_countries',
    [
        $country_names
    ],
    FLUENTFORM_FRAMEWORK_UPGRADE,
    'fluentform/editor_countries',
    'Use fluentform/editor_countries instead of fluent_editor_countries.'
);

$country_names = apply_filters('fluentform/editor_countries', $country_names);

asort($country_names);

return $country_names;
