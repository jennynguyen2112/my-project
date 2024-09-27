# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any necessary dependencies
RUN npm install

# Copy the index.js file to the working directory
COPY index.js /app/index.js

# Copy the views folder with .ejs files to the working directory
COPY views /app/views

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "index.js" ]
