import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | DevOps Minders</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="relative flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center text-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E80112]/[0.03] blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="inline-block text-6xl font-extrabold tracking-tight text-[#E80112] sm:text-7xl">
            404
          </span>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Page Not Found
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            The page you are looking for doesn't exist or has been moved. Explore our core services or return to the homepage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#E80112] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#c5010f]"
            >
              <Home size={16} />
              Back to Home
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#E80112]/30 hover:bg-slate-50"
            >
              <ArrowLeft size={16} />
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

