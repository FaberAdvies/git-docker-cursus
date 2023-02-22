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
git clone git@github.com:FaberAdvies/git-docker-cursus.git
git status
git log

#git add <file>
#git add .

#git commit -m "Commit messages"
#git commit --amend

git fetch
#git merge
git pull


#git rebase

#git push
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
Dockerfile is de bouwteking voor de image. Let op de punt in volgend commando. Die bestanden gebruik je voor bouwen.
```
docker build -t my_docker_image:0.0.1 .
docker image ls
docker images
```

## Containers
```
docker run -d -p 8080:8080 --name myDockerContainer my_docker_image:0.0.1
docker ps -a
docker inspect myDockerContainer
docker stop myDockerContainer
docker start myDockerContainer
docker logs -tf myDockerContainer
docker exec -it myDockerContainer bash
docker stop myDockerContainer
docker rm myDockerContainer

```
# Docker compose

Via docker-compose.yml
```
docker compose -p my-project up -d
docker ps
docker compose -p my-project stop
docker compose -p my-project down

```
