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
 * /api/posts/       GET    - lista todos los anuncions
 * /api/posts/       POST   - CREA UN ANUNCIO
 * /api/posts/:id    GET    - OBTIENE UN ANUNCION
 * /api/posts/:id    PUT    - actualiza un anuncion
 * /api/posts/:id    DELETE - ELIMINA UN ANUNCIO
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
 * /api/users/       GET    - lista todos los Usuarios
 * /api/users/       POST   - CREA UN Usuario
 * /api/users/:id    GET    - OBTIENE UN Usuario
 * /api/users/:id    PUT    - actualiza un Usuario
 * /api/users/:id    DELETE - ELIMINA UN Usuario
 ```
