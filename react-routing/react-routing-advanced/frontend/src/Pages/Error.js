import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "Requested Page Not Found.";
  let message = "Page requested in url does not exist.";

  if (error.status === 500) {
    message = error.data.message;
  }
  return (
    <main>
      <MainNavigation />  
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </main>
  );
};

export default ErrorPage;
