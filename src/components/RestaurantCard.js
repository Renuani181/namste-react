import React from 'react';

const RestaurantCard = (props) => {
    const { restData } = props;
    console.log("debug error", restData);
    const {
        name,
        cuisine,
        rating,
        deliveryTime,
        logo
    } = restData;

    return (
        <div className="rest-card">
            <img
                className="rest-logo"
                alt="rest-logo"
                src={logo}
            />
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};
export default RestaurantCard;