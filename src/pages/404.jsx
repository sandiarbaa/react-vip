import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error);
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
