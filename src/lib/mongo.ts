// connects to personal mongodb + defines funtion to store data
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const hostname = process.env.MONGODB_HOSTNAME;
const collection = process.env.MONGODB_COLLECTION;
const databaseName = process.env.MONGODB_DATABASE;

// importing module "mongodb"
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${user}:${password}@${hostname}/admin?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const collectionName = collection;

let database = null;

async function attachDatabase() {
  console.log("payload arrived in TTN console");
  console.log("trying to connect to MongoDB cluster");
  try {
    // Connect to the MongoDB cluster
    const connection = await MongoClient.connect(uri, options);
    database = connection.db(databaseName);
  } catch (e) {
    console.error(e);
  }
}

async function getDatabase() {
  if (!database) await attachDatabase();
  console.log("*** \n db connected \n*** ");
  return database;
}

export async function insertDocument(data) {
  const database = await getDatabase();
  if(database){ 
    try{
  return (
    await database.collection(collectionName).insertOne(data),
    function (err, result) {
      if (err != null) {
        console.log("ERROR: " + err);
        throw err;
      }
      console.log(result);
    }
  );
  }
  catch (e){
    console.error(e)
  } 
  }
  else{
    console.log("There is an error with the MongoDB collection")
  }
}

//return eventData array for most recent count of events, by device
export async function getArray(device, count) {
  const database = await getDatabase();
  return await database
    .collection(collectionName)
    .find({
      device: device,
    })
    .limit(parseInt(count))
    .sort({
      $natural: -1,
    })
    .toArray();
}
