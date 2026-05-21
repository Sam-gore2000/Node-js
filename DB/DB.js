import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/sam_user");

try {
  await client.connect();

  console.log("Connected");

  const db = client.db("sam_user");

  const userCollection = db.collection("users");
// Add Data
  
  // const result = await userCollection.insertOne({
  //   name: "Sam Patil",
  //   age: 26,
  //   email: "sampatil1010@gmail.com",
  // });


//   const result = await userCollection.insertMany([{
//     name: "Sam Patil",
//     age: 26,
//     email: "sampatil1010@gmail.com",
//   },
//   {
//     name: "mamu Patil",
//     age: 27,
//     email: "mamupatil1010@gmail.com",
//   },
//   {
//     name: "Member Patil",
//     age: 29,
//     email: "memberpatil1010@gmail.com",
//   }
// ]);


// Read Data
  //  const result=await  userCollection.find().toArray()
  // console.log(result);

  // update data

  // userCollection.updateOne({name:"Member Patil"},{$set:{age:45}})

  // Delete Data
  userCollection.deleteOne({name:"Sam Patil"})

} catch (error) {
  console.log(error);
}