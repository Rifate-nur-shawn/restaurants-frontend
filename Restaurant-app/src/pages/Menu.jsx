import FoodCard from "../components/FoodCard";
import HeroBanner from "../components/HeroBanner";
import MenuName from "../components/MenuName";
import { 
  menus, 
  sandwiches, 
  Chickens, 
  Rice, 
  Shakes, 
  Potatoes, 
  SweetTooth 
} from "../constant/foodProducts";

const Menu = () => {
  
  const menuCategories = [
    { name: "Burgers", items: menus },
    { name: "Sandwiches", items: sandwiches },
    { name: "Chickens", items: Chickens },
    { name: "Rice", items: Rice },
    { name: "Shakes", items: Shakes },
    { name: "Potatoes", items: Potatoes },
    { name: "Sweet Tooth", items: SweetTooth },
  ];

  return (
    <div>
      <HeroBanner
        headingText={"Khanas menu"}
        subHeadingText={
          "Our thoughtfully crafted menu is a treasure trove of unique and delightful dishes, meticulously prepared to delight your senses and redefine your dining experience."
        }
      />

      {menuCategories.map((category, index) => (
        <div key={index}>
          <div>
            <MenuName menuname={category.name} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
            {category.items?.map((menu) => (
              <div key={menu.id} className="w-full">
                <FoodCard menu={menu} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;