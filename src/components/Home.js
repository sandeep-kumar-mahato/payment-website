import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row p-12">
      <div className="md:w-1/2">
        {/* Content */}
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Donate for Good: Inspire, Transform, Empower
          </h2>
          <p className="mt-4 mb-8 text-lg">
            Donate for Good is a platform that aims to inspire, transform, and
            empower individuals to make a positive impact through their
            donations. By connecting generous donors with meaningful causes, we
            strive to create a ripple effect of change in communities and lives.
            Together, we can make a difference and contribute towards building a
            better world for all.
          </p>
          <Link
            to="/payment"
            className="text-gray-300 bg-gray-700 hover:text-white px-8 py-4 mt-4 rounded-md text-sm font-medium"
          >
            Donate
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        {/* Image */}
        <img
          src="https://tinyurl.com/2bljnbot"
          alt="Children"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
