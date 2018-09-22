# Promos API Doc

# Set up

```sh
# Start application with --build for first time. 
$ docker-compose up --build

# Or just start the containers
$ docker-compose up

# Find the container name from docker running processes
$ docker-compose ps

# Execute into the container
$ docker exec -it container_name sh

# Install dependences 
$ npm install

# Stop the container
$ docker-compose stop

# Start your container again foreground mode
$ docker-compose up

# Or start in background mode
$ docker-compose up -d

# Logs
$ docker-compose logs container_name

```
