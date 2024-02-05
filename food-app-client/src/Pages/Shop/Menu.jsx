import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sortoption, setSortOption] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);

  //   loading data
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("/my.json");
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    //   call the function
    fetchData();
  }, []);

  //   filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.cuisine === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  //   show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };
  //   sorting based on A-Z, Z-A. Low-to-High, High-to-Low price
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low-to-High-Price":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-to-Low-Price":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };
  // page display logic
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col  justify-center items-center gap-8">
          {/* Text on Left */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious
              <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Come with Family & feel the joy of mouthwatering food such as
              Pizza, Chicken Items, Tofu, Salad, Beef, Pasta, Dosa, Cookies,
              Smoothies and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
        {/* menu shop section */}
        <div className="section-container">
          {/* filtering and sort */}
          <div className="flex  flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
            {/*category buttons */}
            <div className="flex justify-start md:items-center md:gap-8 gap-4 flex-wrap">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => filterItems("Indian")}
                className={selectedCategory === "Indian" ? "active" : ""}
              >
                Indian
              </button>
              <button
                onClick={() => filterItems("Asian")}
                className={selectedCategory === "Asian" ? "active" : ""}
              >
                Asian
              </button>
              <button
                onClick={() => filterItems("Italian")}
                className={selectedCategory === "Italian" ? "active" : ""}
              >
                Italian
              </button>
              <button
                onClick={() => filterItems("Mexican")}
                className={selectedCategory === "Mexican" ? "active" : ""}
              >
                Mexican
              </button>
              <button
                onClick={() => filterItems("Mediterranean")}
                className={selectedCategory === "Mediterranean" ? "active" : ""}
              >
                Salad
              </button>
              <button
                onClick={() => filterItems("Smoothie")}
                className={selectedCategory === "Smoothie" ? "active" : ""}
              >
                Drinks
              </button>
              <button
                onClick={() => filterItems("Extra")}
                className={selectedCategory === "Extra" ? "active" : ""}
              >
                More
              </button>
            </div>

            {/* sorting base filter */}

            <div className="flex justify-end mb-4 rounded-md">
              <div className="bg-black p-2">
                <FaFilter className="text-white h-4 w-4 " />
              </div>
              {/* sorting option */}
              <select
                name="sort"
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortoption}
                className="bg-black text-white px-2 py-1 rounded-md"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Low-to-High-Price">Low-to-High-Price</option>
                <option value="High-to-Low-Price">High-to-Low-Price</option>
              </select>
            </div>
          </div>
          {/* Products card  */}
          <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {currentItems.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination section */}
      <div className="flex justify-center item-center mt-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? " bg-green text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
