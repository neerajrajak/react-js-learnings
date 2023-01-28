import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    // <>
    //   <h2>Edit Details</h2>
    //   <p>Event Id: {params.eventId}</p>
    // </>
    <EventForm event={data.event} method="patch"/>
  );
};

export default EditEvent;
