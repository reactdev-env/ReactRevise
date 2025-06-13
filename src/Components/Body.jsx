import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import resObj from "../utils/resObj";// adjust path if needed

const Body = () => {
  return (
    <div className="body">
      <div className="search ml-3.5 mt-2.5">
        <SearchBar />
      </div>
      <div className="res-container flex flex-row flex-wrap">
        {resObj.data.map((e) => (
          <RestaurantCard key={e.id} resData={e} />
        ))}
      </div>
    </div>
  );
};

export default Body;
