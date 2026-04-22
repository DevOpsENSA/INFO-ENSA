FROM php:8.3-apache
RUN apt-get update && apt-get install -y \zip \unzip \git \libpq-dev
RUN docker-php-ext-install pdo pdo_pgsql
WORKDIR /var/www/html 
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
COPY . .
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader
#from composer in composer folder
RUN chown -R www-data:www-data storage bootstrap/cache
RUN a2enmod rewrite
EXPOSE 80