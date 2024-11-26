FROM kong/kong:3.7.1-ubuntu

USER root

RUN apt update
RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install nodejs -y
RUN npm install -g kong-pdk

USER kong
