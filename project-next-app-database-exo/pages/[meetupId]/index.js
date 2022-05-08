import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetail";

function DetailsPage() {
  return (
    <MeetupDetails
      description="this is the first meetup"
      address="67 rue de la pluseive"
      title="Bordeaux"
      image="https://static-otelico.com/cache/bordeaux_home/France_Bordeaux_3840x2160.jpg"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "id1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data here
  const meetupId = context.params.meetupId;

  return {
    props: {
      detailsMeetups: {
        id: meetupId,
        description: "this is the first meetup",
        address: "67 rue de la pluseive",
        title: "Bordeaux",
        image:
          "https://static-otelico.com/cache/bordeaux_home/France_Bordeaux_3840x2160.jpg",
      },
    },
  };
}

export default DetailsPage;
