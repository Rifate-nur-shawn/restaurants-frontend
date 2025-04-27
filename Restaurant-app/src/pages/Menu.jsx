import { useState } from "react";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const [menuItems, _setMenuItems] = useState([
    {
      id: 1,
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 12.99,
      calories: 650,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil on thin crust",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 14.99,
      calories: 820,
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, croutons, and Caesar dressing",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 9.99,
      calories: 320,
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      description: "Creamy pasta with pancetta and parmesan cheese",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 15.99,
      calories: 750,
    },
    {
      id: 5,
      name: "Pasta Carbonara",
      description: "Creamy pasta with pancetta and parmesan cheese",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 15.99,
      calories: 750,
    },
    {
      id: 6,
      name: "Pasta Carbonara",
      description: "Creamy pasta with pancetta and parmesan cheese",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      price: 15.99,
      calories: 750,
    },
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative flex justify-center flex-direction- items-center w-full  bg-opacity-50">
        <section className="w-full h-[60vh] flex brightness-50">
          <img
            src="/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </section>
        <p className="absolute flex justify-center  text-center font-mono text-4xl text-yellow-500 px-8 py-2">
          KHANA'S MENU
        </p>
        <p className="absolute flex justify-center w-[140vh] text-center text-white font-mono  px-8 py-5 mt-27">
          Our thoughtfully crafted menu is a treasure trove of unique and
          delightful dishes, meticulously prepared to delight your senses and
          redefine your dining experience.
        </p>
      </div>
      {/*  first section */}

      <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
          Burgers
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>
        {/*  second section */}
        <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
        Sandwiches
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>
        {/*  third section */}

        <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
        Chickens
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>
        {/*  fourth section */}

        <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
        Rice
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>
        {/*  fifth section */}

        <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
        Shakes
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>
        {/*  sixth section */}
    
        <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
        Potatoes
        </h3>
      </div>

      {/* end  */}
      <div className="py-8 md:py-5 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-8 md:px-16 lg:px-40">
          {menuItems.map((item) => (
            <div key={item.id} className="w-full">
              <FoodCard {...item} />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Menu;
