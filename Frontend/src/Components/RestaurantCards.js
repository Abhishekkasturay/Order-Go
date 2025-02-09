import { CDN_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData.info;
  const { slaString } = resData.info.sla;

  return (
    <div className="m-4 p-4 w-[270px] rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      {/* Restaurant Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full h-[150px] object-cover rounded-xl"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      {/* Restaurant Info */}
      <div className="mt-3">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>

        <div className="flex items-center justify-between mt-2">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-md ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-sm text-gray-600">{slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
