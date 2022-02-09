FROM mongo-express:latest
COPY . /home/server/backend
CMD [ "cd /home/server/backend && npm install" ]