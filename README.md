# express_api
La primera entrega de este proyecto consiste en un API publica que permite a los usuarios administrar los anuncios. 
Ademas, permite las siguientes operaciones con 
los anuncios:Agregar, Listar, Editar y Eliminar. Con los siguientes campos:   
● Contenido (Texto, máximo 280 caracteres)   
● Autor (Texto, máximo 32 caracteres)   
● Ubicación (Texto, máximo 64 caracteres)   
● Fecha de creación (Calculada a la hora de crear el contenido)   
● Fecha de edición (Actualizada a la hora de editar el contenido)   
   
 ## Routes
 * /api/posts/       GET    - lista todos los anuncions
 * /api/posts/       POST   - CREA UN ANUNCIO
 * /api/posts/:id    GET    - OBTIENE UN ANUNCION
 * /api/posts/:id    PUT    - actualiza un anuncion
 * /api/posts/:id    DELETE - ELIMINA UN ANUNCIO
