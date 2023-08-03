import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export const CustomLink = ({ href, title }) => {
  const router = useRouter();

  return (
    <div>
      <Link href={href} className="relative group">
        <li className="navLink text-center md:text-start text-lg ">{title}</li>
        <span
          className={`inline-block w-0 -bottom-1 bg-yellow-500 absolute  h-[2.5px] rounded-md group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </div>
  );
};
