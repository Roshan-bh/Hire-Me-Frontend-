import Image from "next/image";
import { useEffect, useState } from "react";
import { Navtext } from "../subparts/navtext";
import { Search } from "../subparts/search";

export const Banner = () => {
  const slides = [
    {
      path: "/images/1.jpg",
    },
    {
      path: "/images/2.jpg",
    },
    {
      path: "/images/4.jpg",
    },
  ];
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
  }, [index]);

  return (
    <div>
      <div className="absolute w-screen min-h-[90vh] top-0 left-0 -z-20">
        <Image src={`${slides[index].path}`} alt="Banner" fill={true} />
      </div>
      <div
        className="mt-[130px]
       px-7 md:px-20"
      >
        <Search />
      </div>
      <Navtext />
    </div>
  );
};
