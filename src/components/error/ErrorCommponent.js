import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();

  return (
    <>
      <div className="no-results">Somthing went wrong !</div>
      <p class="no-results">
        {errorData.statusText ? errorData.statusText : errorData.message}
      </p>
    </>
  );
};

export default ErrorComponent;
