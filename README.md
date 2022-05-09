# want-skool-project

Application "CRUD" with Node.js + PostgreSQL

docker-compose up -d --force-recreate db

docker build -t node_skool .

docker run -p 3000:3000 -d node_skool



docker-compose build
docker-compose up -f --force-recreate