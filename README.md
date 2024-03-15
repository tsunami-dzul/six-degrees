# How to run it

## Running it locally

Create a .env variable at the root of the project with the below properties:  
PORT=<'port-number'> Number of the port where the application will run.  
DB_STR_CONN=<'mongodb url'>

### `npm install`

### `npm start`

## In Docker

Make sure you have installed docker and docker compose properly.

Then run the next commands:

### `tsc`

### `docker-compose up`

Now you should be able to reach the API from the url: http://localhost:3000

You can check the images with the command:

```console
docker images
```

To check the containers

```console
docker ps -a
```

## List of APIs availables

**Get the list of the users**

| Action                     | url                                              | Method |
| -------------------------- | ------------------------------------------------ | ------ |
| List users                 | http://localhost:3000/api/users                  | GET    |
| Find relationship distance | http://localhost:3000/api/users/name_of_the_user | GET    |
| Create user                | http://localhost:3000/api/users                  | POST   |
| Update user                | http://localhost:3000/api/users                  | PUT    |
| Delete user                | http://localhost:3000/api/users/mongodb_id       | DELETE |

#### Payload examples:

**Create user:**

Provide a body json object with the next format:

```json
{
  "name": "0",
  "friends": [1, 3, 5]
}
```

**Update friends of a user:**

Provide a body json object with next values:

```json
{
  "id": "65f47091e42f8aee02a4d2ee",
  "friends": [3, 8]
}
```

**Update name of a user:**

Provide a body json object with next values:

```json
{
  "id": "65f47091e42f8aee02a4d2ee",
  "name": "new name"
}
```

**Update name and friends of a user:**

Provide a body json object with next values:

```json
{
  "id": "65f47091e42f8aee02a4d2ee",
  "name": "new name",
  "friends": [3, 8]
}
```
