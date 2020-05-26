# Paxcounter Data Collector

This is a tiny Node.JS app using TypeScript which is listening to a TTN console to collect data from a sensor and push it towards a NoSQL database. We use a MongoDB Atlas as database.

Each time a node uploads a payload into the TTN console, the collector pushes this payload into a MongoDB Atlas.

For a more detailed instruction, we highgly recommens this Repo, as main parts of the code are coming from there: https://github.com/nicbkw/thingsconf2019

**Thanks to The Thing Network UK & Nic Burkinshaw**

## Dependencies & Start

install dependencies by using command:
`npm install`


start app by using command:
`npm start`

## Environment variables
Setup the environment variables (sessionKey, AppKe, Username, Password etc.) by filling in the blanks in `.envTEMPLAE` file.
Finally, rename the file: `.env`

**please note**: If want to publish your work later your `.env` file wont be published to GitHub (see `.gitignore`)

## Troubleshooting
We experienced some small troubles when connecting to th MongoDB. Maybe this hints could save you time and nerves:
* no special Characters within the URI link allowed!
    * Use the corresponding Hex value for your characters: [https://ascii.cl/](https://ascii.cl/)
* collection has to be created first
* check whether network allows you to use the port: [http://portquiz.net:27017/](http://portquiz.net:27017/)



