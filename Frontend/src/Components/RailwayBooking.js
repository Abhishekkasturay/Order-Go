import React, { useState } from "react";
import launcher from "../../public/home_page_banner1.e6749c3d9698d1ac7608.jpg"; // Ensure this path is correct
import TrainData from "../utils/mockRailwayData"; // Ensure TrainData is an array of train objects

const RailwayBooking = () => {
  const [formData, setFormData] = useState({
    from: "VGLJ",
    to: "NDLS",
    date: "",
    class: "GENERAL",
    disability: false,
    flexible: false,
    availableBerth: false,
    railwayPass: false,
  });
  const [trainList, setTrainList] = useState(TrainData);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const { from, to, date } = formData;

    if (!Array.isArray(trainList)) {
      setError("Train data is not an array");
      return;
    }

    const dayOfWeek = new Date(date).toLocaleString("en-US", {
      weekday: "short",
    });
    const dayMap = {
      Mon: "runningMon",
      Tue: "runningTue",
      Wed: "runningWed",
      Thu: "runningThu",
      Fri: "runningFri",
      Sat: "runningSat",
      Sun: "runningSun",
    };

    const filteredData = trainList.filter(
      (train) =>
        train.fromStnCode.toLowerCase().includes(from.toLowerCase()) &&
        train.toStnCode.toLowerCase().includes(to.toLowerCase()) &&
        train[dayMap[dayOfWeek]] === "Y"
    );

    if (filteredData.length === 0) {
      setError("No trains found matching your criteria.");
    } else {
      setError(null);
    }

    setFilteredTrains(filteredData);
    setCurrentPage(1); // Reset to the first page on new search
  };

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTrains.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handleNextPage = () => {
    if (indexOfLastItem < filteredTrains.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div
      id="main"
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "rgba(50%, 50%, 50%, 0.1)", // Optional background color
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${launcher})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1, // Adjust opacity here
          zIndex: -1,
        }}
      ></div>

      <div id="Banner">
        <div id="nav" style={{ display: "none" }}>
          {/* Content for #nav */}
        </div>
        <div id="nav2" style={{ display: "none" }}>
          {/* Content for #nav2 */}
        </div>
      </div>
      <div id="middlepage" style={{ marginLeft: "30px" }}>
        <div
          id="instruction"
          style={{
            position: "absolute",
            top: "140px",
            left: "990px",
            right: "0px",
            zIndex: "1",
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-wrap flex-col justify-center">
            <label className="railway p-4 font-black">INDIAN RAILWAYS</label>
            <label className="ins font-black">
              Safety | Security | Punctuality
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start h-screen bg-gray-100 bg-opacity-80 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">BOOK TICKET</h2>

          <div className="mb-2">
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">Date of Journey</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="GENERAL">GENERAL</option>
              <option value="SLEEPER">SLEEPER</option>
              <option value="AC">AC</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="disability"
                checked={formData.disability}
                onChange={handleChange}
                className="mr-2"
              />
              Person With Disability Concession
            </label>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="flexible"
                checked={formData.flexible}
                onChange={handleChange}
                className="mr-2"
              />
              Flexible With Date
            </label>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="availableBerth"
                checked={formData.availableBerth}
                onChange={handleChange}
                className="mr-2"
              />
              Train with Available Berth
            </label>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="railwayPass"
                checked={formData.railwayPass}
                onChange={handleChange}
                className="mr-2"
              />
              Railway Pass Concession
            </label>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded"
            >
              Search
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => alert("Easy Booking on AskDISHA")}
            >
              Easy Booking on AskDISHA
            </button>
          </div>
        </form>

        {filteredTrains.length > 0 && (
          <div className="train-data p-4 bg-white rounded shadow-md w-full max-w-md ml-8">
            <h2 className="text-xl font-bold mb-4">Available Trains</h2>
            <ul className="space-y-2">
              {currentItems.map((train) => (
                <li
                  key={train.trainNumber}
                  className="p-2 border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="font-semibold text-lg">{train.trainName}</div>
                  <div className="text-gray-700">
                    {train.fromStnCode} ({train.departureTime}) -{" "}
                    {train.toStnCode} ({train.arrivalTime})
                  </div>
                  <div className="text-gray-500">
                    Type: {train.trainType.join(", ")}
                  </div>
                  <div className="text-gray-500">
                    Travel Time: {train.duration}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={indexOfLastItem >= filteredTrains.length}
                className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="text-center mt-4 text-red-500">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default RailwayBooking;
