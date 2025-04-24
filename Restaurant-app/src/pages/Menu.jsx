import { useState } from "react";

const Menu = () => {
    const [menuItems, _setMenuItems] = useState([
        {
            id: 1,
            name: "Classic Burger",
            description: "Juicy beef patty with lettuce, tomato, and special sauce",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 12.99,
            calories: 650
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "Fresh tomatoes, mozzarella, and basil on thin crust",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 14.99,
            calories: 820
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, croutons, and Caesar dressing",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 9.99,
            calories: 320
        },
        {
            id: 4,
            name: "Pasta Carbonara",
            description: "Creamy pasta with pancetta and parmesan cheese",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 15.99,
            calories: 750
        },
        {
            id: 5,
            name: "Pasta Carbonara",
            description: "Creamy pasta with pancetta and parmesan cheese",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 15.99,
            calories: 750
        },
        {
            id: 6,
            name: "Pasta Carbonara",
            description: "Creamy pasta with pancetta and parmesan cheese",
            image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: 15.99,
            calories: 750
        }
    ]);

    return (
        <div className="container mx-auto pt-16 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map(item => (
                    <div key={item.id} className="card bg-base-100 shadow-sm">
                        <figure>
                            <img src={item.image} alt={item.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.description}</p>
                            
                            <div className="stats shadow mt-4">
                                <div className="stat">
                                    <div className="stat-title">Price</div>
                                    <div className="stat-value">${item.price}</div>
                                </div>
                                
                                <div className="stat">
                                    <div className="stat-title">Calories</div>
                                    <div className="stat-value">{item.calories}</div>
                                </div>
                            </div>
                            
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary bg-amber-600 rounded">Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;