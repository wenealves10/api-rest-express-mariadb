FROM node:14-slim

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
