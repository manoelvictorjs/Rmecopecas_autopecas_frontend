"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../../public/imagens/RmEcopecasLogo.png";
import NavItem from "./NavItem";


const Navbar = () => {
  const [topNavScrolled, setTopNavScrolled] = useState(false);
  const [shouldHideNav, setShouldHideNav] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Atualiza a primeira navbar
      setTopNavScrolled(currentScrollY > 20);
      
      // Lógica para esconder/revelar
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        // Rolando para baixo - esconde imediatamente
        setShouldHideNav(true);
        setShowContent(false);
      } else if (currentScrollY < lastScrollY) {
        // Rolando para cima - mostra a barra imediatamente
        setShouldHideNav(false);
        
        // Mostra o conteúdo após 0,5 segundo
        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* PRIMEIRA NAVBAR (TOPO) */}
      <div className={`fixed top-0 left-0 w-full bg-green-100 z-50 transition-all duration-300 ${topNavScrolled ? "h-20" : "h-28"}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              width={topNavScrolled ? 180 : 240}
              height={topNavScrolled ? 60 : 80}
              alt="Logo"
              className="transition-all duration-300"
              priority
            />
             
          </Link>

        </div>
      </div>

      {/* SEGUNDA NAVBAR (LINKS) */}
      <div className={`hidden md:block fixed w-full bg-green-100 z-40 transition-all duration-500 ${topNavScrolled ? "top-20" : "top-28"} ${shouldHideNav ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="container mx-auto px-2 py-3">
          <div className={`flex justify-center space-x-8 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
            <Link href="/produtos" className="text-black hover:text-green-600 font-semibold text-lg transition-colors duration-300">
              Acessórios Internos
            </Link>
            <Link href="/servicos" className="text-black hover:text-green-600 font-semibold text-lg transition-colors duration-300">
              Acessóios Externos
            </Link>
            <Link href="/contato" className="text-black hover:text-green-600 font-semibold text-lg transition-colors duration-300">
              Mecânica
            </Link>
            <Link href="/contato" className="text-black hover:text-green-600 font-semibold text-lg transition-colors duration-300">
              Injeção
            </Link> 
            <Link href="/contato" className="text-black hover:text-green-600 font-semibold text-lg transition-colors duration-300">
              Suspensão   
            </Link>
            
            
          
          </div>
        </div>
      </div>
      

      {/* ESPAÇO RESERVADO */}
      <div style={{ height: topNavScrolled ? '5rem' : '7rem' }} />
    </>
  );
};

export default Navbar;