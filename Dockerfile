FROM node:18.16.0

WORKDIR /opt/org/hello-world

COPY . .
RUN rm -rf node_modules \
    && rm -rf dist \
    && npm i \
    && npm run build

RUN chmod +x /opt/org/hello-world/start.sh

ENTRYPOINT ["/opt/org/hello-world/start.sh"]