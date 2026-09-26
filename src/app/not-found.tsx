import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#2B303D] bg-[#14171E]">
        <span className="text-4xl font-bold text-[#C8FF00]">404</span>
      </div>

      <h1 className="mt-7 text-4xl font-bold tracking-wide text-white">
        PAGE NOT FOUND
      </h1>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#8A92A0]">
        Looks like this workout took a rest day. The page you are looking for
        does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-7 rounded-full bg-[#C8FF00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#baf000]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;
