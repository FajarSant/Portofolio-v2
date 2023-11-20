import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Skills() {
  const techStack = [
    {
      id: 1,
      name: "HTML",
      status: "Advanced",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    },
    {
      id: 2,
      name: "CSS",
      status: "Advanced",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 3,
      name: "JavaScript",
      status: "Advanced",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
    },
    {
      id: 4,
      name: "PHP",
      status: "Intermediate",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
    },
    {
      id: 5,
      name: "MySQL",
      status: "Intermediate",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    },
    {
      id: 6,
      name: "React.js",
      status: "Advanced",
      imageUrl:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    },
    {
      id: 7,
      name: "Laravel",
      status: "Intermediate",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    },
    {
      id: 8,
      name: "Node.js",
      status: "Intermediate",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
    },
    {
      id: 9,
      name: "Next.js",
      status: "Intermediate",
      imageUrl:
        "https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",
    },
  ];

  const style = {
    background: "rgba(0, 0, 0, 0.75)", // Slightly transparent background
    backdropFilter: "blur(10px)", // Blur effect
    borderRadius: "1.5rem", // Rounded corners
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Contoh Grid dengan Tailwind CSS dan Daisy UI
      </h1>
      <div ref={ref} style={style} className="p-9 mt-9">
        <motion.div
          className="grid grid-cols-2 gap-4 pb-12 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:gap-10 2xl:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-00 px-2 py-2 hover:bg-amber-600  hover:border-orange-500 hover:bg-opacity-10 md:gap-3 lg:px-3 transition-transform transform-gpu hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                <img
                  alt={tech.name}
                  loading="lazy"
                  width={32}
                  height={32}
                  decoding="async"
                  src={tech.imageUrl}
                  className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="flex items-center text-sm md:text-base lg:text-lg">
                <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                  {tech.name}
                </div>
                <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-500 transition-all duration-300 md:text-xs lg:text-sm">
                  {tech.status}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
