
# view active containers 
docker ps 

# view all containers
docker ps -a 

# view all images
docker images 

# build image here t means tag
docker build -t docker-node-app . 

docker start 94a879f3c707 
docker restart 94a879f3c707
docker remove 5f6b5a207dea
docker stop 5f6b5a207dea

# open container in bash
docker exec -it 94a879f3c7078cb73c2 bash 

# check open logs
docker logs -f 94a879f3c707  
docker help 

# run images on - it means interactive mode and -p means port mapping
docker run -it -p 3333:3333 docker-node-app   


docker login 
docker logout
docker push 
