import { Link } from "react-router-dom";

const ExploreTfbButton = () => {
  return (
    <div className="md:mt-8 sm:mt-6 text-center">
      <Link to="/truefashionbd">
        <button className="group w-full bg-fuchsia-950 text-white py-3 px-6 text-lg font-semibold hover:bg-fuchsia-800 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
           <h5> Explore  <i> True Fashion BD</i></h5>
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <span className="text-xs italic mt-1 tracking-wide">
            A sister concern of <a
              href="/"
              className="font-semibold text-white text-sm"
            >
              Trade Fast International
            </a>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ExploreTfbButton;
