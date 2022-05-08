import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, adress, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://carolinegd:Vegan122@cluster0.alun4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("myFirstDatabase");

    const result = await meetupsCollection.insertOne(data);
    console.log('result' , result);
    client.close();
    res.status(201).json({ message: "data inserted!" });
  }
}

export default handler;
