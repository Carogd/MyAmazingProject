import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
// import Link from "next/link";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  // console.log("props test", props);
  function showDetailsHandler(props) {
    router.push("/" + props.id);
  // console.log("props.id test", id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={showDetailsHandler}>
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
