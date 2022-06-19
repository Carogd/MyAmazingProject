import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function DetailsPage(props) {
  return (
    <MeetupDetails
      address={props.detailsMeetups.address}
      title={props.detailsMeetups.title}
      image={props.detailsMeetups.image}
      description={props.detailsMeetups.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://carolinegd:Vegan122@cluster0.alun4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("myFirstDatabase");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://carolinegd:Vegan122@cluster0.alun4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("myFirstDatabase");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      detailsMeetups: {
        id: selectedMeetups._id.toString(),
        address: selectedMeetups.address,
        title: selectedMeetups.title,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
      },
    },
  };
}

export default DetailsPage;
