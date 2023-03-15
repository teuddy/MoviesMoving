
# Set the Redis container name and port
# CONTAINER_NAME="redis"
# REDIS_PORT="6379"

source .env

# Wait for the Redis container to be up
echo "Waiting for Redis container to be up in host: ${REDIS_HOST} and port ${REDIS_PORT}"
while ! nc -z $REDIS_HOST $REDIS_PORT; do
  sleep 1
done
echo "Redis container is up and running in host: ${REDIS_HOST} and port ${REDIS_PORT}"
npm run start