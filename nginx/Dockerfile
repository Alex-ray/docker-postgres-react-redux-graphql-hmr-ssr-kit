FROM nginx:1.9

ADD ./nginx/ssl /etc/nginx/ssl

ADD ./nginx/nginx_nossl.conf /etc/nginx/
ADD ./nginx/nginx_ssl.conf /etc/nginx/
ADD ./frontend/dist /static
ADD ./nginx/setupconf.sh .
RUN ./setupconf.sh