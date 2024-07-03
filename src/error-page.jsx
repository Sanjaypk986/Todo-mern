import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <div id="error-page" className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
          <p className="text-lg text-gray-700 mb-4">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="italic text-gray-600 mb-8">
            <i>{error?.statusText || error?.message}</i>
          </p>
          <a
            href="/"
            className="block w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
