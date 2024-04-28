# README

How to get project running 

* Versioning
- Ruby: ruby 3.1.0p0
- Node: v16.0.0
- Npm: 9.8.1
- Sqlite3: 3.43.2 2023-10-10

* Setup 
1. run `bundle install` in the root of the project
2. create the db: `rails db:create`
3. run migrations: `rails db:migrate`
4. create seed: `rails db:seed`
5. go to the front end project, `cd thanx-front-end`
6. install deps: `npm install`
7. go back to the root of the project: `cd ..`
8. start server on port 3000: `rails s`
9. go into the frontend project and start the react project on port 3001: `npm run start`
10. project should show up on browser at `http://localhost:3001/home`

To reset the project to regain points for redemption do the following:
```
rails db:drop
rails db:create
rails db:migrate
rails db:seed
```