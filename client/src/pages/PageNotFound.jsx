import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="min-h-[100vh] bg-slate-50 text-slate-900 pt-[100px] dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div
          className="relative mx-auto h-[400px] w-full bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        >
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold text-slate-900 dark:text-slate-100">
            404
          </h1>
        </div>

        <div className="-mt-12">
          <h3 className="text-4xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
            Looks like you're lost
          </h3>
          <p className="mb-6 text-slate-600 dark:text-slate-400">
            The page you are looking for is not available.
          </p>

          <Link
            to="/"
            className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-500"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
