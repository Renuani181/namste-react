// In Body.js
import RestaurantCard from './RestaurantCard';
import { useState } from "react";
import Shimmer from './Shimmer';



const Body =( ) =>{
const [ListRestaurants, setListRestaurants] = useState([    {
    
                "id": 1,
                "name": "Wildberry Pancake House",
                "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194211/Burger-King.png",
                "cuisine": ["Breakfast", "American"],
                "rating": 5.0,
                "deliveryTime": "37 minutes",
     },
     {
                        "id": 2,
                        "name": "Sushi Paradise",
                        "logo": "https://www.sushitaku.com/wp-content/uploads/2024/04/P1002987-1024x638.webp",
                        "cuisine": ["Japanese", "Sushi"],
                        "rating": 4.7,
                        "deliveryTime": "45 minutes",
                        
                    },
                    {
                                    "id": 4,
                                    "name": "Pizza Haven",
                                    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/640px-Pizza-3007395.jpg",
                                    "cuisine": ["Italian", "Pizza"],
                                    "rating": 4.5,
                                    "deliveryTime": "30 minutes",
                    },
                    {
                                    "id": 5,
                                    "name": "BBQ Feast",
                                    "logo": "https://thumbs.dreamstime.com/b/bbq-party-vector-sign-white-background-336211379.jpg",
                                    "cuisine": ["Barbecue", "American"],
                                    "rating": 4.9,
                                    "deliveryTime": "50 minutes",
                    },
                    {
                                    "id": 6,
                                    "name": "Taco Fiesta",
                                    "logo": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371603491866.webp",
                                    "cuisine": ["Mexican", "Tacos"],
                                    "rating": 4.6,
                                    "deliveryTime": "20 minutes",
                    },
                    
                        {
                            "id": 7,
                            "name": "Burger Barn",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJLayPFD5M_uLOaPQfYLmMACYyGztPc3Guw&s",
                            "cuisine": ["Fast Food", "Burgers"],
                            "rating": 4.3,
                            "deliveryTime": "25 minutes"
                        },
                        {
                            "id": 8,
                            "name": "Pasta Palace",
                            "logo": "https://s3-media0.fl.yelpcdn.com/bphoto/XIqzjlFWUOHaqqnBc7sGLA/348s.jpg",
                            "cuisine": ["Italian", "Pasta"],
                            "rating": 4.8,
                            "deliveryTime": "40 minutes"
                        },
                        {
                            "id": 9,
                            "name": "Ramen House",
                            "logo": "https://www.courier-journal.com/gcdn/presto/2019/10/21/PLOU/d7d10801-1da9-49d3-aeb4-1e937d3a93ea-1009DINE_RamenHouse14_DRL.JPG?width=1200&disable=upscale&format=pjpg&auto=webp",
                            "cuisine": ["Japanese", "Ramen"],
                            "rating": 4.7,
                            "deliveryTime": "30 minutes"
                        },
                        {
                            "id": 10,
                            "name": "Steak & Grill",
                            "logo": "https://www.southernliving.com/thmb/4H-D0c6Wlrd3EaoZC77DcbTEJwI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/356396436_1313933279334556_313904489405425146_n-21b6a55f7ecb4802bf5f79d4e503170e.jpg",
                            "cuisine": ["Steak", "Grill"],
                            "rating": 5.0,
                            "deliveryTime": "45 minutes"
                        },
                        {
                            "id": 11,
                            "name": "Vegan Delights",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC8qzUwZbabHRrJGb1NedOd9yvJXKWK3UjQ&s",
                            "cuisine": ["Vegan", "Healthy"],
                            "rating": 4.4,
                            "deliveryTime": "35 minutes"
                        },
                        {
                            "id": 12,
                            "name": "The Sushi Spot",
                            "logo": "https://www.sushitaku.com/wp-content/uploads/2024/04/P1002987-1024x638.webp",
                            "cuisine": ["Japanese", "Sushi"],
                            "rating": 4.6,
                            "deliveryTime": "50 minutes"
                        },
                        {
                            "id": 13,
                            "name": "Chick-fil-A",
                            "logo": "https://tb-static.uber.com/prod/image-proc/processed_images/3c399b12da9bd23252feaf0289610cbc/30be7d11a3ed6f6183354d1933fbb6c7.jpeg",
                            "cuisine": ["Fast Food", "Chicken"],
                            "rating": 4.2,
                            "deliveryTime": "20 minutes"
                        },
                        {
                            "id": 14,
                            "name": "Sushi Express",
                            "logo": "https://www.sushitaku.com/wp-content/uploads/2024/04/P1002987-1024x638.webp",
                            "cuisine": ["Japanese", "Sushi"],
                            "rating": 4.9,
                            "deliveryTime": "30 minutes"
                        },
                        {
                            "id": 15,
                            "name": "Dim Sum Delight",
                            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgs1STET0ZkSa1Vh08rEp7eAD-5QxvMHkDg&s",
                            "cuisine": ["Chinese", "Dim Sum"],
                            "rating": 4.5,
                            "deliveryTime": "40 minutes"
                        },
                        {
                            "id": 16,
                            "name": "Fried Chicken Shack",
                            "logo": "https://www.therusticelk.com/wp-content/uploads/2018/09/southern-fried-chicken-1-720x540.jpg",
                            "cuisine": ["American", "Fried Chicken"],
                            "rating": 4.3,
                            "deliveryTime": "25 minutes"
                        }
                    ]
                    
        );

        if (ListRestaurants.length === 0) {
            console.log('Rendering Shimmer...');
            return <Shimmer />;
          }
        const filterTopRated = () => {
            // Access rating directly on res object (no .data)
            const filteredList = ListRestaurants.filter(
                (res) => res.rating > 4.5
            );
            setListRestaurants(filteredList); // Update the state with filtered results
        };
    
        return (
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={filterTopRated}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="rest-container">
                    {ListRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restData={restaurant} />
                    ))}
                </div>
            </div>
        );
    };
    
    export default Body;
