import { Link } from "react-router-dom";

const ExploreTfbButton = () => {
  return (
    <div className="text-center sm:pt-4 md:pt-0">
      <Link to="/truefashionbd">
        <button className="group w-full bg-gray-200 text-black py-4 px-6 lg:text-3xl  hover:bg-gray-300 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
           <h5> Explore  <i className="font-semibold"> True Fashion BD</i></h5>
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
              className="font-semibold text-sm"
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
