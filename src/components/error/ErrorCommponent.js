import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();

  return (
    <>
      <div className="text-3xl font-mono p-64 ml-96">Somthing went wrong !</div>
      <p className="text-1xl font-mono p-10">
        {errorData.statusText ? errorData.statusText : errorData.message}
      </p>
    </>
  );
};

export default ErrorComponent;
