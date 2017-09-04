# Demo BaaS

:)

## Heroku

```
$ heroku login
$ heroku apps:create <APP-NAME>
$ git push heroku master
```

## Database

- User: **nncl**
- Pass: **123pin**
- URL: `mongodb://<dbuser>:<dbpassword>@ds121464.mlab.com:21464/demobaas`

### CLI

```
mongo ds121464.mlab.com:21464/demobaas -u <dbuser> -p <dbpassword>
```
