"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
   name: string;
   href: string;
};

const Navbar = () => {
   const pathname = usePathname();
   const navLinks: NavLink[] = [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
   ];

   return (
      <header className="flex items-center flex-wrap justify-between">
         <div className="mr-2">
            <Link
               className="text-[#9A6AFF] text-3xl flex items-center hover:text-[#eae0ff] duration-500"
               href="/"
            >
               {">_ katz"}
               <span className="ml-1 w-4 h-8 bg-current"></span>
            </Link>
         </div>
         <nav>
            <div className="flex gap-3 mt-1">
               {navLinks.map((nav) => {
                  return (
                     <Link
                        href={nav.href}
                        key={nav.name}
                        className={`underline-offset-8 ${
                           pathname === nav.href
                              ? "underline decoration-slate-600 duration-1000 decoration-2 text-[#9A6AFF]"
                              : "text-gray-500 hover:text-white duration-200"
                        }`}
                     >
                        {nav.name}
                     </Link>
                  );
               })}
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
