include .env

.PHONY: up

up:
	docker-compose up -d

.PHONY: down

down:
	docker-compose down

build:
	docker-compose build

restart:
	docker-compose up -d --force-recreate api

logs:
	docker-compose logs -f api