

import Link from "next/link";
import { menu } from "@/data/menu";

const linkClass =
  "relative font-[700] text-white cursor-pointer " +
  "after:absolute after:left-0 after:-bottom-2 " +
  "after:h-[2px] after:w-0 after:bg-white " +
  "after:transition-all after:duration-300 " +
  "hover:after:w-full";

export default function DesktopMenu() {
  return (
    <nav className="hidden md:flex gap-8 justify-center text-white center-menu">
      {menu.map((item) => (
        <div key={item.name} className="relative group pt-3">
          
          {/* MAIN MENU LINK */}
          {item.href ? (
            <Link href={item.href} className={linkClass}>
              {item.name}
            </Link>
          ) : (
            <span className={linkClass}>{item.name}</span>
          )}

          {/* FIRST DROPDOWN */}
          {item.children && (
            <div className="absolute left-0 top-full pt-[34px] hidden group-hover:block z-50">
              
              {/* Visible Dropdown Box */}
              <div className="bg-primary  text-white min-w-[260px] p-4 shadow-xl dropdown-card">
                
                {item.children.map((child) =>
                  child.children ? (
                    /* SUB MENU WITH SECOND LEVEL */
                    <div key={child.name} className="relative group/sub">
                      
                      <div className="flex items-center justify-between pb font-[500] cursor-pointer hover:text-gray-300">
                        {child.name}
                        <span className="ml-2">›</span>
                      </div>

                      {/* SECOND LEVEL */}
                      <div className="absolute left-full top-0 pl-[17px] hidden group-hover/sub:block">
                        
                        <div className="bg-primary text-white min-w-[220px] p-2 shadow-xl">
                          {child.children.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block pb  font-[500] hover:text-gray-300"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>

                      </div>
                    </div>
                  ) : (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block pb font-[500] submenu hover:text-gray-300"
                    >
                      {child.name}
                    </Link>
                  )
                )}

              </div>
            </div>
          )}

        </div>
      ))}
    </nav>
  );
}