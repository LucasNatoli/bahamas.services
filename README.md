# Coinmarketcap Tools

## Comandos

### write-quotes.js

Lee las cotizaciones en dolares de los simbolos que recibe como parámetro y las escribe en sus respectivos archivos de log (por defecto en: ./logs).

Corre una vez cada minuto

```bash
$  node write-quotes.js 1839, 7186, 10029
````

### check-alarms.js

Revisa todas las alarmas programadas por los usuarios. Activa las alarmas que correspondan actualizando la fecha de última activacion (lastactivated).

Corre una vez por minuto

```bash
$  node check-alarms.js
````

## REST API 

Todas las llamadas, salvo que se indique lo contrario, deben incluir headers:
```
Content-Type: application/json
Authorization: Bearer xxxxxxxxxxxxxxxxxxxxx
```

### GET /v1/system/watchlist

Obtener la lista de simbolos que el sistema puede monitorear en la aplicación. La lista de simbolos se obtiene desde la API de Coinmarketcap y se indexa por el id que corresponde a dicha API.

### GET /v1/alerts/price-alerts

Obtener la lista de alertas de precio programadas por el usuario. 

### POST /v1/alerts/price-alerts

Guardar una nueva alerta de precio del usuario.

Parametros:

````
Content-Type: application/x-www-form-urlencoded
````

* symbolid = Id del simbolo de la alerta.
* condition = Operadores mayor (>), menor (>) 
* value = Precio
* name = Nombre de la alerta

### PUT /v1/alerts/price-alerts

Actualizar un alerta de precio del usuario.

Parametros:

````
Content-Type: application/x-www-form-urlencoded
````

* symbolid = Id del simbolo de la alerta.
* condition = Operadores mayor (>), menor (>) 
* value = Precio
* name = Nombre de la alerta
* alertid = id de la alerta que se actualizará



## Artifacts

Config
+ API Key: ae0aed59-6969-4cdc-82f8-715fe98bbbd9

+ DB 
+ Model
+ log

## Features

* ~~Actualizar los ultimos precios~~
+ ~~Revisar Alarmas~~
+ Enviar Mails
+ ~~Crear Alarma~~



-===================================-

### Enviar mails
#### Postfix


https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-as-a-send-only-smtp-server-on-ubuntu-20-04-es


#### Gmail

https://stackoverflow.com/questions/19877246/nodemailer-with-gmail-and-nodejs


https://nodemailer.com/usage/using-gmail/


### Usando SQLite para datos de tickers o tablas livianas, simil CSV

https://sequelize.org/v5/manual/getting-started.html


## Modelo Alarma

+ user
+ pair
+ condition
+ condition-time-to-confirm
+ value
+ repeat
+ last-triggered
