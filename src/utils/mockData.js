
const resObj =

{
    "restaurants": [
        {
            "id": 1,
            "name": "Wildberry Pancake House",
            "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21194211/Burger-King.png",
            "cuisine": ["Breakfast", "American"],
            "rating": 5.0,
            "deliveryTime": "37 minutes",
            "menu": [
                {
                    "itemId": 101,
                    "itemName": "Wildberry Pancakes",
                    "price": 12.99,
                    "description": "Fluffy pancakes topped with fresh wild berries and whipped cream."
                },
                {
                    "itemId": 102,
                    "itemName": "EggToast",
                    "price": 8.99,
                    "description": "Toasted bread topped with scrambled eggs and avocado."
                },
                {
                    "itemId": 103,
                    "itemName": "Latte",
                    "price": 4.50,
                    "description": "Smooth espresso with steamed milk and a touch of foam."
                }
            ]
        },
        {
            "id": 2,
            "name": "Green Bowl Eatery",
            "logo": "https://gmrencen.com/wp-content/uploads/2016/03/panera_holdingshape_lockup_NO_R-1024x977.jpg",
            "cuisine": ["Healthy", "Vegan"],
            "rating": 4.8,
            "deliveryTime": "25 minutes",
            "menu": [
                {
                    "itemId": 201,
                    "itemName": "Vegan Salad Bowl",
                    "price": 10.99,
                    "description": "A refreshing salad with kale, quinoa, cherry tomatoes, and avocado."
                },
                {
                    "itemId": 202,
                    "itemName": "Smoothie Bowl",
                    "price": 9.50,
                    "description": "A mix of berries, banana, and granola topped with coconut shavings."
                }
            ]
        },
        {
            "id": 3,
            "name": "Sushi Paradise",
            "logo": "https://www.sushitaku.com/wp-content/uploads/2024/04/P1002987-1024x638.webp",
            "cuisine": ["Japanese", "Sushi"],
            "rating": 4.7,
            "deliveryTime": "45 minutes",
            "menu": [
                {
                    "itemId": 301,
                    "itemName": "California Roll",
                    "price": 8.99,
                    "description": "Classic sushi roll with crab, avocado, and cucumber."
                },
                {
                    "itemId": 302,
                    "itemName": "Salmon Nigiri",
                    "price": 12.50,
                    "description": "Fresh salmon atop sushi rice."
                }
            ]
        },
        {
            "id": 4,
            "name": "Pizza Haven",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/640px-Pizza-3007395.jpg",
            "cuisine": ["Italian", "Pizza"],
            "rating": 4.5,
            "deliveryTime": "30 minutes",
            "menu": [
                {
                    "itemId": 401,
                    "itemName": "Margherita Pizza",
                    "price": 14.99,
                    "description": "Classic pizza with tomato sauce, fresh mozzarella, and basil."
                },
                {
                    "itemId": 402,
                    "itemName": "Pepperoni Pizza",
                    "price": 16.99,
                    "description": "Pepperoni slices on top of mozzarella and tomato sauce."
                }
            ]
        },
        {
            "id": 5,
            "name": "BBQ Feast",
            "logo": "https://thumbs.dreamstime.com/b/bbq-party-vector-sign-white-background-336211379.jpg",
            "cuisine": ["Barbecue", "American"],
            "rating": 4.9,
            "deliveryTime": "50 minutes",
            "menu": [
                {
                    "itemId": 501,
                    "itemName": "BBQ Ribs",
                    "price": 18.99,
                    "description": "Slow-cooked ribs with house BBQ sauce."
                },
                {
                    "itemId": 502,
                    "itemName": "Pulled Pork Sandwich",
                    "price": 10.99,
                    "description": "Juicy pulled pork with coleslaw on a toasted bun."
                }
            ]
        },
        {
            "id": 6,
            "name": "Taco Fiesta",
            "logo": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371603491866.webp",
            "cuisine": ["Mexican", "Tacos"],
            "rating": 4.6,
            "deliveryTime": "20 minutes",
            "menu": [
                {
                    "itemId": 601,
                    "itemName": "Beef Tacos",
                    "price": 9.99,
                    "description": "Seasoned ground beef with lettuce, cheese, and salsa."
                },
                {
                    "itemId": 602,
                    "itemName": "Fish Tacos",
                    "price": 11.99,
                    "description": "Grilled fish with cabbage slaw and lime crema."
                },
               
            ]


        },
        {
            "id": 7,
            "name": "Pasta Perfection",
            "logo": "https://www.irishtimes.com/resizer/v2/7YVKTRVO2T2FQIIYIV7LJXB2GY.jpg?auth=b87840c80db39adc67702f12f9e1b6d4db32a69e15b0b1d01c3685c5bd2f6875&smart=true&width=1024&height=576",
            "cuisine": ["Italian", "Pasta"],
            "rating": 4.8,
            "deliveryTime": "30 minutes",
            "menu": [
                {
                    "itemId": 701,
                    "itemName": "Spaghetti Bolognese",
                    "price": 14.49,
                    "description": "Classic spaghetti with rich tomato and beef sauce."
                },
                {
                    "itemId": 702,
                    "itemName": "Fettuccine Alfredo",
                    "price": 16.99,
                    "description": "Fettuccine pasta in a creamy Alfredo sauce."
                },
                {
                    "itemId": 703,
                    "itemName": "Penne Arrabbiata",
                    "price": 13.99,
                    "description": "Penne pasta with a spicy tomato sauce."
                },

            ]
        },
        {
            "id": 8,
            "name": "The Burger Joint",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvBdH2XwtR1UkV9pYbX2_nzQeaYrGjJWymkTji9v3w1aTKCn-B4MQd3MP8zNnXTGw96aM&usqp=CAU",
            "cuisine": ["American", "Burgers"],
            "rating": 4.3,
            "deliveryTime": "25 minutes",
            "menu": [
                {
                    "itemId": 801,
                    "itemName": "Cheeseburger",
                    "price": 6.99,
                    "description": "Juicy beef patty with melted cheddar cheese, lettuce, and tomato."
                },
                {
                    "itemId": 802,
                    "itemName": "Bacon Burger",
                    "price": 8.49,
                    "description": "Grilled beef patty with crispy bacon, cheddar, lettuce, and tomato."
                },
                {
                    "itemId": 803,
                    "itemName": "Vegan Burger",
                    "price": 7.99,
                    "description": "A plant-based patty with lettuce, tomato, and vegan cheese."
                }
            ]
        },
        {
            "id": 9,
            "name": "Pho House",
            "logo": "https://static.wixstatic.com/media/87935b_d3c18b9f93c64cffbe8f8017946c5911~mv2.jpg/v1/fill/w_640,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/87935b_d3c18b9f93c64cffbe8f8017946c5911~mv2.jpg",
            "cuisine": ["Vietnamese", "Pho"],
            "rating": 4.7,
            "deliveryTime": "40 minutes",
            "menu": [
                {
                    "itemId": 901,
                    "itemName": "Pho Bo",
                    "price": 12.99,
                    "description": "Traditional Vietnamese beef noodle soup with fresh herbs and spices."
                },
                {
                    "itemId": 902,
                    "itemName": "Pho Ga",
                    "price": 11.99,
                    "description": "Chicken noodle soup with herbs and a rich broth."
                },
                {
                    "itemId": 903,
                    "itemName": "Summer Rolls",
                    "price": 6.99,
                    "description": "Fresh rice paper rolls stuffed with shrimp, lettuce, and vermicelli noodles."
                }
            ]
        },
        {
            "id": 10,
            "name": "Ramen Samurai",
            "logo": "https://live.staticflickr.com/1898/30459871598_e5f06fdce8_z.jpg",
            "cuisine": ["Japanese", "Ramen"],
            "rating": 4.6,
            "deliveryTime": "35 minutes",
            "menu": [
                {
                    "itemId": 1001,
                    "itemName": "Shoyu Ramen",
                    "price": 13.99,
                    "description": "Soy-based broth with noodles, chashu pork, and a boiled egg."
                },
                {
                    "itemId": 1002,
                    "itemName": "Miso Ramen",
                    "price": 14.49,
                    "description": "Rich miso-based broth with ramen noodles and vegetables."
                },
                {
                    "itemId": 1003,
                    "itemName": "Tonkotsu Ramen",
                    "price": 15.99,
                    "description": "Creamy pork bone broth with noodles, pork belly, and scallions."
                }
            ]
        },
        {
            "id": 11,
            "name": "Tandoori Delight",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmkNU9pEM9DFeeFcm0eHWzr_9mNd3ZGdq3Q&s",
            "cuisine": ["Indian", "Tandoori"],
            "rating": 4.8,
            "deliveryTime": "45 minutes",
            "menu": [
                {
                    "itemId": 1101,
                    "itemName": "Chicken Tikka",
                    "price": 11.99,
                    "description": "Marinated chicken cooked in the tandoor, served with mint chutney."
                },
                {
                    "itemId": 1102,
                    "itemName": "Paneer Tikka",
                    "price": 9.99,
                    "description": "Cottage cheese marinated in spices and grilled in the tandoor."
                },
                {
                    "itemId": 1103,
                    "itemName": "Naan",
                    "price": 2.99,
                    "description": "Soft, fluffy Indian bread cooked in the tandoor."
                }
            ]
        },
        {
            "id": 12,
            "name": "Dim Sum Dynasty",
            "logo": "https://i.pinimg.com/736x/1b/ba/e4/1bbae4711eb3a3e892498b422109c303.jpg",
            "cuisine": ["Chinese", "Dim Sum"],
            "rating": 4.9,
            "deliveryTime": "30 minutes",
            "menu": [
                {
                    "itemId": 1201,
                    "itemName": "Pork Dumplings",
                    "price": 7.99,
                    "description": "Steamed dumplings filled with pork and spices."
                },
                {
                    "itemId": 1202,
                    "itemName": "Shrimp Dumplings",
                    "price": 8.99,
                    "description": "Steamed dumplings with shrimp and delicate dough."
                },
                {
                    "itemId": 1203,
                    "itemName": "Spring Rolls",
                    "price": 5.99,
                    "description": "Crispy rolls stuffed with vegetables or meat."
                }
            ]
        }
    ]
}
export default resObj;