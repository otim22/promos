# Promos API Doc
[![CircleCI](https://circleci.com/gh/otim22/promos.svg?style=svg)](https://circleci.com/gh/otim22/promos)

# Set up

```sh
# Start application with --build for first time. 
$ docker-compose up --build

# If not first time, then just start the containers
$ docker-compose up

# Checkout the container name from docker running processes
$ docker-compose ps

# Execute into the container
$ docker exec -it container_name sh

# Install dependences 
$ npm install

# Stop the container
$ docker-compose stop

# Re-start your container either in foreground mode
$ docker-compose up

# Or in background mode
$ docker-compose up -d

# Logs issues
$ docker-compose logs container_name

```

# Seed Data into the database

```sh
# Execute into the container
$ docker exec -it container_name sh

# Creates test data. Default 150 records.
$ node database/migrate.js

```

# Run tests

```sh
# Execute into the container
$ docker exec -it container_name sh

# Then run tests.
$ npm test

```
