FROM node:latest
# Creating subfolder to ouput code
WORKDIR /usr/src/app/
#to add all of the code from this folder to the WORKDIR
COPY package*.json ./
# need to install node packages
RUN npm install
# expose a port to connect to the web
COPY . . 

EXPOSE 8080
WORKDIR /usr/src/app/backend/
# The command that is run to start the container
CMD ["node","server.js"]

# To build and run
# docker build -t sjr/node-example .
# docker run -p 3003:8080 sjr/node-example
# Add a '-d' after 8080 to make it as a background operation