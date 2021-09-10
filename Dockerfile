FROM nginx:1.17.6-alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' copy website to default nginx public folder
COPY docker-compose.yml /opt/
COPY dist/ /usr/share/nginx/html
## fix 404 error when refresh web
#COPY conf/default.conf /etc/nginx/conf.d/default.conf
#CMD ["nginx", "-g", "daemon off;"]
EXPOSE ${APPLICATION_PORT}
##  docker build -t aos-h5 .
##  docker run -d -p 2000:80  aos-h5
