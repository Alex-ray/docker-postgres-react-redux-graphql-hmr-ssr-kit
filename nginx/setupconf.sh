#!/bin/bash
cd /etc/nginx
rm nginx.conf
if ls ssl/*.crt &> /dev/null; then
    mv nginx_ssl.conf nginx.conf
    CRT=$(ls ssl/*.crt | head -n 1)
    KEY=$(ls ssl/*.key | head -n 1)
    echo "using ssl, key=${KEY} crt=${CRT}"
    sed -i "s#ssl/server.crt#$CRT#g" /etc/nginx/nginx.conf
    sed -i "s#ssl/server.key#$KEY#g" /etc/nginx/nginx.conf
else
    echo "not using ssl"
    mv /etc/nginx/nginx_nossl.conf /etc/nginx/nginx.conf
fi