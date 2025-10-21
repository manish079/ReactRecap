export const RestaurantCard = ({ resData }) => {
  return (
    <div className="rest-cards">
      <img
        className="rest-card-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.cloudinaryImageId}`}
        alt="restaurant"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
  );
};
