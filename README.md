# Food Diary Back-end

Node.js server that connects to a MongoDB database, for a food diary application. Created as part of my Final Year Project for Maynooth University. API documentation can be found [here](https://limitless-fjord-95998.herokuapp.com/api-docs/#/).

## Install and Run

### Prerequisites

Install Node.js from [here](https://nodejs.org/en/) 

### Configure Database

For the application to work, it needs to connect to a MongoDB database. The config file with connection credentials is not included in this repo. If you wish to run this server, you will need to create your own MongoDB instance following these steps:

1. Sign up for a free MongoDB Atlas account [here](https://www.mongodb.com/atlas)
2. Create a new project.
3. Click "Build a Database"
4. Deploy at whichever tier you like (Shared tier is free)
5. Click "Create Cluster"
6. Create a database user with a username and password
7. Enter either your own IP address in the access list or 0.0.0.0 to allow all IP addresses access to the database
8. On the dashboard, click "Connect" and then "Connect your application" 
9. Copy the connection string and replace the `dbURL` string in `index.js`, line 22, with your new connection string.

### Configure `.env` File

The .env file is where environment variables are kept for configuration. It is wise to put secrets such as database passwords in here. Here are the bare minimum steps needed to run the server:

1. Create a file called `.env` at the root of the project
2. Define a variable here called `JWT_SECRET` using the following syntax `JWT_SECRET=<any string you want here>`

The reason we do this is to create a JWT key that will be used for authenticating users. It is important to keep this key secret and hard to guess.

### Install Packages

To install all of the packages required in the app, open a terminal at the root of the project and run `npm install`. 

### Run the App

To run the application, open a terminal at the root of the project and run `npm start`.

## Heroku Deployment

There is a deployed instance of the app at this [URL](https://limitless-fjord-95998.herokuapp.com/). It will display Cannot GET when you navigate to that link in the browser as it requires an authenticated user. An authenticated user can be created with the URL using Postman and following the API endpoint documentation [here](https://limitless-fjord-95998.herokuapp.com/api-docs/#/).

If you wish to deploy your own version of the server onto Heroku, you can follow this [guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

After you deploy your version of the server on Heroku, you will need to add the config vars that you declare in the `.env` file. You can do this using the Heroku CLI:

```
heroku config:set JWT_SECRET="example secret"
```
