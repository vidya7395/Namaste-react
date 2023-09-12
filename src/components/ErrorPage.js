import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>{err}</p>
    </div>
  );
};

export default ErrorPage;
