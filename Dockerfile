FROM nginx:stable-alpine

COPY index.html css imgs scripts svgs webfonts /usr/share/nginx/html/

EXPOSE 80
