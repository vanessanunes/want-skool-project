include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

build:
	docker build -t node_skool .

hard-build:
	docker build -t node_skool .

run:
	docker run -p 3000:3000 -d node_skool