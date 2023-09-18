FROM node:16 AS development
ENV NODE_ENV development

RUN mkdir /calendar-frontend && chown node:node /calendar-frontend
WORKDIR /calendar-frontend
ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node package.json package-lock.json* ./

COPY package.json ./
COPY package-lock.json ./
RUN npm install typescript
RUN npm install --package-lock-only
RUN npm install react-scripts@3.4.1 -g
USER node
COPY --chown=node:node . .
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]