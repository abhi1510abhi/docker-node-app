

docker ps # view active containers
docker ps -a # view all containers
docker images # view all images


docker build -t docker-node-app . # build image here t means tag

docker start 94a879f3c707 
docker restart 94a879f3c707
docker remove 5f6b5a207dea
docker stop 5f6b5a207dea

docker exec -it 94a879f3c7078cb73c2 bash # open container in bash

docker logs -f 94a879f3c707  # check open logs

docker help 

 # run images on - it means interactive mode and -p means port mapping
docker run -it -p 3333:3333 docker-node-app  

docker login 
docker logout
docker push 
