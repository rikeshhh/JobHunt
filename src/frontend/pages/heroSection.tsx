import React from "react";
import { Button } from "@mui/material";

export const HeroSection = () => {
  return (
    <section className="herosection container mx-auto py-28 flex flex-col gap-8">
      <div className="text-9xl font-black">
        <h2>Explore open career</h2>
        <h2>Oppourtuniteis.</h2>
      </div>
      <span>
        We commit to exceptional company culture and outstanding benefits
      </span>
      <div className="bg-custom-white rounded-lg flex justify-between items-center border w-2/4 py-4 px-4">
        <div className="w-96 font-black text-xl">
          <h2>Find The Job That Best Suits YOU.</h2>
        </div>
        <select name="" id="">
          <option value="">Kathmandu</option>
          <option value="">Pokhara</option>
        </select>
        <Button variant="contained">Contained</Button>
      </div>
      <div className="flex  justify-between gap-4 w-1/3">
        <Button variant="contained" className="w-full">
          Discovered Recent News
        </Button>
        <Button variant="contained" className="w-full">
          Know Our Process
        </Button>
      </div>
    </section>
  );
};
