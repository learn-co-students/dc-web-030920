# Deployment Lecture

## Overview

- What is Deployment?
<!-- - What does deployment look like in the industry -->
- Deploying the React and Rails app to Heroku

## Intro

So far, frontend and backend code has only run on our computer

Deployment is the process of setting up an application to serve our application on another computer, usually available at some URL

### Running our app locally

```bash
  cd blogger/backend
  bundle install
  rails db:seed
  rails s
  cd ../frontend
  npm install
  npm start
```

- How do we move from hosting our app locally to hosting it in a data center?
- Need a way to get our code from our machine to a cloud server
  - Pushing our code is not new to us. We've been pushing to GitHub for weeks as a form of cloud-based version control.
  - We now need a way to not only push and store our code to a cloud, but also have our code executed as well.
- We will need to change some things in our application configuration to make sure that when we deploy, everything still works

### Cloud Providers

- AWS
- Google Cloud
- Azure
- Heroku
- Digital Ocean
- Linode
...

### Goals

- Run our app on other computers
- Run the 'production' version of our app
- Point a url to our app

## What's the difference between local and prod?

- Speed
  - Network time becomes a concern
- Fetches have different urls
- Scale:
  - Normally on localhost we don't store millions of users
- Compatability
  - Browser compatability
  - Integrating with other developers' code

## What's New?

- Servers
- DNS Routing and domain names
- Load Balancers
- Database and caching
- Microservices
  - At least two services
  - Deploy one service for your Rails app and a separate service to serve your React app
  - Point your client at that server
- CORS configured
  - `*` -> 'frontend.com'
<!-- - Disaster recovery -->

## Deploying to Heroku

- Strategy:
  - Deploy backend
  - Deploy frontend
  - Test

### Create a Heroku account

- [Heroku CLI Docs](https://devcenter.heroku.com/articles/heroku-cli)
- Install Heroku CLI with `brew install heroku`
  - Check `heroku` works in the terminal

### Backend

- `heroku create <name-for-backend>` Though you can leave the second argument out and Heroku will provide you with a default name
- `git remote -v` to check that you have a new remote
- `git push heroku master` to push your code up to the Heroku cloud
- `heroku run rails db:migrate` to set up your database tables
- `heroku run rails db:seed` to seed your database. Typically, you'll want to work with real data in your deployed app, but for our purposes, we need to seed

#### Things you need to change on the backend

- Make sure your ruby version is up to date
- Make sure you are using Postgres for your database
  - [Change DB to Postgres](https://www.daveferrara1.com/ruby-in-rails-switch-from-sqlite3-to-postgres/)

### Frontend

- Change URL to fetch from deployed backend
  - Test it locally
- `heroku create <name-for-frontend>`
- `git remote -v` to check your remote has a heroku location
- `git push heroku master`

#### Things you need to change on the frontend

- Point your fetch calls to the deployed backend URL
  - You can create config variable in the APP and add it to heroku configurations

```javascript
// This will not work in heroku if you do not specify REACT_APP before the environment variable
const BASE_URL = process.env.REACT_APP_BASE_URL
```

### CORS

- Change CORS file to only accept responses from deployed frontend
- Push up to Heroku and test changes

### Deploying Mod 3 Projects

- Backend Server: Same process
- Frontend Single page: Git pages
  - https://pages.github.com/
