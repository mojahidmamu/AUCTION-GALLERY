import { Link } from "react-router-dom";
import CoverImg from "../../assets/assets/Banner-min.jpg";
import Auctions from "../Auctions/Auctions";

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
      {/* Auction Table */}
      <Auctions></Auctions>
    </div>
  );
};

export default Home;
