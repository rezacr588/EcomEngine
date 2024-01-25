#!/bin/bash

# Navigate to the front-end directory and start the front-end server in the background
cd front-end
yarn start &

# Navigate to the API directory and start the API server
cd ../api
mvn spring-boot:run
