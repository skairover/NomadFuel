import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsBackpack2 } from "react-icons/bs";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { LuThermometerSun } from "react-icons/lu";

const features = [
  {
    title: "Compact",
    text: "Slim, pocket-friendly form — perfect for light packing and fast moving.",
    icon: <BsBackpack2 />, // Replace with real paths
  },
  {
    title: "Clean Energy",
    text: "Made from organic ingredients — no artificial junk or sugar crashes.",
    icon: <MdOutlineEnergySavingsLeaf />,
  },
  {
    title: "Climate Resistant",
    text: "Survives the heat, cold, or rough terrain — built for endurance.",
    icon: <LuThermometerSun />,
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-screen min-h-[70vh] bg-[#f4ead5] text-gray-800 px-4 py-20 flex flex-col items-center"
    >
    <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold uppercase mb-12"
        >
        Features
    </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
        {features.map((f, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`${
            f.title === "Clean Energy"
                ? "hover:text-green-300"
                : f.title === "Compact"
                ? "hover:text-orange-300"
                : f.title === "Climate Resistant"
                ? "hover:text-yellow-300"
                : "text-white"
            } bg-[#222222] text-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300`}
          >
            <h1>{f.icon}</h1>
            <h3 className="text-xl font-bold uppercase">{f.title}</h3>
            <p className="text-sm text-gray-300">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
