import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {

const {resData}=props;

const {name,cuisines,avgRating,deliveryTime,offer} = resData

  return (
    <div className="res-card h-90 w-75 bg-gray-300 border-1 mt-5 ml-5 hover:border-2 cursor-pointer gap-1.5 overflow-hidden">
      <img
        className="h-40  rounded-2xl p-1 w-full object-cover"
        src={CDN_URL}
        alt="restaurant"
      />
      <h1 className="pl-2 text-xl">{name}</h1>
      <h4 className="pl-2">Cuisines: {cuisines}</h4>
      <h4 className="pl-2">Rating: {avgRating}</h4>
      <h4 className="pl-2">Delivery Time: {deliveryTime}</h4>
      <h4 className="pl-2">Offer: {offer}</h4>
    </div>
  );
};

export default RestaurantCard;
