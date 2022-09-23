import React from "react";
import { Link } from "react-router-dom";

export default function NotAuthed() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-tr from-indigo-500 to-blue-800">
        <div className="flex flex-col justify-center items-center md:w-1/3 p-4 bg-white rounded-md shadow-sm">
          <h1 className="text-black font-medium">
            You Are Not Authed to be here.
          </h1>
          <p className="text-gray-500 font-light  mt-2 mb-5">
            Please Sign in and try again
          </p>
          <button className="w-full h-12 rounded-md shadow-sm text-white bg-blue-600 ">
            <Link to={"/signin"}>Sign In Now</Link>
          </button>
        </div>
      </div>
    </>
  );
}
