import OffersCard from "../components/OffersCard";
import { offers } from "../constant/OffersCard";

const Offers = () => {
  return (
    <div className="z-12">
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
      <div >
        {offers.map((offer) => (
          <div key={offer.id}>
            <OffersCard menu={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
