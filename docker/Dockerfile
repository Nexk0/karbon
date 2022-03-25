FROM node:17-alpine3.14
# Create app directory
WORKDIR /karbon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /karbon/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
CMD [ "npm", "start" ]