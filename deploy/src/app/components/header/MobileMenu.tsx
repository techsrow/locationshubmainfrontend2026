"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type MenuItem = {
  name: string;
  href?: string;
  children?: MenuItem[];
};

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-[85%] bg-white p-6 overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl font-bold text-[#4d2a3a]"
        >
          ✕
        </button>

        {/* Menu */}
        <nav className="mt-12 text-[#4d2a3a]">
          {menu.map((item: MenuItem) => (
            <div key={item.name} className="border-b border-gray-200 py-3">
              
              {/* If Has Children */}
              {item.children ? (
                <>
                  {/* Level 1 Parent */}
                  <button
                    onClick={() =>
                      setActive(active === item.name ? null : item.name)
                    }
                    className="flex w-full items-center justify-between font-semibold"
                  >
                    {item.name}
                    <span className="text-xl">
                      {active === item.name ? "−" : "+"}
                    </span>
                  </button>

                  {/* Level 2 */}
                  {active === item.name && (
                    <div className="mt-3 ml-4 space-y-3 font-medium">
                      {item.children.map((child) => (
                        <div key={child.name}>
                          
                          {/* If Level 3 Exists (Costumes case) */}
                          {child.children ? (
                            <>
                              <div className="font-semibold">
                                {child.name}
                              </div>

                              <div className="ml-4 mt-2 space-y-2">
                                {child.children.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className="block hover:text-black transition"
                                    onClick={() => setOpen(false)}
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </>
                          ) : (
                            <a
                              href={child.href}
                              className="block hover:text-black transition"
                              onClick={() => setOpen(false)}
                            >
                              {child.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* If No Children */
                <a
                  href={item.href}
                  className="block font-semibold hover:text-black transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="mt-10 space-y-3 text-[#4d2a3a]">
         <div className="flex items-center gap-2">
             <FaPhoneAlt className="" />
             <span>+919920060062</span>
           </div>
         
           <div className="flex items-center gap-2">
             <HiOutlineMail className="" />
             <span>hello@locationshub.in</span>
           </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919920060062"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}