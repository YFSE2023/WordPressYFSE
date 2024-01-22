<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6f91d543d556a22cb92b9ae8545b7c29
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Templately\\' => 11,
        ),
        'P' => 
        array (
            'PriyoMukul\\WPNotice\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Templately\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
        'PriyoMukul\\WPNotice\\' => 
        array (
            0 => __DIR__ . '/..' . '/priyomukul/wp-notice/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'PriyoMukul\\WPNotice\\Dismiss' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Dismiss.php',
        'PriyoMukul\\WPNotice\\Notice' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Notice.php',
        'PriyoMukul\\WPNotice\\Notices' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Notices.php',
        'PriyoMukul\\WPNotice\\Utils\\Base' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Base.php',
        'PriyoMukul\\WPNotice\\Utils\\CacheBank' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/CacheBank.php',
        'PriyoMukul\\WPNotice\\Utils\\Helper' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Helper.php',
        'PriyoMukul\\WPNotice\\Utils\\NoticeRemover' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/NoticeRemover.php',
        'PriyoMukul\\WPNotice\\Utils\\Storage' => __DIR__ . '/..' . '/priyomukul/wp-notice/src/Utils/Storage.php',
        'Templately\\API\\API' => __DIR__ . '/../..' . '/includes/API/API.php',
        'Templately\\API\\Categories' => __DIR__ . '/../..' . '/includes/API/Categories.php',
        'Templately\\API\\Dependencies' => __DIR__ . '/../..' . '/includes/API/Dependencies.php',
        'Templately\\API\\Import' => __DIR__ . '/../..' . '/includes/API/Import.php',
        'Templately\\API\\Items' => __DIR__ . '/../..' . '/includes/API/Items.php',
        'Templately\\API\\Login' => __DIR__ . '/../..' . '/includes/API/Login.php',
        'Templately\\API\\MyClouds' => __DIR__ . '/../..' . '/includes/API/MyClouds.php',
        'Templately\\API\\Profile' => __DIR__ . '/../..' . '/includes/API/Profile.php',
        'Templately\\API\\SavedTemplates' => __DIR__ . '/../..' . '/includes/API/SavedTemplates.php',
        'Templately\\API\\SignUp' => __DIR__ . '/../..' . '/includes/API/SignUp.php',
        'Templately\\API\\Tags' => __DIR__ . '/../..' . '/includes/API/Tags.php',
        'Templately\\API\\TemplateTypes' => __DIR__ . '/../..' . '/includes/API/TemplateTypes.php',
        'Templately\\API\\WorkSpaces' => __DIR__ . '/../..' . '/includes/API/WorkSpaces.php',
        'Templately\\Core\\Admin' => __DIR__ . '/../..' . '/includes/Core/Admin.php',
        'Templately\\Core\\Importer\\Elementor' => __DIR__ . '/../..' . '/includes/Core/Importer/Elementor.php',
        'Templately\\Core\\Maintenance' => __DIR__ . '/../..' . '/includes/Core/Maintenance.php',
        'Templately\\Core\\Migrator' => __DIR__ . '/../..' . '/includes/Core/Migrator.php',
        'Templately\\Core\\Module' => __DIR__ . '/../..' . '/includes/Core/Module.php',
        'Templately\\Core\\Platform' => __DIR__ . '/../..' . '/includes/Core/Platform.php',
        'Templately\\Core\\Platform\\Elementor' => __DIR__ . '/../..' . '/includes/Core/Platform/Elementor.php',
        'Templately\\Core\\Platform\\Gutenberg' => __DIR__ . '/../..' . '/includes/Core/Platform/Gutenberg.php',
        'Templately\\Plugin' => __DIR__ . '/../..' . '/includes/Plugin.php',
        'Templately\\Utils\\Base' => __DIR__ . '/../..' . '/includes/Utils/Base.php',
        'Templately\\Utils\\Database' => __DIR__ . '/../..' . '/includes/Utils/Database.php',
        'Templately\\Utils\\Enqueue' => __DIR__ . '/../..' . '/includes/Utils/Enqueue.php',
        'Templately\\Utils\\Helper' => __DIR__ . '/../..' . '/includes/Utils/Helper.php',
        'Templately\\Utils\\Http' => __DIR__ . '/../..' . '/includes/Utils/Http.php',
        'Templately\\Utils\\Installer' => __DIR__ . '/../..' . '/includes/Utils/Installer.php',
        'Templately\\Utils\\Options' => __DIR__ . '/../..' . '/includes/Utils/Options.php',
        'Templately\\Utils\\Plan' => __DIR__ . '/../..' . '/includes/Utils/Plan.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6f91d543d556a22cb92b9ae8545b7c29::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6f91d543d556a22cb92b9ae8545b7c29::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6f91d543d556a22cb92b9ae8545b7c29::$classMap;

        }, null, ClassLoader::class);
    }
}
