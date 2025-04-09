import React from "react";
import Table from "./Table";

const Auctions = () => {
  return (
    <div className="m-10 ">
      <h1 className="font-bold my-3">Active Auctions</h1>
      <p className="text-gray-400 mb-5">
        Discover and bid on extraordinary items.
      </p>
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-4 ">
          <div className="flex justify-between p-5 border-2 rounded-lg">
            {/* Table */}
            <Table></Table>
          </div>
        </div>
        <div className="col-span-2 border-2 p-3 rounded-lg text-center">
          <h3 className="font-bold">❤️ Favourite Items</h3>
          <div className="divider"></div>
          <h5 className="font-bold">No favourites yet</h5>
          <p className="text-gray-500 my-3">
            Click the heart icon any item <br /> to add it to your favourites.
          </p>
          <div className="divider"></div>
          <div className="flex justify-between items-center px-5 font-bold">
            <h6>Total bids amount</h6>
            <h6>$0000</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
