# LAKings sample project

This README is intended for programmers who already have experience with React or Django.

### To run the website locally:

0. Make sure you have access to all the environmental credientials.

1. Set up your environment. install python3, pip3, virtualenv. Then in your virtualenv, install django, node(please use v16.14.0), postgresql.
2. Git clone the repo in your virtualenv.
3. Cd into the project(where there is a requirement.txt file) and run `pip3 install -r requirements.txt` to install all django related packages.
4. Then in the same folder(where there is a package.json file), run `npm install` to install all react related packages.
5. Make sure postgresql is running and create a user. Put the username and password in database session of the django settings file.
6. Migrate database changes. Run `pip3 install psycopg2` then, `python3 manage.py migrate`.
7. Run `npm run dev` to build the webpack bundle html file.
8. Run the app using `python3 manage.py runserver 0.0.0.0:8000 --insecure`. (This --insecure flag is required as django debug mode is turned off).

### To enable console messages:

Comment out

```
console.log = function () {};
console.error = function () {};
console.exception = function () {};
console.warn = function () {};
```

in lakings/frontend/src/index.js
