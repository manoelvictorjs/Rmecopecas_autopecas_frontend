import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icon, Link } from "lucide-react";
import logo from "@/../../public/imagens/RmEcopecasLogo.png";
import Image from "next/image";
import NavItems from "../components/NavItems";

const Navbar = () => {
  return (
    <div className=" bg-green-200 sticky z-50 top-10 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b-2 border-green-300">
            <div className="flex h-16 items-center ">
              <div className="h-50 w-80 t ml-6 flex lg:ml-0">
                <a href="/">
                  <Image src={logo} alt="logo importada" />
                </a>
                <div className="hidden z-50 lg:ml-8 lg:block lg: self-stretch">
                <NavItems />
              </div>
              </div>
                <div className="hidden z-50 lg:ml-8 lg:block lg: self-stretch">
                 
                </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
