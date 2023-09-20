# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire SvelteKit application to the container
COPY . .

# Build the SvelteKit application for production
RUN npm run build

# Expose the port your SvelteKit app will run on
EXPOSE 3000

# Define the command to start your SvelteKit application
CMD ["node", "./dist"]
# CMD ["npm", "start"]