export type Juice = {
  id: string;
  name: string;
  tag: string;
  description: string;
  ingredients: string[];
  image: string;
  swatch: string;
};

export const juices: Juice[] = [
  {
    id: "verde",
    name: "Verde",
    tag: "Daily green",
    description:
      "A clean, bright press of leafy greens and cucumber—light enough for every morning, strong enough to reset the day.",
    ingredients: ["Kale", "Cucumber", "Celery", "Green apple", "Lemon", "Ginger"],
    image: "/images/juice-verde.jpg",
    swatch: "#7CB342",
  },
  {
    id: "sunrise",
    name: "Sunrise",
    tag: "Golden glow",
    description:
      "Carrot and turmeric meet citrus for a warm, sunny pour that tastes like Huntington Park mornings.",
    ingredients: ["Carrot", "Orange", "Turmeric", "Ginger", "Lemon"],
    image: "/images/juice-sunrise.jpg",
    swatch: "#E89B4B",
  },
  {
    id: "raiz",
    name: "Raíz",
    tag: "Deep root",
    description:
      "Earthy beet rooted in berry brightness—bold color, balanced sweetness, nothing artificial.",
    ingredients: ["Beet", "Raspberry", "Strawberry", "Apple", "Lemon"],
    image: "/images/juice-raiz.jpg",
    swatch: "#B84A6E",
  },
  {
    id: "tropic",
    name: "Tropic",
    tag: "Island lift",
    description:
      "Pineapple and mango pressed cold for a bright, tropical finish without the sugar crash.",
    ingredients: ["Pineapple", "Mango", "Passion fruit", "Mint", "Lime"],
    image: "/images/juice-tropic.jpg",
    swatch: "#D4A017",
  },
];
