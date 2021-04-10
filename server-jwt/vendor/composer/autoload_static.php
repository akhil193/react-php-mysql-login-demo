<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitaa5ba14af89d66ea35d890a21977be57
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Tests\\' => 6,
        ),
        'R' => 
        array (
            'ReallySimpleJWT\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Tests\\' => 
        array (
            0 => __DIR__ . '/..' . '/rbdwllr/reallysimplejwt/tests',
        ),
        'ReallySimpleJWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/rbdwllr/reallysimplejwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitaa5ba14af89d66ea35d890a21977be57::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitaa5ba14af89d66ea35d890a21977be57::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitaa5ba14af89d66ea35d890a21977be57::$classMap;

        }, null, ClassLoader::class);
    }
}
