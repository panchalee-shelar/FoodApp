const mockRestaurantMenu =
{
    "statusCode": 0,
    "data": {
        "id": "203926",
        "name": "Spicy Hub",
        "city": "Mumbai",
        "areaName": "Andheri East",
        "avgRating": 4.4,
        "totalRatingsString": "15K+ ratings",
        "costForTwoMessage": "₹350 for two",
        "cuisines": ["North Indian", "Chinese", "Biryani", "Fast Food"],
        "cloudinaryImageId": "spicyhub123",
        "isOpen": true,

        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 3.5,
            "lastMileTravelString": "3.5 km"
        },

        "offers": [
            {
                "info": "50% OFF up to ₹100",
                "couponCode": "WELCOME50"
            },
            {
                "info": "Flat ₹125 OFF",
                "couponCode": "FLAT125"
            }
        ],

        "menu": {
            "categories": [
                {
                    "id": "1",
                    "title": "Recommended",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "101",
                                    "name": "Paneer Butter Masala",
                                    "description": "Soft paneer cubes cooked in rich buttery tomato gravy",
                                    "imageId": "paneer_butter",
                                    "isVeg": 1,
                                    "price": 24900,
                                    "inStock": 1,
                                    "ratings": {
                                        "aggregatedRating": {
                                            "rating": "4.5",
                                            "ratingCount": "1.5K+"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "102",
                                    "name": "Chicken Biryani",
                                    "description": "Aromatic basmati rice cooked with tender chicken",
                                    "imageId": "chicken_biryani",
                                    "isVeg": 0,
                                    "price": 29900,
                                    "inStock": 1,
                                    "ratings": {
                                        "aggregatedRating": {
                                            "rating": "4.6",
                                            "ratingCount": "2K+"
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },

                {
                    "id": "2",
                    "title": "Starters",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "201",
                                    "name": "Veg Manchurian",
                                    "description": "Crispy veg balls tossed in spicy sauce",
                                    "imageId": "veg_manchurian",
                                    "isVeg": 1,
                                    "price": 17900,
                                    "inStock": 1
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "202",
                                    "name": "Chicken Lollipop",
                                    "description": "Juicy chicken wings fried and tossed in sauce",
                                    "imageId": "chicken_lollipop",
                                    "isVeg": 0,
                                    "price": 22900,
                                    "inStock": 1
                                }
                            }
                        }
                    ]
                },

                {
                    "id": "3",
                    "title": "Biryani & Rice",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "301",
                                    "name": "Veg Biryani",
                                    "description": "Long grain rice cooked with vegetables and spices",
                                    "imageId": "veg_biryani",
                                    "isVeg": 1,
                                    "price": 21900,
                                    "inStock": 1
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "302",
                                    "name": "Egg Biryani",
                                    "description": "Classic biryani with boiled eggs",
                                    "imageId": "egg_biryani",
                                    "isVeg": 0,
                                    "price": 23900,
                                    "inStock": 1
                                }
                            }
                        }
                    ]
                },

                {
                    "id": "4",
                    "title": "Breads",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "401",
                                    "name": "Butter Naan",
                                    "description": "Soft naan topped with butter",
                                    "imageId": "butter_naan",
                                    "isVeg": 1,
                                    "price": 4900,
                                    "inStock": 1
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "402",
                                    "name": "Tandoori Roti",
                                    "description": "Whole wheat roti cooked in tandoor",
                                    "imageId": "tandoori_roti",
                                    "isVeg": 1,
                                    "price": 3900,
                                    "inStock": 1
                                }
                            }
                        }
                    ]
                },

                {
                    "id": "5",
                    "title": "Desserts",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "501",
                                    "name": "Gulab Jamun",
                                    "description": "Soft milk-solid dumplings in sugar syrup",
                                    "imageId": "gulab_jamun",
                                    "isVeg": 1,
                                    "price": 9900,
                                    "inStock": 1
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "502",
                                    "name": "Chocolate Brownie",
                                    "description": "Warm chocolate brownie with rich flavor",
                                    "imageId": "brownie",
                                    "isVeg": 1,
                                    "price": 12900,
                                    "inStock": 1
                                }
                            }
                        }
                    ]
                },

                {
                    "id": "6",
                    "title": "Beverages",
                    "itemCards": [
                        {
                            "card": {
                                "info": {
                                    "id": "601",
                                    "name": "Cold Drink",
                                    "description": "Chilled soft drink",
                                    "imageId": "cold_drink",
                                    "isVeg": 1,
                                    "price": 4500,
                                    "inStock": 1
                                }
                            }
                        },
                        {
                            "card": {
                                "info": {
                                    "id": "602",
                                    "name": "Masala Chaas",
                                    "description": "Refreshing spiced buttermilk",
                                    "imageId": "chaas",
                                    "isVeg": 1,
                                    "price": 3900,
                                    "inStock": 1
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}
export default mockRestaurantMenu;