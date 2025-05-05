import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";

const locations = {
  BASUNDHARA: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.956911451682!2d90.42392577510076!3d23.75067638890613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77ceaa2534f%3A0x75edb98e91ce49c9!2sKhana's%20-%20The%20Club%20House!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "442 New Apollo Road, Dhilabari Road, Vatara, Bashundhara R/A, Dhaka -1229",
    phone: "01726-805954",
  },
  DHANMONDI: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "House 123, Road 4A, Dhanmondi, Dhaka",
    phone: "01726-123456",
  },
  SHANTINAGAR: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "45 Shantinagar Road, Dhaka",
    phone: "01726-789012",
  },
  PALTAN: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "12 Paltan Avenue, Dhaka",
    phone: "01726-345678",
  },
  AZIMPUR: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "89 Azimpur Road, Dhaka",
    phone: "01726-901234",
  },
  MOTIJHEEL: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "34 Motijheel Commercial Area, Dhaka",
    phone: "01726-567890",
  },
  FARMGATE: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "56 Farmgate Main Road, Dhaka",
    phone: "01726-234567",
  },
  BANGSHAL: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "78 Bangshal Road, Dhaka",
    phone: "01726-890123",
  },
  KHILKHET: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "23 Khilkhet Main Road, Dhaka",
    phone: "01726-456789",
  },
  KHILGAON: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "45 Khilgaon Chowdhury Para, Dhaka",
    phone: "01726-012345",
  },
  WARI: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "67 Wari Street, Dhaka",
    phone: "01726-678901",
  },
  BARIDHARA: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "12 Baridhara Diplomatic Zone, Dhaka",
    phone: "01726-234567",
  },
  MIRPUR: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "89 Mirpur Road, Dhaka",
    phone: "01726-890123",
  },
  MOHAMMADPUR: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "34 Mohammadpur Housing Estate, Dhaka",
    phone: "01726-456789",
  },
  UTTARA: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "56 Uttara Sector 7, Dhaka",
    phone: "01726-012345",
  },
  BANANI: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "23 Banani Road 11, Dhaka",
    phone: "01726-678901",
  },
  GULSHAN: {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.139297287683!2d90.37414697510066!3d23.744515389003156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9b4c9444d79%3A0xbeca71b74d9b6210!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1714897744727!5m2!1sen!2sbd",
    address: "45 Gulshan Avenue, Dhaka",
    phone: "01726-234567",
  },
};

const Locations = () => {
  const [selected, setSelected] = useState("BASUNDHARA");

  const location = locations[selected];

  const formatLocationName = (loc) => {
    return loc
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen text-white ">
      <HeroBanner
        headingText={"Locations"}
        subHeadingText={
          "Finding the closest Khana’s is only a click away. Our restaurants are located throughout the prime locations of Dhaka. Use our restaurant locator to find your nearest Khana’s."
        }
      />

      <div className="w-full max-w-7xl mx-auto p-4">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(locations).map((loc) => (
            <button
              key={loc}
              onClick={() => setSelected(loc)}
              className={`px-4 py-2  transition-colors duration-200 ${
                selected === loc
                  ? "bg-red-800 text-white"
                  : "border-[1px] border-black text-gray-800 hover:bg-gray-300"
              }`}
            >
              {formatLocationName(loc)}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="w-full h-[350px] mb-4">
          <iframe
            className="w-full h-full rounded-md"
            src={location.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 text-sm">
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-red-500 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <p className="text-white">{location.address}</p>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.58.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.01c.55 0 1 .45 1 1 0 1.25.24 2.46.69 3.58.13.33.05.7-.21 1.11l-2.2 2.2z" />
            </svg>
            <span className="text-white">{location.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;