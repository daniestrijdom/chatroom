FROM node:alpine
WORKDIR /app
ADD . /app
RUN npm i --production
EXPOSE 3000
CMD ["npm", "start"]