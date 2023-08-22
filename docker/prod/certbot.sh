#!/bin/bash

_term() {
    kill -TERM "$child" 2>/dev/null
    exit 1
}

trap _term SIGTERM

echo "Trying to get certificate, attempt $i"
echo "Checking health of $APP_DOMAIN"
if wget -q "http://$APP_DOMAIN/.check-health/" > /dev/null; then
    echo "Trying to get certificate, attempt $i: success"
    certbot certonly --webroot -w /tmp/acme_challenge -d $APP_DOMAIN --text --agree-tos --email chome@codebranch.com --rsa-key-size 4096 --verbose --keep-until-expiring --preferred-challenges=http

    # Copy generated files to /etc/nginx/certs
    cp /etc/letsencrypt/live/$APP_DOMAIN/fullchain.pem /etc/nginx/certs/fullchain.pem
    cp /etc/letsencrypt/live/$APP_DOMAIN/privkey.pem /etc/nginx/certs/privkey.pem
    cp /etc/letsencrypt/live/$APP_DOMAIN/chain.pem /etc/nginx/certs/chain.pem
else
    echo "Trying to get certificate, attempt $i: failure"
    # send exit signal to supervisor
    kill -TERM "$child" 2>/dev/null
    exit 1
fi

rc=$?

# Delay to prevent supervisor from restarting too fast on failure
sleep 30

# Return with the exit code of the wrapped process
exit $rc
