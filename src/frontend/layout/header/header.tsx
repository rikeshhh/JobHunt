import React from "react";

export const Header = () => {
  return (
    <header className="header container mx-auto">
      <div className="flex justify-between py-8">
        <div className="flex">
          <figure></figure>
          <div className="">
            <h1>Job Hunt</h1>
          </div>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>Find Jobs</li>
            <li>News</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
