import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-800">
      <h1>Oops !!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
      <h3>{err.error.message}</h3>
    </div>
  );
}

export default Error;
