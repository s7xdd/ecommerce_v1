import React, { useState } from "react";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold mb-2">NEWSLETTER</h1>
        <p>
          be the first to know about our newest <br />
          arrivals, special offers and store events <br />
          near you
        </p>
      </div>
      {loading ? (
        <div className="mt-5">
          Signing up
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="text"
            className="max-w-[250px] mb-2 mt-5 border-b rounded-md"
            placeholder="Enter your email address"
          />
          <button className="p-3 mt-3" onClick={handleClick}>
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
