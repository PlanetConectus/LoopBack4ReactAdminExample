# React Admin and Loopback 4 Crud Sample
 

## Getting started

This is a sample with a React Admin and Loopback4 to implement Crud operations on `products` and `users` by requesting  APIs with LoopBack4 Provider that you can install with `npm install react-admin-loopback4-adapted`.


## Installations 


### Install node v12.18.3 with nvm 

follow the instructions to get node in your local machine
`sudo apt install curl`,
`curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`,
`source ~/.profile ` ,
`nvm install v12.18.3`,
`nvm use v12.18.3`.

### Install npm

 install the node package manager with the command `sudo apt install npm`, and check the npm version with `npm -v`.

### Setting up mongoDb 

install mongoDb from the official website `https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/` and follow the guide to get the final release `MongoDB 4.4`.

**note** : _if an error occur when you try to open the mongodb console with the command `mongo` check if the `mongod.service` is in active state with the command `sudo systemctl status mongod.service`_ , you can activate the `mongod.service` with the command `sudo systemctl start mongod.service`,
if you want to activate `mongod.service` automatically on startup of ubuntu use the following comands:
`sudo systemctl enable mongod.service` then `sudo systemctl start mongod.service`.


### Setting up mongodb Compass

install mongodb Compass from the official website `https://www.mongodb.com/try/download/compass` and follow instructions to get it on your local machine.this tool helps you to manage easily your database. 

### Install the dependencies

After cloning the project with `git clone https://github.com/PlanetConectus/LoopBack4ReactAdminExample.git` get inside the `ecommerce` folder in both `Frontreactadmin` and `BackendLoopbackV4` folders and install the node packages with the commande `npm install`.


## Launching the apps
 
in this project we tried to reduce complexity for you to get both the frontend server and the backend server in the same local machine to do this we force the binding port of the Loopback4 server to `3001`
in the `LoopBack4ReactAdminExample/BackendLoopbackV4/ecommerce/src/index.ts` file:
```ruby 
const app = new EcommerceApplication({
    rest: {
      port: 3001
    }
  });

```
this is because you cant bind two processes to the same `[IP:PORT]` , in our case the binding IP is `127.0.0.1`  it's known as `localhost` , this modification will prevent `CORS blocks` by you navigator,to solve this problem we use the integrated node proxy by adding this line `"proxy": "http://localhost:3001"` in the `LoopBack4ReactAdminExample/Frontreactadmin/ecommerce/package.json`:
```ruby
{
 .
 .
 .
 . ,
  "proxy": "http://localhost:3001", // <~~~ here we add the proxy field in package.json
 
.
.
.
}

```


### Start the servers

after setting the changes that we mention in the previous section we start turning the servers and discover how easy is to `create` and `modify` or `delete` a `product` or a `user`


1. get in `LoopBack4ReactAdminExample/BackendLoopbackV4/ecommerce` and run the command `npm start`

``` ruby
> node -r source-map-support/register .

Server is running at http://[::1]:3001
Try http://[::1]:3001/ping
```

2. get in the `LoopBack4ReactAdminExample/Frontreactadmin/ecommerce` and run the command `npm start`
```ruby
Compiled successfully!

You can now view ecommerce in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.18.25.22:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

```
3. copy this link `http://localhost:3000` to your browser to get in the react admin app and start managing the `products` and `users`.


### The application file app.js

in the react admin application the  `src/app.js` is exported to the entry point `src/index.js` where node start resolving and mapping the `imports` and `exports`, look at the top of the `index.js` file to see the import of `App` function:

```ruby
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
```
inside the `app.js `you will find all what you want to know about how the application resolve 
the items from APIs by importing the module `react-admin-loopback4-adapted` and instantiate an object from  
the `lb4Provider` that takes as a @param the url to the backend server `http://localhost:3001`:
```ruby
const dataProvider = lb4Provider('http://localhost:3001');
```

**note** in this sample the authentication is not integrated we will complete it in the next tutorial 

# CONTACT

## if you have any question or you want to have advantage of our services please contact us 
```ruby
Site : https://planetconectus.com

E-mail : mohamedali.chaabani@planetconectus.com

Phone : 00216 26 410 947
Phone : +33 970 440 431
````








