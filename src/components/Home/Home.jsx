import { Link } from "react-router-dom";
import CoverImg from "../../assets/assets/Banner-min.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${CoverImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center flex justify-between items-center">
          <div className="max-w-md flex flex-col items-start mr-[600px]">
            <h1 className="mb-5 text-3xl font-bold text-left">
              Bid in Unique Items from <br />
              Around the World.
            </h1>
            <p className="mb-5 text-gray-400 text-left">
              Discover rare collectibles, luxury goods and vintage <br />
              treasures in our curated auctions.
            </p>
            <Link to="/details">
              <button className="btn btn-outline rounded-full">
                Explore Auctions
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="m-10 ">
        <h1 className="font-bold my-3">Active Auctions</h1>
        <p className="text-gray-400 mb-5">
          Discover and bid on extraordinary items.
        </p>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4 ">
            <div className="flex justify-between p-5 pr-10 border-2 rounded-lg">
              <h5 className="font-bold">Items</h5>
              <h5 className="font-bold">Current Bid</h5>
              <h5 className="font-bold">Time Left</h5>
              <h5 className="font-bold">Bid Now</h5>
            <div className="divider"></div>
            </div>
          </div>
          <div className="col-span-2">
            <h3>laskjfdlaksdjf</h3>
            <h3>laskjfdlaksdjf</h3>
            <h3>laskjfdlaksdjf</h3>
            <h3>laskjfdlaksdjf</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
