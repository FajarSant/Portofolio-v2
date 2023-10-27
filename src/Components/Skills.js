import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiPhp, DiNodejsSmall, DiReact, DiLaravel, DiMysql, DiNpm } from "react-icons/di";

function GridExample() {
  const techStack = [
    {
      id: 1,
      name: 'HTML',
      icon: <DiHtml5 size={32} />,
      status: 'Advanced',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
    },
    {
      id: 2,
      name: 'CSS',
      icon: <DiCss3 size={32} />,
      status: 'Advanced',
      imageUrl: 'URL_TO_CSS_ICON',
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: <DiJavascript1 size={32} />,
      status: 'Advanced',
      imageUrl: 'URL_TO_JS_ICON',
    },
    // Tambahkan entri lain di sini
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contoh Grid dengan Tailwind CSS dan Daisy UI</h1>

      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:gap-10 2xl:gap-12">
        {techStack.map((tech) => (
          <div key={tech.id}>
            <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3 transition-transform transform-gpu hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                <img alt={tech.name} loading="lazy" width={32} height={32} decoding="async" src={tech.imageUrl} className="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]" style={{ color: 'transparent' }} />
              </div>
              <div className="flex items-center text-sm md:text-base lg:text-lg">
                <div className="tech font-medium text-secondary transition-all duration-300 translate-y-0">{tech.name}</div>
                <div className="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">{tech.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridExample;
