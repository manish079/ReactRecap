export const RestaurantCard = ({ restName, cousins, rating, time }) => {
  return (
    <div className="rest-cards">
      <img
        className="rest-card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/11/c2b51c1e-2578-46a3-976c-8b92f18af279_cd9bd969-c85d-442a-9e8d-6a805ed49a04.png_compressed"
      />
      <h3>{restName}</h3>
      <h4>{cousins}</h4>
      <h4>{rating} stars</h4>
      <h4>{time} minutes</h4>
    </div>
  );
};
