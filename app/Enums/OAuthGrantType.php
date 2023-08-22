<?php

namespace App\Enums;

enum OAuthGrantType: string
{
    case AUTHORIZATION_CODE = 'authorization_code';
    case CLIENT_CREDENTIALS = 'client_credentials';
    case IMPLICIT = 'implicit';
    case PASSWORD = 'password';
    case PERSONAL_ACCESS = 'personal_access';
    case REFRESH_TOKEN = 'refresh_token';
}
