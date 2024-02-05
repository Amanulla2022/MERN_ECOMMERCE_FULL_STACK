import React from "react";
const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/categories/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 break fast)",
    image: "/images/home/categories/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 dessert)",
    image: "/images/home/categories/img3.png",
  },
  {
    id: 4,
    title: "Brows All",
    des: "(255 Items)",
    image: "/images/home/categories/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16 ">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Catagories</h2>
      </div>

      {/* category cards */}
      <div className="flex  sm:slex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 max-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                className="bg-[#C1F1C6] p-5 rounded-full w-32 h-32"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="mt-5 spce-y-1 ">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
