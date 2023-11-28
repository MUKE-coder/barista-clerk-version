"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  const [showNavbar, setShowNavBar] = useState(false);
  const navLinks = [
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Downloads",
      path: "/#tours",
    },
    {
      name: "Consulting",
      path: "/#our-guides",
    },
    {
      name: "Contact Us",
      path: "#",
    },
  ];
  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }

  return (
    <header className="navbar">
      <Link href="/" className="logo">
        <Image src="/logo2.png" width={180} height={43} alt="Barista Gurus" />
        {/* <h2 className="logo-text">
          <span className="top">Barista</span>
          <span className="bottom">Gurus</span>
        </h2> */}
      </Link>
      <nav className={showNavbar ? "showNav" : ""}>
        {navLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.path}
              className={link.path == currentPath ? "activeLink" : ""}
            >
              {link.name}
            </Link>
          );
        })}
        <Link className="call-link" href="tel:+256787439086">
          <MdCall /> +256 787 439086
        </Link>
      </nav>
      <div className="cta">
        <Link href="/login">Login/SignUp</Link>
      </div>
      <button
        id="humbergMenu"
        className={showNavbar ? "showNav" : ""}
        onClick={handleNavBar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
