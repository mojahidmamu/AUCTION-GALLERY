import { Link } from "react-router-dom";
import CoverImg from "../../assets/assets/Banner-min.jpg";

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex flex-row justify-around items-center gap-40 lg:flex-row-reverse  ">
        <div>
          <img src={CoverImg} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-red-700">Auction </span>Gallery <br />{" "}
            <span className="ml-28 text-green-700">Occation</span> !
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut
            assumenda
          </p>
          <Link to="/details">
            <button className="btn btn-primary">View Details</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
