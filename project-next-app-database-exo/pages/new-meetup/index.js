import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function onAddMeetupHandler(newMeetupData) {
    //  console.log(newMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    console.log('data test',data);
  }

  return <NewMeetupForm onAddMeetupTest={onAddMeetupHandler} />;
}

export default NewMeetupPage;
