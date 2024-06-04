
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

#docker compose
docker compose up -d (-d means detach mode)
docker compose down 

# pushing image to docker hub
docker login 
docker logout

docker build -t abhijeet735195/docker-node-app .
docker push abhijeet735195/docker-node-app

#screenshots

# creating image
<img width="1431" alt="Screenshot 2024-06-04 at 11 58 26 PM" src="https://github.com/abhi1510abhi/docker-node-app/assets/47599526/f9964c47-b5dc-44bc-af00-15e711def049">

# docker dekstop
<img width="1430" alt="Screenshot 2024-06-05 at 12 28 26 AM" src="https://github.com/abhi1510abhi/docker-node-app/assets/47599526/0e65f84b-0667-413c-a51a-b224ae73888c">
<img width="1430" alt="Screenshot 2024-06-05 at 12 35 08 AM" src="https://github.com/abhi1510abhi/docker-node-app/assets/47599526/59bdde26-5242-49d6-8d3f-1c3e0e430ae7">

# pushing to docker hub
<img width="1430" alt="Screenshot 2024-06-05 at 12 37 33 AM" src="https://github.com/abhi1510abhi/docker-node-app/assets/47599526/ddb4deb2-3a49-457d-bf10-127e70346fc7">

# docker compose 
<img width="1431" alt="Screenshot 2024-06-05 at 12 27 18 AM" src="https://github.com/abhi1510abhi/docker-node-app/assets/47599526/93cf0425-e9fa-4b30-8f10-e05ff6cc7f73">





