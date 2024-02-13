import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="p-3">
        <h1 className="text-6xl font-bold dark:text-white text-black">
          Error 404
        </h1>
        <p>
          The requested URL {location.pathname} was not found on this server.
        </p>
      </div>
    </div>
  );
}
