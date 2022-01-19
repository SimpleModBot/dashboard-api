# Guild API usage examples

## Usage references
I know I will forget how to use this, so here is some references or documentation. This can also be used if you wish to clone this and use it for yourself.

If you are hosting this API publicly with a real domain I suggest using `HTTPS` requests instead of `HTTP`.

---

### Requesting dependencies

`axios` | `mongoose`

---
### Examples

---

### Get data for a guild.

```ts
    await axios({
        url: `http://localhost:${process.env.PORT || `3001`}/guild/get/`,
        data: {
            Token: `TOKEN`,
            Guild: `GUILDID`,
        },
    });
    
    /* Returns a 200 status code and
    {
        _id: `idfk`,
        Guild: `GUILDID`,
        prefix: { type: String, default: "\\" },
        muteRoleID: { type: String, required: false },
        memberRoleID: { type: String, required: false },
        modlogChannelID: { type: String, required: false },
        antiInvite: { type: Boolean, default: false },
        welcomeChannelID: { type: String, default: false },
    }

    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    */
```

---

### Update a guild.

In the new data object you only need to add what you wish to change.

```ts
    await axios({
        url: `http://localhost:${process.env.PORT || `3001`}/guild/update/`,
        method: `patch`,
        data: {
            Token: `TOKEN`,
            Guild: `GUILDID`,
            new: {
                prefix: { type: String, default: "\\" },
                muteRoleID: { type: String, required: false },
                memberRoleID: { type: String, required: false },
                modlogChannelID: { type: String, required: false },
                antiInvite: { type: Boolean, default: false },
                welcomeChannelID: { type: String, default: false },
                // The type is what it expects when being updated, the default is what it is set to upon creation.
            },
        },
    });
    
    /* Returns a 200 status code and
    {
        _id: `idfk`,
        Guild: `GUILDID`,
        prefix: { type: String, default: "\\" },
        muteRoleID: { type: String, required: false },
        memberRoleID: { type: String, required: false },
        modlogChannelID: { type: String, required: false },
        antiInvite: { type: Boolean, default: false },
        welcomeChannelID: { type: String, default: false },
    }

    * If invalid returns a 400 status code
    * If no authorization token returns a 401 status code
    * If not authorized to do this returns a 403 status code
    */
```
