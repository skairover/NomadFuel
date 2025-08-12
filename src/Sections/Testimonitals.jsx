import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "NomadFuel kept me going through the Sahara.",
    author: "Aisha, Desert Hiker",
  },
  {
    quote: "Tastes clean, hits hard. Love it.",
    author: "Marco, Trail Runner",
  },
  {
    quote: "No sugar, no nonsense. Just power.",
    author: "Fatima, Rock Climber",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-screen bg-[#FF6A00] text-gray-900 py-20 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">
        What Adventurers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <p className="italic mb-4">"{t.quote}"</p>
            <p className="font-semibold text-sm uppercase text-[#FF6A00]">
              {t.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
