import CategorySection from "./CategorySection";

const menCategories = [
  { title: "Shirts", image: "/men1.png" },
  { title: "Printed T-Shirts", image: "/men2.png" },
  { title: "Plain T-Shirt", image: "/men3.png" },
  { title: "Polo T-Shirt", image: "/men4.png" },
  { title: "Hoodies & Sweatshirt", image: "/men5.png" },
  { title: "Jeans", image: "/men6.png" },
  { title: "Jackets", image: "/men7.png" },
  { title: "Boxers", image: "/men8.png" },
];

const womenCategories = [
  { title: "Tops", image: "/women1.png" },
  { title: "Dresses", image: "/women2.png" },
  { title: "Sweaters", image: "/women3.png" },
  { title: "Jeans", image: "/women4.png" },
//   { title: "Activewear", image: "/women5.png" },
//   { title: "Skirts", image: "/women6.png" },
//   { title: "Sleepwear", image: "/women7.png" },
//   { title: "Lingerie", image: "/women8.png" },
];

export default function Categories() {
  return (
    <>
      <CategorySection heading="Categories For Men" data={menCategories} />

      <CategorySection heading="Categories For Women" data={womenCategories} />
    </>
  );
}
