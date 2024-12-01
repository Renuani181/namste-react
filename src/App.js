import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";



// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img
//                     className="logo"
//                     src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
//                 />
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Cart</li>
//                     <li>Contact us</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
// const RestaurantCard = ({ resData }) => {
//     return (
//         <div className="rest-card">
//             <img
//                 className="rest-logo"
//                 alt="rest-logo"
//                 src={resData.logo}
//             />
//             <h3>{resData.name}</h3>
//             <h4>{resData.cuisine.join(", ")}</h4>
//             <h4>{resData.rating} stars</h4>
//             <h4>{resData.deliveryTime}</h4>
//         </div>
//     );
// };

// const resObj =

// {
//     "restaurants": [
//         {
//             "id": 1,
//             "name": "Wildberry Pancake House",
//             "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194211/Burger-King.png",
//             "cuisine": ["Breakfast", "American"],
//             "rating": 5.0,
//             "deliveryTime": "37 minutes",
//             "menu": [
//                 {
//                     "itemId": 101,
//                     "itemName": "Wildberry Pancakes",
//                     "price": 12.99,
//                     "description": "Fluffy pancakes topped with fresh wild berries and whipped cream."
//                 },
//                 {
//                     "itemId": 102,
//                     "itemName": "EggToast",
//                     "price": 8.99,
//                     "description": "Toasted bread topped with scrambled eggs and avocado."
//                 },
//                 {
//                     "itemId": 103,
//                     "itemName": "Latte",
//                     "price": 4.50,
//                     "description": "Smooth espresso with steamed milk and a touch of foam."
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "name": "Green Bowl Eatery",
//             "logo": "https://gmrencen.com/wp-content/uploads/2016/03/panera_holdingshape_lockup_NO_R-1024x977.jpg",
//             "cuisine": ["Healthy", "Vegan"],
//             "rating": 4.8,
//             "deliveryTime": "25 minutes",
//             "menu": [
//                 {
//                     "itemId": 201,
//                     "itemName": "Vegan Salad Bowl",
//                     "price": 10.99,
//                     "description": "A refreshing salad with kale, quinoa, cherry tomatoes, and avocado."
//                 },
//                 {
//                     "itemId": 202,
//                     "itemName": "Smoothie Bowl",
//                     "price": 9.50,
//                     "description": "A mix of berries, banana, and granola topped with coconut shavings."
//                 }
//             ]
//         },
//         {
//             "id": 3,
//             "name": "Sushi Paradise",
//             "logo": "https://www.sushitaku.com/wp-content/uploads/2024/04/P1002987-1024x638.webp",
//             "cuisine": ["Japanese", "Sushi"],
//             "rating": 4.7,
//             "deliveryTime": "45 minutes",
//             "menu": [
//                 {
//                     "itemId": 301,
//                     "itemName": "California Roll",
//                     "price": 8.99,
//                     "description": "Classic sushi roll with crab, avocado, and cucumber."
//                 },
//                 {
//                     "itemId": 302,
//                     "itemName": "Salmon Nigiri",
//                     "price": 12.50,
//                     "description": "Fresh salmon atop sushi rice."
//                 }
//             ]
//         },
//         {
//             "id": 4,
//             "name": "Pizza Haven",
//             "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/640px-Pizza-3007395.jpg",
//             "cuisine": ["Italian", "Pizza"],
//             "rating": 4.5,
//             "deliveryTime": "30 minutes",
//             "menu": [
//                 {
//                     "itemId": 401,
//                     "itemName": "Margherita Pizza",
//                     "price": 14.99,
//                     "description": "Classic pizza with tomato sauce, fresh mozzarella, and basil."
//                 },
//                 {
//                     "itemId": 402,
//                     "itemName": "Pepperoni Pizza",
//                     "price": 16.99,
//                     "description": "Pepperoni slices on top of mozzarella and tomato sauce."
//                 }
//             ]
//         },
//         {
//             "id": 5,
//             "name": "BBQ Feast",
//             "logo": "https://thumbs.dreamstime.com/b/bbq-party-vector-sign-white-background-336211379.jpg",
//             "cuisine": ["Barbecue", "American"],
//             "rating": 4.9,
//             "deliveryTime": "50 minutes",
//             "menu": [
//                 {
//                     "itemId": 501,
//                     "itemName": "BBQ Ribs",
//                     "price": 18.99,
//                     "description": "Slow-cooked ribs with house BBQ sauce."
//                 },
//                 {
//                     "itemId": 502,
//                     "itemName": "Pulled Pork Sandwich",
//                     "price": 10.99,
//                     "description": "Juicy pulled pork with coleslaw on a toasted bun."
//                 }
//             ]
//         },
//         {
//             "id": 6,
//             "name": "Taco Fiesta",
//             "logo": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371603491866.webp",
//             "cuisine": ["Mexican", "Tacos"],
//             "rating": 4.6,
//             "deliveryTime": "20 minutes",
//             "menu": [
//                 {
//                     "itemId": 601,
//                     "itemName": "Beef Tacos",
//                     "price": 9.99,
//                     "description": "Seasoned ground beef with lettuce, cheese, and salsa."
//                 },
//                 {
//                     "itemId": 602,
//                     "itemName": "Fish Tacos",
//                     "price": 11.99,
//                     "description": "Grilled fish with cabbage slaw and lime crema."
//                 }
//             ]
//         }
//     ]
// }



// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="rest-container">
//                 {resObj.restaurants.map((restaurant) => (
//                     <RestaurantCard key={restaurant.id} resData={restaurant} />
//                 ))}
//             </div>
//         </div>
//     );
// };

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )

};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout />)
