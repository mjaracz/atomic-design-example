<h1>Prerequisites</h1>

```

npm: v.6.14.5
node: v14.04.0
docker: v.19.03.11
docker-compose: 1.25.0
tslint: 6.1.2
migrate-mongo: 7.2.1

```


## Database

First of all we have to start our's database <br> which is mongodb by typing command in root project directory <br>
NOTE: install [docker ecosystem](https://docs.docker.com/engine/install/#server) before 

#### `docker-compose -f api/.docker/docker-compose.yml up`

Next, it would be useful to fill our database with data.
You can use the migration scripts from the api/migrations directory. Commands available in the migrate-mongo package listed in prerequisites, you have to install globally [this package](https://www.npmjs.com/package/migrate-mongo) before you can use when you have this package installed just type in the root directory

#### `cd api/ && migrate-mongo up`


## Launch backend

To launch project backend api, first open terminal in rootDir/api then install dependency and run start script

#### `npm install && sudo npm run start`

## Launch frontend

Fianlly after all of above steps we can simple start front-end. Just open new terminal window and then in root directory type

#### `cd fron-end/ && npm install`
#### `npm run start`
### Sign-in credentials tested mood

```
username: john@gmail.com
password: changeme
```

#### Note: 
when you will test applications manually, just remember that when you go to the component called 'recall password' it is important that you create a username before with a real email address, so that the script in the application can send a message to an existing mailbox
<br>
<br>

# Unit Test

### Aviable Scripts Front-end
#### `npm run test`
update snapshot
#### `sudo npm run test -- -u`
coverage raport
#### `sudo npm run test -- --coverage`
### Aviable Scripts Back-end
#### `sudo npm run test`

<br>

# Environment Variables
For testing purpose, create in api/ direcotory file calls .env.local with belowe content

```
JWT_SECRET="secretKey"
SALT_ROUND=9
EMAIL_ID=nom46207@gmail.com
EMAIL_PASS=changeme46207
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EXTEND_ESLINT=true
```
<br>
and the same file name for front-end/ direcotry with belowe content

```
EXTEND_ESLINT=true
```