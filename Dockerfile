#linux platform
FROM --platform=linux/amd64 node:alpine
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install 
COPY ./ ./
EXPOSE 3000
# ENTRYPOINT ["node", "src/index.js"]
CMD [ "sh", "start.sh" ]




