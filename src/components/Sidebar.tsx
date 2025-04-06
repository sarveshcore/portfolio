"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="absolute flex justify-end items-center min-h-full right-30">
      <ul className="text-center">
        {menuItems.map(({ name, path }) => (
          <li
            key={name}
            className={`stroke-10 text-5xl font-extralight pb-3 mb-4 border-b border-b-white transition-colors duration-300 hover:text-[#CC0000] ${
              pathname == path ? "text-[#CC0000]" : "text-[#899485]"
            }`}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
