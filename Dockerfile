FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY . .
VOLUME /usr/local/apache2/htdocs/storage
