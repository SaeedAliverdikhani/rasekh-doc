## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:slim as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app
COPY --chown=node:node package.json yarn.lock /home/node/app/

# install packages
RUN yarn

# Copy the source code over
COPY --chown=node:node . /home/node/app/

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
# Build the Docusaurus app
RUN yarn build
# CMD ["yarn", "start"]

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
# Copy what we've installed/built from production
COPY --chown=node:node --from=production /home/node/app/build /usr/share/nginx/html/