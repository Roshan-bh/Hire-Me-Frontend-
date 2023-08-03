import Link from "next/link";
import {
  BiLogIn,
  BiUserCircle,
  BiSearch,
  BiWindowClose,
  BiMenu,
} from "react-icons/bi";
import { useEffect, useState } from "react";
import { CustomLink } from "./subparts/CustomLink";

export const Navbar = () => {
  //State for navbar open and closed.
  const [open, setOpen] = useState(false);

  const [signupOpen, setsignupOpen] = useState(false);
  const [userLoginStatus, setUserLoginStatus] = useState(false);

  //State for navbar scrolled functionality.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let value;
    value = localStorage.getItem("userLoginStatus");
    setUserLoginStatus(value);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // if (typeof window !== "undefined") {

  // }
  return (
    <>
      <header
        className={`${
          isScrolled
            ? "shadow-lg bg-white transition-all duration-600"
            : "shadow-lg bg-white md:bg-transparent"
        }`}
      >
        <div className="left md:flex items-center md:space-x-5">
          <div
            className="text-4xl absolute md:hidden right-1 top-1 cursor-pointer hover:text hover:text-black/60"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <BiWindowClose className="inline-block" />
            ) : (
              <BiMenu className="inline-block" />
            )}
          </div>

          <Link href="/" className="ml-11  md:ml-0">
            <span className=" font-mono font-bold text-3xl ">Hire Me</span>
          </Link>

          <ul
            className={`space-y-4 md:space-y-0  md:space-x-4 md:flex ${
              open ? "" : "hidden"
            }`}
          >
            <CustomLink href="/" title="Home" />
            <CustomLink href="/internships" title="Internships" />
            <CustomLink href="/jobs" title="Jobs" />
            <CustomLink href="/contact" title="Contact Us" />
          </ul>
        </div>
        <div
          className={`right flex justify-center space-x-4 ${
            open ? "" : "hidden md:flex"
          }`}
        >
          {!userLoginStatus && (
            <>
              {" "}
              <div>
                <button
                  className="flex navLink text-center bg-slate-300/60 rounded-md px-3 py-3 hover:bg-slate-400 text-lg"
                  onClick={() => setsignupOpen((prev) => !prev)}
                >
                  <div>
                    <BiUserCircle className="w-5 h-5 mt-1 mr-1" />
                  </div>
                  <span>signup</span>
                </button>
                {signupOpen && (
                  <div className="bg-white py-2 shadow-md">
                    <div
                      className="text-md px-3 py-2 hover:bg-slate-400 hover:rounded-sm "
                      onClick={() => setsignupOpen((prev) => !prev)}
                    >
                      <Link
                        href={{
                          pathname: "/employer/[layout]",
                          query: { layout: "signup" },
                        }}
                      >
                        {" "}
                        Employer
                      </Link>
                    </div>
                    <div
                      className="text-md px-3 py-2 hover:bg-slate-400 hover:rounded-sm "
                      onClick={() => setsignupOpen((prev) => !prev)}
                    >
                      <Link
                        href={{
                          pathname: "/candidate/[layout]",
                          query: { layout: "signup" },
                        }}
                      >
                        {" "}
                        Candidate
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/login">
                <button className="flex navLink text-center bg-slate-300/60 rounded-md px-2 py-3 hover:bg-slate-400 text-lg h-[56px]">
                  <div>
                    <BiLogIn className="w-5 h-5 mt-1 mr-1 " />
                  </div>
                  <span>Login</span>
                </button>
              </Link>
            </>
          )}

          {userLoginStatus == "true" && (
            <Link href="/dashboard">
              <button className="flex navLink text-center bg-slate-300/60 rounded-md px-2 py-3 hover:bg-slate-400 text-lg h-[56px]">
                <div>
                  <BiLogIn className="w-5 h-5 mt-1 mr-1 " />
                </div>
                <span>Dashboard</span>
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};
