# hire_beat_react_django

This README is intended for programmers who already have experience with React or Django.

### To run the website locally:

0. Make sure you have access to all the environmental credientials.

1. Set up your environment. install python3, pip3, virtualenv. Then in your virtualenv, install django, node, postgresql.
2. Git clone the repo in your virtualenv.
3. Cd into the project(where there is a requirement.txt file) and run `pip3 install -r requirements.txt` to install all django related packages.
4. Then in the same folder(where there is a package.json file), run `npm install` to install all react related packages.
5. Replace the modified package. Cd into `node_modules` folder and remove the folder `react-s3-uploader`, this is the official version. Cd into `hirebeat/hirebeat` and find a folder called `react-s3-uploader`, this is the modified version which is used by our app. Run `cp -r react-s3-uploader ../../node_modules/` to copy the folder.
Besides, cd into `node_modules` and remove the folder `react-quiz-component`, this is the official version. Cd into `hirebeat/hirebeat` and find a folder called `react-quiz-component`, this is the modified version which is used by our app. Run `cp -r react-quiz-component ../../node_modules/` to copy the folder.
6. Make sure postgresql is running and create a user. Put the username and password in database session of the django settings file.
7. Touch a file in the project root dir called `.env` and copy paste environmental credentials. Set `Bucket=hirebeat-test-video-bucket` in the `.env` file and `var url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + name;` in `MyVideoUploader.js`file when run in local.
8. Migrate database changes. Run `pip3 install psycopg2` then, `python3 manage.py migrate`. 
9. Run `npm run dev` to build the webpack bundle html file.
10. Open django admin site to add one question to each category.(Needed for practice).
11. Comment out `EMAIL_BACKEND="django.core.mail.backends.smtp.EmailBackend"` and remove the comment for `#EMAIL_BACKEND="django.core.mail.backends.console.EmailBackend"` in the `settings.py` file when run in local.
12. Run the app using `python3 manage.py runserver 0.0.0.0:8000 --insecure`. (This --insecure flag is required as django debug mode is turned off).



### To enable console messages:

Comment out 

```
console.log = function () {};
console.error = function () {};
console.exception = function () {};
console.warn = function () {};
```

in hirebeat/frontend/src/index.js


Copyright @2020 Hirebeat.

