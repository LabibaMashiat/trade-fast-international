import { Link } from "react-router-dom";

const GobackButton = () => {
  return (
    <div className="text-center sm:pt-4 md:pt-0">
      <Link to="/">
        <button className="group w-full bg-gray-200 text-black lg:py-4 py-8 px-6 lg:text-3xl hover:bg-gray-300 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            {/* ⬅️ Moved SVG to the left of the text and flipped arrow */}
            <svg
              className="mr-2 w-5 h-5 transform group-hover:-translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <h5>
              Go back to <i className="font-semibold">Trade Fast International</i>
            </h5>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default GobackButton;
