<?php

// This file was generated by running "composer dump-env prod"

return array (
  'APP_ENV' => 'prod',
  'APP_SECRET' => '3b8162ea6cb1513e28659a70fc50ffdb',
  'DATABASE_URL' => 'mysql://root:password@127.0.0.1:3306/quantic_staking?serverVersion=mariadb-10.2.12&charset=utf8mb4',
  'CORS_ALLOW_ORIGIN' => '^https?://(localhost|127\\.0\\.0\\.1)(:[0-9]+)?$',
  'JWT_SECRET_KEY' => '%kernel.project_dir%/config/jwt/private.pem',
  'JWT_PUBLIC_KEY' => '%kernel.project_dir%/config/jwt/public.pem',
  'JWT_PASSPHRASE' => '37367d41a81f1ca17b87528dbbcad243',
);
