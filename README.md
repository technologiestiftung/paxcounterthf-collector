# Paxcounter Data Collector

This is a tiny Node.JS app using TypeScript which is listening to a TTN console to collect data from a sensor and push it towards a NoSQL database. We use a MongoDB Atlas as database.

Each time a node uploads a payload into the TTN console, the collector pushes this payload into a MongoDB Atlas.

For a more detailed instruction, we highgly recommend this Repo, as main parts of the code are coming from there: https://github.com/nicbkw/thingsconf2019

**Thanks to The Thing Network UK & Nic Burkinshaw**

## Dependencies & Start

install dependencies:
`npm install`


start app:
`npm start`

## Environment variables
Setup the environment variables (sessionKey, AppKe, Username, Password etc.) by filling in the blanks in `.envTEMPLATE` file.
Finally, rename the file: `.env`

**note**: If want to publish your work later, your `.env` file wont be published to GitHub due that its mentioned in the `.gitignore` file.

## Troubleshooting
We experienced some small troubles when connecting to MongoDB. Maybe this hints could save you time and nerves:
### 1. speacial characters in env-variables
If you cannot connect to your ttn console, check your credentials.
**There are no special characters within the URI link allowed!**

**Solution:** Use the corresponding Hex value for your special characters instead: [https://ascii.cl/](https://ascii.cl/)
### 2. collection error
If your receive thisTypeError: `C'annot read property 'collection' of null'`this means, that there is no collection with the refered env-name existing

**Solutions:**
* Create the MongoDB collection before you try to connect
* Add your current device ip address to the whitelist (see: [MongoDB Atlas whitelist configuration](https://docs.atlas.mongodb.com/tutorial/whitelist-connection-ip-address/))

### 3. network error
**Solution:** Check whether network allows you to use the port: [http://portquiz.net:27017/](http://portquiz.net:27017/)



