# Use the Node.js 18 base image
FROM node:18

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]

