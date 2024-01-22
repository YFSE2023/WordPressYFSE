<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3ce4b42d4553d2813f3c2fc3abece7bf
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPDeveloper\\BetterDocs\\' => 23,
        ),
        'P' => 
        array (
            'PriyoMukul\\WPNotice\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPDeveloper\\BetterDocs\\' => 
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
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3ce4b42d4553d2813f3c2fc3abece7bf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3ce4b42d4553d2813f3c2fc3abece7bf::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit3ce4b42d4553d2813f3c2fc3abece7bf::$classMap;

        }, null, ClassLoader::class);
    }
}
