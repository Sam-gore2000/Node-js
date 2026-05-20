import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/sam_user");

try {
  await client.connect();

  console.log("Connected");

  const db = client.db("sam_user");

  const userCollection = db.collection("users");

  const result = await userCollection.insertOne({
    name: "Sam Patil",
    age: 26,
    email: "sampatil1010@gmail.com",
  });

  console.log(result);

} catch (error) {
  console.log(error);
}