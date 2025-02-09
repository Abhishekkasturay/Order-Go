const mockObj = [
  {
    id: "98032",
    restaurant: "Pizza Hut",
    items: [
      {
        id: "107796569",
        name: "Margherita Pizza",
        category: "Veg Pizza",
        description:
          "Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "dpventcrozvfni0lqb10",
        inStock: 1,
        isBestseller: true,
        isVeg: 1,
        itemAttribute: { vegClassifier: "VEG", portionSize: "Serves 1" },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        price: 16900,
        ratings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "128 ratings",
            ratingCountV2: "128",
          },
        },
        ribbon: {
          text: "Bestseller",
          textColor: "#ffffff",
          topBackgroundColor: "#d53d4c",
        },
      },
      {
        id: "107439946",
        name: "Corn & Cheese",
        category: "Veg Pizza",
        description:
          "Serves 1 | A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature pan sauce (PAN Per/Med-320 Kcal/100g | TnC-304 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "ckbnw98n6tffy50wvuzm",
        inStock: 1,
        isBestseller: true,
        isVeg: 1,
        itemAttribute: { vegClassifier: "VEG", portionSize: "Serves 1" },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 21900,
        ratings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "101 ratings",
            ratingCountV2: "101",
          },
        },
        ribbon: {
          text: "Bestseller",
          textColor: "#ffffff",
          topBackgroundColor: "#d53d4c",
        },
        addons: [{ groupId: "151820475", groupName: "Extra Cheese Topping" }],
      },
      {
        id: "114270500",
        name: "Veggie Supreme",
        category: "Veg Pizza",
        description:
          "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "z0c4xpovma1qtmu4tlls",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 37900,
        ratings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "36 ratings",
            ratingCountV2: "36",
          },
        },
      },
      {
        id: "107440051",
        name: "Veggie Feast",
        category: "Veg Pizza",
        description:
          "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "cbye9x7wxeopwqvenn7g",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 25900,
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "102 ratings",
            ratingCountV2: "102",
          },
        },
      },
      {
        id: "107439941",
        name: "Tandoori Paneer",
        category: "Veg Pizza",
        description:
          "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "s5ld93rsknx0fhj6xarn",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 31900,
        ratings: {
          aggregatedRating: {
            rating: "3.5",
            ratingCount: "88 ratings",
            ratingCountV2: "88",
          },
        },
      },
      {
        id: "107796569",
        name: "Margherita Pizza",
        category: "Veg Pizza",
        description:
          "Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there! (292 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "dpventcrozvfni0lqb10",
        inStock: 1,
        isBestseller: true,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        price: 16900,
        ratings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "128 ratings",
            ratingCountV2: "128",
          },
        },
        ribbon: {
          text: "Bestseller",
          textColor: "#ffffff",
          topBackgroundColor: "#d53d4c",
        },
      },
      {
        id: "107439946",
        name: "Corn & Cheese",
        category: "Veg Pizza",
        description:
          "Serves 1 | A combination of juicy sweet corn & 100% mozzarella cheese with flavourful signature pan sauce (PAN Per/Med-320 Kcal/100g | TnC-304 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "ckbnw98n6tffy50wvuzm",
        inStock: 1,
        isBestseller: true,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 21900,
        ratings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "101 ratings",
            ratingCountV2: "101",
          },
        },
        ribbon: {
          text: "Bestseller",
          textColor: "#ffffff",
          topBackgroundColor: "#d53d4c",
        },
      },
    ],
  },
  {
    id: "347694",
    restaurant: "Hotel Anand",
    items: [
      {
        id: "114270500",
        name: "Veggie Supreme",
        category: "Veg Pizza",
        description:
          "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "z0c4xpovma1qtmu4tlls",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 37900,
        ratings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "36 ratings",
            ratingCountV2: "36",
          },
        },
      },
    ],
  },
  {
    id: "107440051",
    name: "Veggie Feast",
    category: "Veg Pizza",
    description:
      "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & 100% mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId: "cbye9x7wxeopwqvenn7g",
    inStock: 1,
    isVeg: 1,
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    offerTags: [
      {
        title: "20% OFF",
        subTitle: "USE SWIGGYIT",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
      },
    ],
    defaultPrice: 25900,
    ratings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "102 ratings",
        ratingCountV2: "102",
      },
    },
  },
  {
    id: "843279",
    restaurant: "Burger Inn",
    items: [
      {
        id: "135509803",
        name: "Cheese Masala Burger",
        category: "Burgers",
        isVeg: 1,
        itemAttribute: { vegClassifier: "VEG" },
        price: 10900,
        ratings: { aggregatedRating: {} },
        showImage: true,
      },
      {
        id: "107439941",
        name: "Tandoori Paneer",
        category: "Veg Pizza",
        description:
          "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
        imageId: "s5ld93rsknx0fhj6xarn",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
          portionSize: "Serves 1",
        },
        offerTags: [
          {
            title: "20% OFF",
            subTitle: "USE SWIGGYIT",
            textColor: "#DB6742",
            backgroundColor: "#FAE8E3",
          },
        ],
        defaultPrice: 31900,
        ratings: {
          aggregatedRating: {
            rating: "3.5",
            ratingCount: "88 ratings",
            ratingCountV2: "88",
          },
        },
      },
      {
        id: "135509827",
        name: "Veg Grilled Burger",
        category: "Burgers",
        isVeg: 1,
        itemAttribute: { vegClassifier: "VEG" },
        price: 11500,
        ratings: { aggregatedRating: {} },
        showImage: true,
      },
      {
        id: "135509755",
        name: "Choco Lava Cake",
        category: "Dessert",
        description: "Eggless",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 7500,
        ratings: {
          aggregatedRating: {},
        },
        showImage: true,
      },
    ],
  },
  {
    id: "444696",
    restaurant: "Ovenfresh",
    items: [
      {
        id: "79276267",
        name: "Chocolate Cake",
        category: "Special Cake",
        description:
          "A decadent and irresistible treat for chocolate lovers, this special cake is a must-try for those seeking a scrumptious and indulgent dessert.",
        imageId: "d7e08de8f57b4e1853ee411503335f47",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 45000,
        ratings: {
          aggregatedRating: {},
        },
        showImage: true,
      },
      {
        id: "79276265",
        name: "Strawberry Cake",
        category: "Special Cake",
        description:
          "A luscious and tantalizing cake bursting with the refreshing sweetness of ripe strawberries.",
        imageId: "3925d67f701186c971dd7b759cf48f14",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 45000,
        ratings: {
          aggregatedRating: {},
        },
        showImage: true,
      },
      {
        id: "79276268",
        name: "Black Forest Cake",
        category: "Special Cake",
        description:
          "Indulge in a decadent and irresistible treat that combines rich chocolate, fluffy layers, and a sweet cherry twist.",
        imageId: "evycknpcbois8drvllg5",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 45000,
        ratings: {
          aggregatedRating: {},
        },
        showImage: true,
      },
    ],
  },
  {
    id: "104802",
    restaurant: "7even Heaven Cafe",
    items: [
      {
        id: "79276268",
        name: "Black Forest Cake",
        category: "Special Cake",
        description:
          "Indulge in a decadent and irresistible treat that combines rich chocolate, fluffy layers, and a sweet cherry twist.",
        imageId: "evycknpcbois8drvllg5",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 45000,
        ratings: {
          aggregatedRating: {},
        },
        showImage: true,
      },
      {
        id: "146085500",
        name: "1 Cold Coffee + 1 Belgian Chocolate Waffle",
        category: "Must Try Combos",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 36000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "146085501",
        name: "1 Cold Coffee + 1 Nutella Brownie",
        category: "Must Try Combos",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 28100,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "146085502",
        name: "1 Kitkat Milkshake + 1 Brownie With Icecream",
        category: "Must Try Combos",
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 43500,
        ratings: {
          aggregatedRating: {},
        },
      },
    ],
  },
  {
    id: "683963",
    restaurant: "Punjabi Tadka",
    items: [
      {
        id: "111365366",
        name: "Paneer do pyaza [250 grams]",
        category: "Main Course",
        description:
          "A delectable vegetarian main course that tantalizes the palate with its rich and flavorful paneer preparation.",
        imageId: "c3d66d95fea5d396feba4d25b79fd618",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 27000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "111365367",
        name: "Dal fry [250 grams]",
        category: "Main Course",
        description:
          "A flavorful and comforting vegetarian delight, perfect for the main course.",
        imageId: "c6d135fb14cd01e6449b29a15f7a282e",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 14000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "111365368",
        name: "Butter dal fry [250 grams]",
        category: "Main Course",
        description:
          "A delectable vegetarian delight, this butter dal fry is a flavorful and satisfying main course option that will leave you wanting more.",
        imageId: "9612629ff55a10964870053cf1bea82b",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 16000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "111365377",
        name: "Dal tadka [250 grams]",
        category: "Main Course",
        description:
          "A flavorful and comforting Indian lentil dish, perfect as a main course.",
        imageId: "57bdc0d1b7c07900de602a0e43cf6983",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 15000,
        ratings: {
          aggregatedRating: {},
        },
      },
    ],
  },
  {
    id: "794156",
    restaurant: "Chai Sutta Bar",
    items: [
      {
        id: "137222511",
        name: "Csb Special Burger",
        category: "Burger",
        finalPrice: 13200,
        imageId: "533e2c05b2999f84c67f6a86780592fc",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 16500,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "137222510",
        name: "Veg Burger",
        category: "Burger",
        finalPrice: 8800,
        imageId: "fb9dbe06b3ef7817ce07e59f5678bbf8",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 11000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "137222518",
        name: "Csb Special Pizza",
        category: "Pizza",
        finalPrice: 19200,
        imageId: "63c9d8d3e902683faabc866d46889f6d",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 24000,
        ratings: {
          aggregatedRating: {
            rating: "2.1",
            ratingCount: "4 ratings",
            ratingCountV2: "4",
          },
        },
      },
    ],
  },
  {
    id: "285822",
    restaurant: "Juice Junction",
    items: [
      {
        id: "125063991",
        name: "Cold coffee",
        category: "Beverages",
        description:
          "A refreshing and invigorating blend of rich brewed coffee and a hint of sweetness, perfect to quench your thirst and awaken your senses.",
        imageId: "0e1d79585569550a981d90bf6446767a",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        itemBadge: {},
        price: 12900,
        ratings: {
          aggregatedRating: {},
        },
        ribbon: {},
        showImage: true,
        variants: {},
        variantsV2: {},
      },
      {
        id: "125064006",
        name: "Strawberry shake",
        category: "Beverages",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/16/76401588-b003-404f-a502-b5ab7a4677de_5650e372-d118-417e-ac59-55a4a3d701a4.jpg",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        itemBadge: {},
        price: 13500,
        ratings: {
          aggregatedRating: {},
        },
        ribbon: {},
        showImage: true,
        variants: {},
        variantsV2: {},
      },
      {
        id: "125064008",
        name: "Mango shake",
        category: "Beverages",
        description:
          "A refreshing blend of luscious mangoes, this creamy and fruity beverage is the perfect thirst quencher.",
        imageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/5/4/9de116de-1052-427f-8855-8cf78ff4e594_d96995c3-81a1-4f84-98bc-78789fee5e57.jpg",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        itemBadge: {},
        price: 13500,
        ratings: {
          aggregatedRating: {},
        },
        ribbon: {},
        showImage: true,
        variants: {},
        variantsV2: {},
      },
    ],
  },
  {
    id: "771376",
    restaurant: "Chennai Express",
    items: [
      {
        id: "55760398",
        name: "Fenni Kheer (400 ml)",
        category: "Dessert",
        description:
          "Indulge in a creamy and delightful dessert that combines the flavors of fenni and kheer, a perfect sweet treat to satisfy your cravings.",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 15000,
        ratings: {
          aggregatedRating: {},
        },
      },
      {
        id: "55760399",
        name: "Rice Kheer (250 ml)",
        category: "Dessert",
        description:
          "A creamy and sweet rice-based dessert that will satisfy your sweet tooth.",
        inStock: 1,
        isBestseller: true,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 9000,
        ratings: {
          aggregatedRating: {},
        },
        ribbon: {
          text: "Bestseller",
          textColor: "#ffffff",
          topBackgroundColor: "#d53d4c",
        },
      },
      {
        id: "55760401",
        name: "Over Cooked Rice Kheer (400 ml)",
        category: "Dessert",
        description:
          "Indulge in a flavorful and creamy dessert made with perfectly cooked rice - a delectable treat for all.",
        inStock: 1,
        isVeg: 1,
        itemAttribute: {
          vegClassifier: "VEG",
        },
        price: 15000,
        ratings: {
          aggregatedRating: {},
        },
      },
    ],
  },
];

export default mockObj;
