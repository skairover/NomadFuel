import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../CardStyles.css"

const Card = ({
  imgUrl1,
  imgUrl2,
  title = "NomadFuel Bar",
  text = "Power, portability, and clean energy in every bite.",
  price = 12.99,
  ingredients = ["Dates", "Almonds", "Pea Protein", "Cocoa", "Sea Salt"]
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageSwitch = () => {
    setImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="perspective-1000 w-82 h-112">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT SIDE */}
        <div className="absolute w-full h-full backface-hidden bg-[#f4ead5] rounded-lg shadow-lg p-4 flex flex-col justify-between text-black">
          <div className="relative w-full h-52 overflow-hidden rounded-lg mb-4">
            <div className="absolute top-0 left-0 flex transition-transform duration-500 ease-in-out w-full h-full" style={{ transform: `translateX(-${imageIndex * 50}%)`, width: "200%" }}>
              <img src={imgUrl1} alt="Front" className="w-full h-full object-cover bg-white" />
              <img src={imgUrl2} alt="Back" className="w-full h-full object-contain bg-white" />
            </div>
          </div>

          <div className="text-2xl font-bold">{title}</div>
          <p className="text-sm mt-1">{text}</p>

          <button
            onClick={handleFlip}
            className="mt-2 text-sm underline text-orange-800 hover:text-black self-start"
          >
            Ingredients →
          </button>

          <div className="flex justify-between items-center p-4 text-2xl font-black mt-2">
            <button
              className="flex items-center justify-center w-10 h-10 pb-1 rounded-full bg-[#222222] hover:bg-[#121212] text-white"
              onClick={handleImageSwitch}
            >
              ←
            </button>
            <p className="text-[#cc5500]">{price}$</p>
            <button
              className="flex items-center justify-center w-10 h-10 pb-1 rounded-full bg-[#222222] hover:bg-[#121212] text-white"
              onClick={handleImageSwitch}
            >
              →
            </button>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#f4ead5] rounded-lg shadow-lg p-4 flex flex-col justify-between text-black">
          <div>
            <h2 className="text-xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-sm">
              {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleFlip}
            className="self-end rounded bg-gray-300 px-3 py-1 hover:bg-gray-400 mt-4"
          >
            ← Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
