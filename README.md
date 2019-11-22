# Backend

For BACKEND devs

## Register a user

**Information required to register a user**
`Post` https://tablessthursday.herokuapp.com/api/auth/register

```
{
    username: "",
    password:""
}
```

Id is added automatically on the backend.
This is how your id and token would be returned:

```
{ 
    "id": 17,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2FsbyIsInN1YmplY3QiOjE3LCJpYXQiOjE1NzQzNzEzNzcsImV4cCI6MTU3NDM3NDk3N30.cBpe0qSMAjw-JBEuDKsRZVXFob137E43vI8PN7Ldu90"
} 
```

## Log in a user

`Post` https://tablessthursday.herokuapp.com/api/auth/login

Login with the username and password you used to register:

```
{
    username: "",
    password: ""
}
```

## Return tabs for current user

`Get`
https://tablessthursday.herokuapp.com/api/tabs/:id

This should be just a basic get request

## Return a list of categories

`Get`
https://tablessthursday.herokuapp.com/api/tabs/categories

It should just be a basic get request

## Create new tab

`Post`
https://tablessthursday.herokuapp.com/api/tabs/:id

You'll want to format it like this...

```
{
    "name": "post",
    "url": "http://google.com",
    "notes": "the crazy pos",
    "category_id": 2
}
```
```
Categories are :
1 - School
2 - Work
3 - Programming
4 - Music
5 - Cars
```

## Update a users tab

`Put`
https://tablessthursday.herokuapp.com/api/tabs/:id/:tab_id

This allows a user to update tab information. Changes are allowed to `url`, `name`, `notes`, and you can change the `category_id` using the numbers above, using this format:
```
{
    "url": "http://www.youtube.com",
    "name": "YouTube",
    "notes": "search",
    "user_id": 1,
    "category_id": 1,
    "category": "School"
} 
```
## Delete a tab

`Delete`
https://tablessthursday.herokuapp.com/api/tabs/id:/id:tab_id

This allows a user to delete a tab. It's just a simple delete request.

