#!/bin/bash

# set -e

# if [ -d "/etc/letsencrypt/live/admin.involvehub.com" ]; then
#     mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
#     mv /etc/nginx/conf.d/default-ssl /etc/nginx/conf.d/default.conf
# fi

# exec "$@"

# if APP_DOMAIN env var is not set, use localhost
if [ -z "$APP_DOMAIN" ]; then
    export APP_DOMAIN=localhost
fi

envsubst '$APP_DOMAIN' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

if [ ! -d "/etc/letsencrypt/live/$APP_DOMAIN" ]; then
    echo "Generating SSL certificate for $APP_DOMAIN"
    # Generate (Dummy) SSL certificate
    mkdir -p /etc/letsencrypt/live/$APP_DOMAIN/
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/privkey.pem \
    -out /etc/nginx/certs/fullchain.pem \
    -subj "/C=US/ST=Oregon/L=Portland/O=Involvehub/OU=Org/CN=$APP_DOMAIN" > /dev/null 2>&1
    echo "SSL certificate for $APP_DOMAIN generated"
else
    echo "SSL certificate for $APP_DOMAIN already exists"
fi

chown -R www-data:www-data /etc/nginx/certs/

mkdir -p /tmp/acme_challenge/
touch /var/log/acme_challenge.log
touch /var/log/lets_encrypt.log
inotifywait -d -o /var/log/acme_challenge.log -r /tmp/acme_challenge/
inotifywait -d -o /var/log/lets_encrypt.log -r /etc/letsencrypt/live/$APP_DOMAIN/

# Start supervisord
/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf
