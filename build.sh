#!/bin/sh
docker stop simplemodbot-api -t 0
echo Stopped SimpleModBot-api. | lolcat
docker build -t simplemodbot-api .
echo Build complete. | lolcat
docker-compose up --remove-orphans