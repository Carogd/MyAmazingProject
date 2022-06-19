import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from  "next/router"

function NewMeetupPage() {
  
  const router = useRouter();
  
  async function onAddMeetupHandler(newMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    router.push("/");
  }

  return <NewMeetupForm onAddMeetupTest={onAddMeetupHandler} />;
}

export default NewMeetupPage;
