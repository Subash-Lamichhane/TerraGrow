import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Component() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const cropMapping = {0: 'apple', 1: 'banana', 2: 'blackgram', 3: 'chickpea', 4: 'coconut', 5: 'coffee', 6: 'cotton', 7: 'grapes', 8: 'jute', 9: 'kidneybeans', 10: 'lentil', 11: 'maize', 12: 'mango', 13: 'mothbeans', 14: 'mungbean', 15: 'muskmelon', 16: 'orange', 17: 'papaya', 18: 'pigeonpeas', 19: 'pomegranate', 20: 'rice', 21: 'watermelon'};

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      N: parseFloat(event.target.nitrogen.value),
      P: parseFloat(event.target.phosphorus.value),
      K: parseFloat(event.target.potassium.value),
      temperature: parseFloat(event.target.temperature.value),
      humidity: parseFloat(event.target.humidity.value),
      ph: parseFloat(event.target.ph.value),
      rainfall: parseFloat(event.target.rainfall.value),
    };

    try {
      const response = await fetch("http://localhost:3000/predict-crop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [formData] }),
      });

      const data = await response.json();

      if (data.labelExplain && data.labelExplain.predicted_value !== undefined) {
        const predictedCrop = cropMapping[data.labelExplain.predicted_value];
        data.labelExplain.predicted_crop = predictedCrop;
      }

      setResults(data.labelExplain);
      setLoading(false);
      setShowResults(true);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <Navbar />
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
                        required
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
                        required
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
                        required
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
                        max={14}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
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
                        required
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
                        required
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
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="mt-auto py-2 px-4 bg-black text-white rounded-md">
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Analyze"
                )}
              </button>
            </form>
          </div>
          {showResults && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Analysis Results</h3>
                <div className="text-center">
                  <label className="text-xl font-medium text-gray-600">You should plant:</label>
                  <div className="mt-1 p-3 rounded-lg text-green-700 font-bold text-4xl uppercase" >
                    {results.predicted_crop}
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  {[
                    { label: "Confidence", value: results.confidence },
                    { label: "Confidence Lower Bound", value: results.confidence_lower_bound },
                    { label: "Confidence Upper Bound", value: results.confidence_upper_bound }
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <label className="text-sm font-medium text-gray-600">{label}</label>
                      <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-800 font-medium">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-8 w-full py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  onClick={() => setShowResults(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
