import FoodCard from "../components/FoodCard";
import { menus } from "../constant/foodProducts";
import HeroBanner from "../components/HeroBanner";
import MenuName from "../components/MenuName";
import { sandwiches } from "../constant/foodProducts";
import { Chickens } from "../constant/foodProducts";
import { Rice } from "../constant/foodProducts";
import { Shakes } from "../constant/foodProducts";
import { Potatoes } from "../constant/foodProducts";
import { SweetTooth } from "../constant/foodProducts";



const Menu = () => {
  return (
    <div>
      <HeroBanner
        headingText={"Khanas  menu"}
        subHeadingText={
          "ur thoughtfully crafted menu is a treasure trove of unique and delightful dishes, meticulously prepared to delight your senses and redefine your dining experience."
        }
      />

      <div>
        <MenuName menuname={"Burgers"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {menus?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>
      <div>
        <MenuName menuname={"Sandwiches"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {sandwiches?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>
      <div>
        <MenuName menuname={"Chickens"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {Chickens?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>

      <div>
        <MenuName menuname={"Rice"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {Rice?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>

      <div>
        <MenuName menuname={"Shakes"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {Shakes?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>

      <div>
        <MenuName menuname={"Potatoes"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {Potatoes?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>

      <div>
        <MenuName menuname={"Sweet Tooth"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40 py-8 md:py-5 bg-gray-100">
        {SweetTooth?.map((menu) => (
          <div key={menu.id} className="w-full">
            <FoodCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
