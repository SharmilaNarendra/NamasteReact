import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const errorData = useRouteError();

  return (
    <div className="no-results">Somthing went wrong !
    <p>{errorData.statusText || errorData.mesage}</p>
    </div>

  )
};

export default ErrorComponent;
