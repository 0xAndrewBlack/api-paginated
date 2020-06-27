# Paginated API

## Features

- Basic limits if the user not provided the right arguments or misspelled it
- `/users` route for serving users
- The model has a `previous`, a `next` and also a `current` page of the API
- The `next` and the `prev` fields are only visible when those pages are exists

## Basic usage

> Note: The index (/ route) is saying to navigate to the /users route :)

Basic GET (it will return the 1st page and set the limit to 4)

```
/users
```

Where you request the 2nd page and set the serve limit to 2 as well.

```
/users?page=2&limit=2
```

## About

This project is was for practice and its a very good implementation so feel free to use it, if you want you can tag me or link it back to me.
