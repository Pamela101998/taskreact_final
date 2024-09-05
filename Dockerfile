FROM node:22.7.0-alpine3.20
RUN addgroup app && adduser -S -G app pame
USER pame
WORKDIR /app/
COPY --chown=pame package.json .
RUN npm install
COPY --chown=pame . /app/
EXPOSE 5173
CMD ["npm","run","start"]