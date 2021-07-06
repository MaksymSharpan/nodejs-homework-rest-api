const {MongoClient} = require('mongodb');
const dotenv = require('dotenv')


dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME

const MONGO_URL = `mongodb+srv://admin:${DB_PASSWORD}@cluster0.xtpxa.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

async function start() {
  const client = await MongoClient.connect(MONGO_URL)
  const db = client.db()

  const users = db.collection('users');
  const data = await users.find().toArray();
  console.log(data);
}

start();

