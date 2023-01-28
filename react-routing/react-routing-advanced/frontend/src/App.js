// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { manipulateEventAction } from "./components/EventForm";
import EditEvent from "./Pages/EditEvent";
import ErrorPage from "./Pages/Error";
// import Event from "./Pages/Event";
import EventDetails, { eventDetailsAction, eventDetailsLoader } from "./Pages/EventDetails";
import EventRoot from "./Pages/EventRoot";
import Events, { eventsLoader } from "./Pages/Events";
import Home from "./Pages/Home";
import NewEvent from "./Pages/NewEvent";
import NewsletterPage, { newsletterAction } from "./Pages/Newsletter";
import Root from "./Pages/Root";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction
          },
          {
            path: ":eventId",
            loader: eventDetailsLoader,
            id:'event-detail',
            children: [
              {
                index: true,
                element: <EventDetails />,
                action: eventDetailsAction
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction
              },
            ],
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
