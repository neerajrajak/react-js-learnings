import { Suspense } from "react";
import { Await, defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetails = () => {
  // const data = useLoaderData();

  const { event, events } = useRouteLoaderData("event-detail");

  return (
    // <>
    //   <h2>Event Details on: </h2>
    //   <p>{params.eventName}</p>
    //   <p><Link to=".." relative="path">Go to previous page</Link></p>
    // </>
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={event}>
        { (loadedEvent)=> <EventItem event={loadedEvent} /> }
      </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        { (loadedEvents)=> <EventsList events={loadedEvents}/>}
      </Await>
      </Suspense>
    </>
  );
};

export default EventDetails;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch your events." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

const loadEvent = async (eventId) => {
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch requested event details" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
};
export const eventDetailsLoader = async ({ request, params }) => {
  const eventId = params.eventId;

  return defer({
    event: await loadEvent(eventId),
    events: loadEvents()
  })
};

export const eventDetailsAction = async ({ params, request }) => {
  debugger;
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete action." }, { status: 500 });
  } else {
    return redirect("/events");
  }
};
