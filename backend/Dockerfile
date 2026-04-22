FROM php:8.3-apache
RUN apt-get update && apt-get install -y \zip \unzip \git \libpq-dev
RUN docker-php-ext-install pdo pdo_pgsql
WORKDIR /var/www/html 
#apache expects it as the default
COPY . .
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader
#from composer in composer folder
RUN chown -R www-data:www-data storage bootstrap/cache
RUN a2enmod rewrite
EXPOSE 80