FROM node:10.0.0

# Create promos directory
RUN mkdir -p /usr/src/promos
WORKDIR /usr/src/promos

RUN npm install -g loopback-cli --unsafe

RUN npm install -g nodemon

ENTRYPOINT nodemon -x 'node .' -w common -w server

CMD ["npm", "start"]