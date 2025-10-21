import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container flex">
        <RestaurantCard
          restName="Pizza"
          cousins="Biryani"
          rating="4.4"
          time={38}
        />
        <RestaurantCard
          restName="Margerita"
          cousins="Biryani"
          rating="4.4"
          time={38}
        />
        <RestaurantCard
          restName="Pizza"
          cousins="Biryani"
          rating="4.4"
          time="38"
        />
      </div>
    </div>
  );
};
