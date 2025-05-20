FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    libffi-dev \
    libzip4 \
    zlib1g-dev \
    libbrotli-dev \
    libnss3-tools \
    libnghttp2-dev \
    libmariadb-dev-compat \
    libmariadb-dev \
    libjson-c-dev \
    build-essential \
    libcurl4-openssl-dev \
    libssl-dev \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libxml2-dev \
    libzip-dev \
    git \
    && docker-php-ext-configure gd --with-jpeg --with-webp

# Install extensions php
RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    bcmath \
    ctype \
    fileinfo \
    mysqli \
    sockets \
    ffi \
    zip \
    gd \
    pcntl

# Cài đặt Swoole với tất cả các tùy chọn
RUN git clone https://github.com/swoole/swoole-src.git && \
    cd swoole-src && git checkout 5.1.x\
    && phpize \
    && ./configure --enable-coroutine --enable-openssl --enable-http2 --enable-sockets --enable-mqtt --enable-redis --enable-swoole-json --enable-multi-thread --enable-swoole-http-server \
    && make && make install \
    && docker-php-ext-enable swoole \
    && cd .. && rm -rf swoole-src

# COPY ./conf/ /etc/nginx/sites-available/

RUN pecl install inotify

RUN docker-php-ext-enable \
    pdo \
    pdo_mysql \
    bcmath \
    ctype \
    fileinfo \
    mysqli \
    sockets \
    ffi \
    zip \
    gd \
    pcntl \
    inotify

ARG COMPOSER_VERSION
ENV COMPOSER_VERSION=$COMPOSER_VERSION

# Install composer
RUN curl "https://getcomposer.org/download/${COMPOSER_VERSION}/composer.phar" --output /usr/local/bin/composer && \
    chmod +x /usr/local/bin/composer

WORKDIR /var/www/html