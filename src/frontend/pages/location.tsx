import React from "react";
import OutlinedCard from "../../component/card";

export const Location = () => {
  return (
    <section className="location container mx-auto">
      <div className="flex justify-between">
        <div>
          <h2>Find Your Team</h2>
        </div>
        <div>View All Teams</div>
      </div>
      <div className="flex flex-wrap w-full justify-between">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <OutlinedCard key={index} />
          ))}
      </div>
    </section>
  );
};
