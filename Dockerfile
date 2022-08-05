FROM node:14-alpine


# Estas librerías son necesarias si se utiliza una conexión a Oracle
# ------------------------------------------------------------------
# RUN apk update && apk add libaio libnsl
# RUN ln -s /usr/lib/libnsl.so.3.0.0 /usr/lib/libnsl.so.1
# RUN apk add g++ make py3-pip

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENV APP_PORT 3000

# Variables de entorno
# --------------------
# ENV LD_LIBRARY_PATH /usr/src/app/src/database/oracle/instantClient_11_2/linux
# ENV NODE_TLS_REJECT_UNAUTHORIZED 0
# ENV JWT_SECRET Med1cu52o22
# ENV NET_URL https://webapitest.medicus.com.ar
# ENV NET_SHORT_URL webapitest.medicus.com.ar
# ENV RH_URL http://autorizaciones-api-autorizaciones-qa.apps.ocp1.medicus.com.ar
# ENV DB_MONGO_HOST 172.16.1.132
# ENV DB_MONGO_PORT 27017
# ENV DB_MONGO_DB medicus
# ENV DB_MONGO_USER webuser
# ENV DB_MONGO_PASSWORD W3bUs3rT3st!
# ENV DB_ORACLE_HOST 10.5.15.15
# ENV DB_ORACLE_SID TMED
# ENV DB_ORACLE_PORT 1521
# ENV DB_ORACLE_USER salud
# ENV DB_ORACLE_PASSWORD tmed
# ENV DB_ORACLE_DB TMED

# Variables de entorno para keyclock
# ----------------------------------
# ENV KC_URL https://keycloak-auth.apps.ocp1.medicus.com.ar/auth/realms/autorizaciones
# ENV KC_CLIENT_ID angular-web-client
# ENV KC_USERNAME autorizaciones-desa
# ENV KC_PASSWORD Q1w2e3r4
# ENV KC_REFRESH_MINUTES 4

CMD npm run start:prod
