# Objectives

- build a form to create a new resource
- build a form to edit an existing resource
- build a link or a form to delete a resource
- use method override to send actions other than GET and POST


# Method Override 
## (to do other than GET or POST in HTML)

- In form:
    `<input type="hidden" name="_method" value="patch">`
- In controller:
    `set :method_override, true` 