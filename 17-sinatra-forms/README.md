# Objectives

- build a form to create a new resource
- build a form to edit an existing resource
- build a link or a form to delete a resource
- use method override to send actions other than GET and POST


# HTTP Verbs
- Get:  Gets information from server
- Post: Sends information to server
- Put: Replaces an existing resource on the server {author: "Mark Twain"}
- Patch: Updates an existing resource on the server {author: "Mark Twain"}
- Delete: Sends a delete request (Used for deleting information)

# Method Override 
## (to do other than GET or POST in HTML)

- In form:
    `<input type="hidden" name="_method" value="put">`
- In controller:
    `set :method_override, true` 