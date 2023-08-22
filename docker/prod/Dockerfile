FROM debian:12-slim

# Update system repositories
RUN apt-get update && apt-get upgrade -y

# Install dependencies
RUN apt-get -y install nginx \
    supervisor \
    git \
    curl \
    wget \
    zip \
    unzip \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    pkg-config \
    libssl-dev \
    inotify-tools \
    gettext-base \
    vim

# Install PHP and extensions
RUN apt-get -y install php8.2 php8.2-fpm php-cli
RUN apt-get -y install php8.2-bcmath \
    php8.2-ctype \
    php8.2-curl \
    php8.2-dom \
    php8.2-fileinfo \
    php8.2-mbstring \
    php8.2-pdo \
    php8.2-tokenizer \
    php8.2-xml \
    php8.2-gd \
    php8.2-pdo-mysql \
    php8.2-zip \
    php8.2-exif \
    php8.2-redis

# Add custom php.ini
# ADD ./docker/prod/php.ini /etc/php/8.2/fpm/php.ini

# Make log directories if they don't exist
RUN mkdir -p /var/log/supervisor && chown -R www-data:www-data /var/log/supervisor
RUN mkdir -p /var/log/php-fpm && chown -R www-data:www-data /var/log/php-fpm
RUN mkdir -p /var/log/nginx && chown -R www-data:www-data /var/log/nginx
RUN touch /var/log/php8.2-fpm.log && chown -R www-data:www-data /var/log/php8.2-fpm.log

# Configure nginx
RUN mkdir -p /run/php && \
    chown -R www-data:www-data /var/www && \
    chown -R www-data:www-data /run/php && \
    rm /etc/nginx/sites-available/default && \
    rm /etc/nginx/sites-enabled/default

RUN mkdir -p /etc/nginx/certs/
RUN chown -R www-data:www-data /etc/nginx/certs/

COPY --chown=www-data:www-data ./docker/prod/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --chown=www-data:www-data ./docker/prod/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=www-data:www-data ./docker/prod/nginx/conf.d/default-ssl.conf /etc/nginx/conf.d/default.conf.template

COPY --chown=www-data:www-data ./docker/prod/certbot.sh /usr/local/bin/certbot.sh

RUN chmod +x /usr/local/bin/certbot.sh

# Install certbot
RUN apt-get -y install certbot python3-certbot-nginx

# Copy supervisor configuration
COPY ./docker/prod/supervisor/supervisord.conf /etc/supervisor/supervisord.conf

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get -y install nodejs

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy start script
COPY ./docker/prod/start.sh /start.sh

# Set permissions
RUN chmod 755 /start.sh

# Clear caches
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Create user www-user and add to www-data group
# RUN useradd -ms /bin/bash www-user && usermod -a -G www-data www-user

# Remove existing vendor directory
RUN rm -rf /var/www/html/vendor
RUN rm -rf /var/www/html/node_modules

# Copy existing application directory permissions
COPY --chown=www-data:www-data . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Install composer dependencies
RUN composer install --no-interaction --no-scripts --no-suggest --optimize-autoloader

# Install npm dependencies
RUN npm install

# Build assets
RUN npm run build

# Chown all the files to the app user.
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80 443

STOPSIGNAL SIGKILL

# Run start script
CMD ["/start.sh"]
