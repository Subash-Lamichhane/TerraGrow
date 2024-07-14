import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Component() {
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  return (
    <>
    <div className="flex flex-col justify-between">
      <Navbar/>
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-md rounded-md my-24">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Soil & Environment Analysis</h2>
        <p className="text-gray-600">
          Enter your soil and environmental data to get personalized plant recommendations.
        </p>
      </div>
      <div>
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="nitrogen" className="text-sm font-medium">
                    Nitrogen (N)
                  </label>
                  <input
                    id="nitrogen"
                    type="number"
                    placeholder="Nitrogen content"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phosphorus" className="text-sm font-medium">
                    Phosphorus (P)
                  </label>
                  <input
                    id="phosphorus"
                    type="number"
                    placeholder="Phosphorus content"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="potassium" className="text-sm font-medium">
                    Potassium (K)
                  </label>
                  <input
                    id="potassium"
                    type="number"
                    placeholder="Potassium content"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="ph" className="text-sm font-medium">
                    pH
                  </label>
                  <input
                    id="ph"
                    type="number"
                    placeholder="Soil pH"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="temperature" className="text-sm font-medium">
                    Temperature
                  </label>
                  <input
                    id="temperature"
                    type="number"
                    placeholder="Average temperature"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="humidity" className="text-sm font-medium">
                    Humidity
                  </label>
                  <input
                    id="humidity"
                    type="number"
                    placeholder="Average humidity"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="rainfall" className="text-sm font-medium">
                  Rainfall
                </label>
                <input
                  id="rainfall"
                  type="number"
                  placeholder="Average rainfall"
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="mt-auto py-2 px-4 bg-black text-white rounded-md">
            Analyze
          </button>
        </form>
      </div>
      {showResults && (
        <div className="mt-6">
          <div className="grid gap-2">
            <label htmlFor="plant-recommendations" className="text-sm font-medium">
              Plant Recommendations
            </label>
            <div
              id="plant-recommendations"
              className="border border-gray-300 p-2 rounded-md h-32 overflow-y-auto"
            >
              Based on your soil and environmental data, we recommend the following plants...
            </div>
          </div>
          <div className="grid gap-2 mt-4">
            <label htmlFor="yield-suggestions" className="text-sm font-medium">
              Yield Suggestions
            </label>
            <div
              id="yield-suggestions"
              className="border border-gray-300 p-2 rounded-md h-32 overflow-y-auto"
            >
              To improve your yield, consider the following suggestions...
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
    </>
  );
}
