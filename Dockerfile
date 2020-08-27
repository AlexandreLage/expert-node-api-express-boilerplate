FROM node:lts-slim
WORKDIR /var/www
#Copy api source files to docker image
COPY ./src /var/www
#Install pm2 node process manager (globally)
RUN yarn global add pm2
RUN pm2 install typescript
#Run yarn to install dependencies defined on package.json
RUN yarn
#Copy docker-entrypoint.sh to docker image
COPY ./deploy/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
EXPOSE 8001
#Define entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]