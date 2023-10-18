### Run Postgresql use Docker
1. pull docker image: docker pull postgres
2. check: docker image ls
3. run: docker run –-name pgsql-dev -e POSTGRES_PASSWORD=Welcome4$ -p 5432:5432 postgres
4. check postgres run:
    - docker exec -it [container_name] bash
    - login with user default: psql -h localhost -U postgres
    - \l
    
