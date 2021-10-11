# Git
Op windows, gebruik sourcetree: https://www.atlassian.com/software/sourcetree

## links
- https://git-scm.com/book/en/v2 <- !!! Lezen
- https://www.atlassian.com/git/tutorials/what-is-version-control <- !!! Lezen

- Cheatsheet: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet

## Wat is git?
Source code management systeem

## Commando's
```
git clone git@github.com:FaberAdvies/spring-kotlin-api.git
git status
git log

git add <file> 
git add .

git commit -m "Commit messages"
git commit --amend

git fetch
git merge
git pull


git rebase

git push
```

# Docker
## links
https://www.freecodecamp.org/news/the-docker-handbook/

## Wat is docker?
Software om applicaties in hun eigen container uit te voeren. 

## Images
Van een images (class) een container (object) maken. Vergelijk in Java:
```
Dog myDog = new Dog(ras="Duitse herder")
```
Dockerfile is de bouwteking voor de image
```
docker build -t myDockerImage:0.0.1 .  <- let op de punt
docker image ls (korter docker images)
```

## Containers
```
docker run -d --name myDockerContainer myDockerImage:0.0.1
docker ps -qa
docker inspect myDockerContainer 
docker stop myDockerContainer
docker start myDockerContainer
docker logs -tf myDockerContainer
docker exec -it myDockerContainer bash

docker pull ghcr.io/faberadvies/behive-api:0.0.1-SNAPSHOT 
docker run -d --name behive ghcr.io/faberadvies/behive-api:0.0.1-SNAPSHOT
docker ps -qa
docker inspect behive
```
# Docker compose

docker-compose.yml
```
docker compose up -d -p <project naam>
docker compose down
```
