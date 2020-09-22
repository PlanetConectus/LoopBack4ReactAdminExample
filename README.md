# React Admin and Loopback 4 Crud Sample
 

## Getting started

This is a sample with a React Admin and Loopback4 to implement Crud operations on `products` and `users` by requesting  APIs with LoopBack4 Provider that you can install with `npm install react-admin-loopback4-adapted`.


## Installation 


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


### Setting up mongodb Complass

install mongodb Compass from the official website `https://www.mongodb.com/try/download/compass` and follow instructions to get it on your local machine.this tool helps you to manage easily your database. 

### Install the dependencies

After cloning the project with `git clone https://github.com/PlanetConectus/LoopBack4ReactAdminExample.git` get inside the `ecommerce` folder in both `Frontreactadmin` and `BackendLoopbackV4` folders and install the node packages with the commande `npm install`.


## Start launching the apps
 
in this project we tried to reduce complexity for you to get both the frontend server and the backend server in the same local machine to do this we force the binding port for the Loopback4 server to `3001`
in the `LoopBack4ReactAdminExample/BackendLoopbackV4/ecommerce/src/index.ts` file, this is because you cant bind two processes to the same `[IP:PORT]` in our case the binding IP is `127.0.0.1`  it's known as `localhost` , this modification will prevent `CORS blocks` by you navigator,to solve this problem we use the integrated node proxy by adding this line `"proxy": "http://localhost:3001"` in the 




**note** in this sample the authentication is not integrated we will complete it's logic in the next tutorial 










