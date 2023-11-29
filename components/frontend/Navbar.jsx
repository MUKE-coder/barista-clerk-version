"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { generateInitials } from "@/utils/generateInitials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Navbar() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const currentPath = usePathname();
  const [showNavbar, setShowNavBar] = useState(false);

  if (status === "loading") {
    return <p>loading...</p>;
  }

  const navLinks = [
    {
      name: "Courses",
      path: "/#courses",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Downloads",
      path: "/#downloads",
    },
    {
      name: "Consulting",
      path: "/#consultation",
    },
    {
      name: "Contact Us",
      path: "/#contact",
    },
  ];
  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }
  const initials = generateInitials(session.user.name);
  // console.log(session);
  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
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
              onClick={handleNavBar}
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
      {status === "authenticated" ? (
        <div className="gap-4 items-center flex-wrap hidden sm:flex">
          <button className="text-slate-100 bg-orange-900 w-12 h-12 rounded-full flex items-center justify-center">
            {initials}
          </button>
          <Link href="/dashboard/browse-courses">Dashboard</Link>
        </div>
      ) : (
        <div className="cta">
          <Link href="/login">Login/SignUp</Link>
        </div>
      )}

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
