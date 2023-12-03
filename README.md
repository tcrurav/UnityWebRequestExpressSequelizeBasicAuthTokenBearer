# Unity CRUD consuming API with Express + Sequelize + MySQL and Auth Basic + Token Bearer

It's just that: An example with Unity consuming an API with Express + Sequelize + MySQL. Auth Basic and Token Bearer is used for the Authentication.

It's just a very raw example:
* No validations at all.
* No error checks.
* Don't try to Login before Signup successfully because there is no validations.
* To see the result of "Show bicycles" go to the Console.
* Don't forget to enter a valid id to update/delete a bicycle.

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install itconfrom https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.
* [Unity](https://store.unity.com/es/download) - Install Unity Personal from https://store.unity.com/es/download.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/UnityWebRequestExpressSequelizeBasicAuthTokenBearer.git
```

This project contains 2 different parts:
* Frontend
* Backend

### In the backend

You need a backend/db.config.js file with the data for the connection to your MySQL Server. So create a backend/.env file:

```
JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#

DB_HOST=localhost
DB_USER=root
DB_NAME=db_bicycles_unity
DB_PASSWORD=YourPassword
```

You need a mysql server working.

Create the mysql database, that in our case is "db_bicycles_unity".

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies:

```
cd UnityWebRequestExpressSequelizeBasicAuthTokenBearer/backend
npm install
```

Finally start your backend.

```
cd UnityWebRequestExpressSequelizeBasicAuthTokenBearer/backend
npm start
```

### In the frontend

Just open the `frontend` project with Unity Editor and run the scene `Menu`.

Take into account that this project is just a very raw example:
* No validations at all.
* No error checks.
* Don't try to Login before Signup successfully because there is no validations.
* To see the result of "Show bicycles" go to the Console.
* Don't forget to enter a valid id to update/delete a bicycle.


Enjoy!!!

## Built With

* [Unity](https://unity.com/es) - A 3D and 2D motor engine to develop games.
* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Acknowledgments

* https://docs.unity3d.com/Manual/UnityWebRequest.html. Unity documentation about UnityWebRequest.
* https://docs.unity3d.com/Manual/Coroutines.html. Unity documentation about Coroutines.
* https://medium.com/@rendiwithi/crud-rest-api-with-node-js-express-mysql-sequelize-in-2022-6870f90aa71e. CRUD Tutorial with NodeJS, Express and Sequelize.
* https://answers.unity.com/questions/24640/how-do-i-return-a-value-from-a-coroutine.html. How to return a value from a coroutine.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.