import { useRouteError } from "react-router";

export const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <h1>
        {err.status}, {err.statusText}
      </h1>
      <h1>{err.error.message}</h1>
    </div>
  );
};
