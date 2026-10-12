'use strict';
// Preview catalogue. Live images and products will be managed through Laravel.
const inventory = [
  {
    "name": "Mangoes",
    "unit": "3 pieces",
    "category": "fruit",
    "image": "images/products/mangoes.webp",
    "imageAlt": "Representative image of mangoes"
  },
  {
    "name": "Avocados",
    "unit": "2 pieces",
    "category": "fruit",
    "image": "images/products/avocados.webp",
    "imageAlt": "Representative image of avocados"
  },
  {
    "name": "Dessert bananas",
    "unit": "1 cluster · 6 pieces",
    "category": "fruit",
    "image": "images/products/dessert-bananas.webp",
    "imageAlt": "Representative image of dessert bananas"
  },
  {
    "name": "Pineapple",
    "unit": "1 whole fruit",
    "category": "fruit",
    "image": "images/products/pineapple.webp",
    "imageAlt": "Representative image of pineapple"
  },
  {
    "name": "Watermelon",
    "unit": "1 whole fruit",
    "category": "fruit",
    "image": "images/products/watermelon.webp",
    "imageAlt": "Representative image of watermelon"
  },
  {
    "name": "Pawpaw",
    "unit": "1 whole fruit",
    "category": "fruit",
    "image": "images/products/pawpaw.webp",
    "imageAlt": "Representative image of pawpaw"
  },
  {
    "name": "Passion fruit",
    "unit": "1 kg",
    "category": "fruit",
    "image": "images/products/passion-fruit.webp",
    "imageAlt": "Representative image of passion fruit"
  },
  {
    "name": "Oranges",
    "unit": "1 kg",
    "category": "fruit",
    "image": "images/products/oranges.webp",
    "imageAlt": "Representative image of oranges"
  },
  {
    "name": "Tangerines",
    "unit": "1 kg",
    "category": "fruit",
    "image": "images/products/tangerines.webp",
    "imageAlt": "Representative image of tangerines"
  },
  {
    "name": "Lemons",
    "unit": "500 g",
    "category": "fruit",
    "image": "images/products/lemons.webp",
    "imageAlt": "Representative image of lemons"
  },
  {
    "name": "Limes",
    "unit": "500 g",
    "category": "fruit",
    "image": "images/products/limes.webp",
    "imageAlt": "Representative image of limes"
  },
  {
    "name": "Apples",
    "unit": "4 pieces",
    "category": "fruit",
    "image": "images/products/apples.webp",
    "imageAlt": "Representative image of apples"
  },
  {
    "name": "Pears",
    "unit": "4 pieces",
    "category": "fruit",
    "image": "images/products/pears.webp",
    "imageAlt": "Representative image of pears"
  },
  {
    "name": "Grapes",
    "unit": "500 g",
    "category": "fruit",
    "image": "images/products/grapes.webp",
    "imageAlt": "Representative image of grapes"
  },
  {
    "name": "Strawberries",
    "unit": "250 g punnet",
    "category": "fruit",
    "image": "images/products/strawberries.webp",
    "imageAlt": "Representative image of strawberries"
  },
  {
    "name": "Guavas",
    "unit": "1 kg",
    "category": "fruit",
    "image": "images/products/guavas.webp",
    "imageAlt": "Representative image of guavas"
  },
  {
    "name": "Tree tomatoes",
    "unit": "500 g",
    "category": "fruit",
    "image": "images/products/tree-tomatoes.webp",
    "imageAlt": "Representative image of tree tomatoes"
  },
  {
    "name": "Jackfruit",
    "unit": "1 kg · prepared pieces",
    "category": "fruit",
    "image": "images/products/jackfruit.webp",
    "imageAlt": "Representative image of jackfruit"
  },
  {
    "name": "Soursop",
    "unit": "1 whole fruit",
    "category": "fruit",
    "image": "images/products/soursop.webp",
    "imageAlt": "Representative image of soursop"
  },
  {
    "name": "Coconut",
    "unit": "1 whole fruit",
    "category": "fruit",
    "image": "images/products/coconut.webp",
    "imageAlt": "Representative image of coconut"
  },
  {
    "name": "Fresh tomatoes",
    "unit": "1 kg",
    "category": "vegetables",
    "image": "images/products/fresh-tomatoes.webp",
    "imageAlt": "Representative image of fresh tomatoes"
  },
  {
    "name": "Red onions",
    "unit": "1 kg",
    "category": "vegetables",
    "image": "images/products/red-onions.webp",
    "imageAlt": "Representative image of red onions"
  },
  {
    "name": "White onions",
    "unit": "1 kg",
    "category": "vegetables",
    "image": "images/products/white-onions.webp",
    "imageAlt": "Representative image of white onions"
  },
  {
    "name": "Spring onions",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/spring-onions.webp",
    "imageAlt": "Representative image of spring onions"
  },
  {
    "name": "Nakati greens",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/nakati-greens.webp",
    "imageAlt": "Representative image of nakati greens"
  },
  {
    "name": "Doodo greens",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/doodo-greens.webp",
    "imageAlt": "Representative image of doodo greens"
  },
  {
    "name": "Sukuma wiki",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/sukuma-wiki.webp",
    "imageAlt": "Representative image of sukuma wiki"
  },
  {
    "name": "Spinach",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/spinach.webp",
    "imageAlt": "Representative image of spinach"
  },
  {
    "name": "Cabbage",
    "unit": "1 head",
    "category": "vegetables",
    "image": "images/products/cabbage.webp",
    "imageAlt": "Representative image of cabbage"
  },
  {
    "name": "Carrots",
    "unit": "1 kg",
    "category": "vegetables",
    "image": "images/products/carrots.webp",
    "imageAlt": "Representative image of carrots"
  },
  {
    "name": "Green peppers",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/green-peppers.webp",
    "imageAlt": "Representative image of green peppers"
  },
  {
    "name": "Mixed sweet peppers",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/mixed-sweet-peppers.webp",
    "imageAlt": "Representative image of mixed sweet peppers"
  },
  {
    "name": "Cucumber",
    "unit": "2 pieces",
    "category": "vegetables",
    "image": "images/products/cucumber.webp",
    "imageAlt": "Representative image of cucumber"
  },
  {
    "name": "Eggplant",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/eggplant.webp",
    "imageAlt": "Representative image of eggplant"
  },
  {
    "name": "Garden eggs / Ntula",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/garden-eggs-ntula.webp",
    "imageAlt": "Representative image of garden eggs / ntula"
  },
  {
    "name": "Okra",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/okra.webp",
    "imageAlt": "Representative image of okra"
  },
  {
    "name": "Pumpkin",
    "unit": "1 whole pumpkin",
    "category": "vegetables",
    "image": "images/products/pumpkin.webp",
    "imageAlt": "Representative image of pumpkin"
  },
  {
    "name": "Green beans",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/green-beans.webp",
    "imageAlt": "Representative image of green beans"
  },
  {
    "name": "Green peas",
    "unit": "500 g · shelled",
    "category": "vegetables",
    "image": "images/products/green-peas.webp",
    "imageAlt": "Representative image of green peas"
  },
  {
    "name": "Broccoli",
    "unit": "1 head",
    "category": "vegetables",
    "image": "images/products/broccoli.webp",
    "imageAlt": "Representative image of broccoli"
  },
  {
    "name": "Cauliflower",
    "unit": "1 head",
    "category": "vegetables",
    "image": "images/products/cauliflower.webp",
    "imageAlt": "Representative image of cauliflower"
  },
  {
    "name": "Lettuce",
    "unit": "1 head",
    "category": "vegetables",
    "image": "images/products/lettuce.webp",
    "imageAlt": "Representative image of lettuce"
  },
  {
    "name": "Beetroot",
    "unit": "500 g",
    "category": "vegetables",
    "image": "images/products/beetroot.webp",
    "imageAlt": "Representative image of beetroot"
  },
  {
    "name": "Fresh mushrooms",
    "unit": "250 g",
    "category": "vegetables",
    "image": "images/products/fresh-mushrooms.webp",
    "imageAlt": "Representative image of fresh mushrooms"
  },
  {
    "name": "Garlic",
    "unit": "250 g",
    "category": "vegetables",
    "image": "images/products/garlic.webp",
    "imageAlt": "Representative image of garlic"
  },
  {
    "name": "Fresh ginger",
    "unit": "250 g",
    "category": "vegetables",
    "image": "images/products/fresh-ginger.webp",
    "imageAlt": "Representative image of fresh ginger"
  },
  {
    "name": "Chillies",
    "unit": "100 g",
    "category": "vegetables",
    "image": "images/products/chillies.webp",
    "imageAlt": "Representative image of chillies"
  },
  {
    "name": "Coriander / Dhania",
    "unit": "1 bunch",
    "category": "vegetables",
    "image": "images/products/coriander-dhania.webp",
    "imageAlt": "Representative image of coriander / dhania"
  },
  {
    "name": "Matooke",
    "unit": "1 kg · unpeeled",
    "category": "staples",
    "image": "images/products/matooke.webp",
    "imageAlt": "Representative image of matooke"
  },
  {
    "name": "Posho flour",
    "unit": "10 kg",
    "category": "staples",
    "image": "images/products/posho-flour.webp",
    "imageAlt": "Representative image of posho flour"
  },
  {
    "name": "Rice",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/rice.webp",
    "imageAlt": "Representative image of rice"
  },
  {
    "name": "Dry beans",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/dry-beans.webp",
    "imageAlt": "Representative image of dry beans"
  },
  {
    "name": "Groundnuts",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/groundnuts.webp",
    "imageAlt": "Representative image of groundnuts"
  },
  {
    "name": "Groundnut paste",
    "unit": "500 g",
    "category": "staples",
    "image": "images/products/groundnut-paste.webp",
    "imageAlt": "Representative image of groundnut paste"
  },
  {
    "name": "Irish potatoes",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/irish-potatoes.webp",
    "imageAlt": "Representative image of irish potatoes"
  },
  {
    "name": "Sweet potatoes",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/sweet-potatoes.webp",
    "imageAlt": "Representative image of sweet potatoes"
  },
  {
    "name": "Cassava",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/cassava.webp",
    "imageAlt": "Representative image of cassava"
  },
  {
    "name": "Yams",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/yams.webp",
    "imageAlt": "Representative image of yams"
  },
  {
    "name": "Millet flour",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/millet-flour.webp",
    "imageAlt": "Representative image of millet flour"
  },
  {
    "name": "Cassava flour",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/cassava-flour.webp",
    "imageAlt": "Representative image of cassava flour"
  },
  {
    "name": "Wheat flour",
    "unit": "2 kg",
    "category": "staples",
    "image": "images/products/wheat-flour.webp",
    "imageAlt": "Representative image of wheat flour"
  },
  {
    "name": "Sorghum flour",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/sorghum-flour.webp",
    "imageAlt": "Representative image of sorghum flour"
  },
  {
    "name": "Porridge flour",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/porridge-flour.webp",
    "imageAlt": "Representative image of porridge flour"
  },
  {
    "name": "Lentils",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/lentils.webp",
    "imageAlt": "Representative image of lentils"
  },
  {
    "name": "Cowpeas",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/cowpeas.webp",
    "imageAlt": "Representative image of cowpeas"
  },
  {
    "name": "Pasta",
    "unit": "500 g",
    "category": "staples",
    "image": "images/products/pasta.webp",
    "imageAlt": "Representative image of pasta"
  },
  {
    "name": "Spaghetti",
    "unit": "500 g",
    "category": "staples",
    "image": "images/products/spaghetti.webp",
    "imageAlt": "Representative image of spaghetti"
  },
  {
    "name": "Sugar",
    "unit": "1 kg",
    "category": "staples",
    "image": "images/products/sugar.webp",
    "imageAlt": "Representative image of sugar"
  },
  {
    "name": "Salt",
    "unit": "500 g",
    "category": "staples",
    "image": "images/products/salt.webp",
    "imageAlt": "Representative image of salt"
  },
  {
    "name": "Cooking oil",
    "unit": "1 litre",
    "category": "staples",
    "image": "images/products/cooking-oil.webp",
    "imageAlt": "Representative image of cooking oil"
  },
  {
    "name": "Curry powder",
    "unit": "100 g",
    "category": "staples",
    "image": "images/products/curry-powder.webp",
    "imageAlt": "Representative image of curry powder"
  },
  {
    "name": "Black pepper",
    "unit": "100 g",
    "category": "staples",
    "image": "images/products/black-pepper.webp",
    "imageAlt": "Representative image of black pepper"
  },
  {
    "name": "Eggs",
    "unit": "1 tray · 30 eggs",
    "category": "breakfast",
    "image": "images/products/eggs.webp",
    "imageAlt": "Representative image of eggs"
  },
  {
    "name": "Fresh milk",
    "unit": "1 litre",
    "category": "breakfast",
    "image": "images/products/fresh-milk.webp",
    "imageAlt": "Representative image of fresh milk"
  },
  {
    "name": "Plain yoghurt",
    "unit": "500 ml",
    "category": "breakfast",
    "image": "images/products/plain-yoghurt.webp",
    "imageAlt": "Representative image of plain yoghurt"
  },
  {
    "name": "Bread",
    "unit": "1 loaf",
    "category": "breakfast",
    "image": "images/products/bread.webp",
    "imageAlt": "Representative image of bread"
  },
  {
    "name": "Tea leaves",
    "unit": "250 g",
    "category": "breakfast",
    "image": "images/products/tea-leaves.webp",
    "imageAlt": "Representative image of tea leaves"
  },
  {
    "name": "Coffee",
    "unit": "250 g",
    "category": "breakfast",
    "image": "images/products/coffee.webp",
    "imageAlt": "Representative image of coffee"
  },
  {
    "name": "Drinking chocolate",
    "unit": "250 g",
    "category": "breakfast",
    "image": "images/products/drinking-chocolate.webp",
    "imageAlt": "Representative image of drinking chocolate"
  },
  {
    "name": "Oats",
    "unit": "500 g",
    "category": "breakfast",
    "image": "images/products/oats.webp",
    "imageAlt": "Representative image of oats"
  },
  {
    "name": "Peanut butter",
    "unit": "400 g",
    "category": "breakfast",
    "image": "images/products/peanut-butter.webp",
    "imageAlt": "Representative image of peanut butter"
  },
  {
    "name": "Honey",
    "unit": "500 g",
    "category": "breakfast",
    "image": "images/products/honey.webp",
    "imageAlt": "Representative image of honey"
  },
  {
    "name": "Fruit jam",
    "unit": "450 g",
    "category": "breakfast",
    "image": "images/products/fruit-jam.webp",
    "imageAlt": "Representative image of fruit jam"
  },
  {
    "name": "Margarine",
    "unit": "500 g",
    "category": "breakfast",
    "image": "images/products/margarine.webp",
    "imageAlt": "Representative image of margarine"
  },
  {
    "name": "Laundry bar soap",
    "unit": "1 kg bar",
    "category": "household",
    "image": "images/products/laundry-bar-soap.webp",
    "imageAlt": "Representative image of laundry bar soap"
  },
  {
    "name": "Laundry powder",
    "unit": "1 kg",
    "category": "household",
    "image": "images/products/laundry-powder.webp",
    "imageAlt": "Representative image of laundry powder"
  },
  {
    "name": "Liquid laundry detergent",
    "unit": "1 litre",
    "category": "household",
    "image": "images/products/liquid-laundry-detergent.webp",
    "imageAlt": "Representative image of liquid laundry detergent"
  },
  {
    "name": "Dishwashing liquid",
    "unit": "500 ml",
    "category": "household",
    "image": "images/products/dishwashing-liquid.webp",
    "imageAlt": "Representative image of dishwashing liquid"
  },
  {
    "name": "Dishwashing sponges",
    "unit": "3-pack",
    "category": "household",
    "image": "images/products/dishwashing-sponges.webp",
    "imageAlt": "Representative image of dishwashing sponges"
  },
  {
    "name": "Scouring pads",
    "unit": "3-pack",
    "category": "household",
    "image": "images/products/scouring-pads.webp",
    "imageAlt": "Representative image of scouring pads"
  },
  {
    "name": "Toilet tissue",
    "unit": "4 rolls",
    "category": "household",
    "image": "images/products/toilet-tissue.webp",
    "imageAlt": "Representative image of toilet tissue"
  },
  {
    "name": "Kitchen towels",
    "unit": "2 rolls",
    "category": "household",
    "image": "images/products/kitchen-towels.webp",
    "imageAlt": "Representative image of kitchen towels"
  },
  {
    "name": "Handwashing liquid",
    "unit": "500 ml",
    "category": "household",
    "image": "images/products/handwashing-liquid.webp",
    "imageAlt": "Representative image of handwashing liquid"
  },
  {
    "name": "Bathing soap",
    "unit": "3 bars",
    "category": "household",
    "image": "images/products/bathing-soap.webp",
    "imageAlt": "Representative image of bathing soap"
  },
  {
    "name": "Disinfectant",
    "unit": "500 ml",
    "category": "household",
    "image": "images/products/disinfectant.webp",
    "imageAlt": "Representative image of disinfectant"
  },
  {
    "name": "Bleach",
    "unit": "1 litre",
    "category": "household",
    "image": "images/products/bleach.webp",
    "imageAlt": "Representative image of bleach"
  },
  {
    "name": "Toilet cleaner",
    "unit": "500 ml",
    "category": "household",
    "image": "images/products/toilet-cleaner.webp",
    "imageAlt": "Representative image of toilet cleaner"
  },
  {
    "name": "Floor cleaner",
    "unit": "1 litre",
    "category": "household",
    "image": "images/products/floor-cleaner.webp",
    "imageAlt": "Representative image of floor cleaner"
  },
  {
    "name": "Bin bags",
    "unit": "1 roll · 20 bags",
    "category": "household",
    "image": "images/products/bin-bags.webp",
    "imageAlt": "Representative image of bin bags"
  },
  {
    "name": "Scrubbing brush",
    "unit": "1 piece",
    "category": "household",
    "image": "images/products/scrubbing-brush.webp",
    "imageAlt": "Representative image of scrubbing brush"
  },
  {
    "name": "Broom",
    "unit": "1 piece",
    "category": "household",
    "image": "images/products/broom.webp",
    "imageAlt": "Representative image of broom"
  },
  {
    "name": "Mop",
    "unit": "1 piece",
    "category": "household",
    "image": "images/products/mop.webp",
    "imageAlt": "Representative image of mop"
  },
  {
    "name": "Cleaning cloths",
    "unit": "3-pack",
    "category": "household",
    "image": "images/products/cleaning-cloths.webp",
    "imageAlt": "Representative image of cleaning cloths"
  }
];
