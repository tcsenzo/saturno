FROM node:6.5

MAINTAINER Leonardo Wolter <leocwolter@gmail.com>

# Define environment variables
ENV SATURNO_HOME=/opt/saturno
RUN mkdir -p $SATURNO_HOME
WORKDIR $SATURNO_HOME


# Bundle app source
ADD . $SATURNO_HOME
# Copy the prod config.js
ADD build/config.js $SATURNO_HOME/app/config.js

# Main command
ENTRYPOINT ["npm", "start"]