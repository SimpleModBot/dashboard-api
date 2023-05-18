# Custom-Command API usage examples

## Usage references
I know I will forget how to use this, so here is some references or documentation. This can also be used if you wish to clone this and use it for yourself.

If you are hosting this API publicly with a real domain I suggest using `HTTPS` requests instead of `HTTP`.

---

### Requesting dependencies

`axios` | `mongoose`

---
### Examples

Get all command data.

```ts
    await axios({
        url: `http://localhost:${process.env.PORT || `3001`}/cc/`,
        method: `get`,
        data: {
            Token: `TOKEN`,
            Guild: `GUILDID`,
        },
    });
    
    // Return value:
    /*
    {
        [
            {
                _id: `idfk`,
                Guild: `GUILDID`,
                Command: `COMMAND1`,
                Response: `RESPONSE1`,
            },
            {
                _id: `idfk`,
                Guild: `GUILDID`,
                Command: `COMMAND2`,
                Response: `RESPONSE2`,
            },
            // etc
        ]
    }
    */
```

---

### Get data for a command.

```ts
    await axios({
        url: `http://localhost:${process.env.PORT || `3001`}/cc/get/`,
        method: `put`,
        data: {
            Token: `TOKEN`,
            Guild: `GUILDID`,
            Command: `COMMAND`,
        },
    });
    
    /* Returns a 200 status code and
    {
        _id: `idfk`,
        Guild: `GUILDID`,
        Command: `COMMAND`,
        Response: `RESPONSE`,
    }

    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    */
```

---

### Delete a command.

```ts
    await axios({
        url: `http://localhost:${process.env.PORT || `3001`}/cc/delete/`,
        method: 'delete',
        data: {
            Token: `TOKEN`,
            Guild: `GUILDID`,
            Command: `COMMAND`,
        },
    });
    
    /* Returns a 200 status code
    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    */
```

---

### Create a custom command.

```ts
    await axios({
      url: `http://localhost:${process.env.PORT || `3001`}/cc/new/`,
      method: `post`,
      data: {
        Token: `TOKEN`,
        _id: new mongoose.Types.ObjectId(),
        Guild: `GUILDID`,
        Command: `COMMAND`,
        Response: `DESCRIPTION`,
      },
    });
    
    /* Returns a 200 status code and
    {
        _id: `idfk`,
        Guild: `GUILDID`,
        Command: `COMMAND`,
        Response: `RESPONSE`,
    }

    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    * If already exists returns a 409 status code
    */
```

---

### Update a custom command.

In the new data object you only need to add what you wish to change. I don't recommend changing the guild id, but it is possible.

```ts
    await axios({
      url: `http://localhost:${process.env.PORT || `3001`}/cc/update/`,
      method: `patch`,
      data: {
        Token: `TOKEN`,
        Guild: `GUILDID`,
        Command: `COMMAND`,
        new: {
          Response: `NEWDESCRIPTION`,
        },
      },
    });
    
    /* Returns a 200 status code and
    {
        _id: `idfk`,
        Guild: `GUILDID`,
        Command: `COMMAND`,
        Response: `RESPONSE`,
    }

    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    */
```
