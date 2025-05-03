const menuName = ({menuname}) => {
  return (
    <div className="flex justify-center">
      <div className="w-[157vh] max-w-full h-[10vh] bg-[url('/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg')] bg-cover bg-center py-1 mt-16">
        <h3 className="text-2xl md:text-4xl mt-2 font-bold text-left text-white px-4 md:px-6">
          {menuname}
        </h3>
      </div>
    </div>
  );
};

export default menuName;
