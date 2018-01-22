# express_api 
## Install
wow wow slow down cow boy! first things first!

first you gotta clone the repo
```
git clone https://github.com/JohnnyFang/express_api.git
```
then install all the dependencies
```
npm isntall
```
then start it
```
npm start
```

## dev mode
```
npm isntall
```
then start it
```
npm run dev
```
## Entities
### Post
supports CRUD ops *[Create, Read, Update, Delete]*
 #### Fields
 ● content (String, max length 280 chars)
 ● author (reference to 'user', lenght 32 chars)
 ● location (String, max length 64 chars)
 ● timestamps (auto generated)
    
 #### Routes
 ```
 * /api/posts/       GET    - lists all posts
 * /api/posts/       POST   - creates a post
 * /api/posts/:id    GET    - gets a post
 * /api/posts/:id    PUT    - updates a post
 * /api/posts/:id    DELETE - deletes a post
 ```
 
### User
supports CRUD ops *[Create, Read, Update, Deactivate (a.k.a **soft delete)**]*
 #### Fields
  ● firstname   
  ● lastname   
  ● email  
  ● active   
  ● timestamps  (auto generated)   
 #### Routes
 ```
 * /api/users/       GET    - list all active users
 * /api/users/       POST   - creates user
 * /api/users/:id    GET    - gets user
 * /api/users/:id    PUT    - updates user
 * /api/users/:id    DELETE - deactivates user (soft delete)
 ```
