import { Link } from "react-router-dom";
import CoverImg from "../../assets/assets/Banner-min.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${CoverImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-start">
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
      {/*  */}
      <div>
        <h1 className="font-bold ">Active Auctions</h1>
        <p className="text-gray-400">Discover and bid on extraordinary items.</p>
      </div>
    </div>
  );
};

export default Home;
{
  /* */
}
