FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy app files
COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/
COPY public/ /usr/share/nginx/html/public/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
