install-api:
	npm i

setup-docker-volume:
	docker volume create --name=ehtavudev-postgres-data

launch-dev:
	docker-compose up

stop-dev:
	docker-compose down


migrate-db:
	npm run prisma:generate:migration
