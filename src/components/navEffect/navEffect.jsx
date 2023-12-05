"use client";

import { useEffect } from "react";

const NavEffect = () => {
    useEffect(() => {
        const listItem = document.querySelectorAll("#landing-header li");
        const menuBackDrop = document.querySelector("#menu-backdrop");
    
        listItem.forEach((item) => {
          item.addEventListener("mouseenter", () => {
            const { left, top, width, height } = item.getBoundingClientRect();
            if (menuBackDrop instanceof HTMLElement) {
              menuBackDrop.style.setProperty("--left", `${left}px`);
              menuBackDrop.style.setProperty("--top", `${top}px`);
              menuBackDrop.style.setProperty("--width", `${width}px`);
              menuBackDrop.style.setProperty("--height", `${height}px`);
              menuBackDrop.style.opacity = "1";
              menuBackDrop.style.visibility = "visible";
            }
          });
          if (menuBackDrop instanceof HTMLElement) {
            item.addEventListener("mouseleave", () => {
              menuBackDrop.style.opacity = "0";
              menuBackDrop.style.visibility = "hidden";
            });
          }
        });
      }, []);
      return (
        <div
          id="menu-backdrop"
          className=" 
                absolute 
                bg-gradient-to-b from-light-redlight dark:from-dark-100 via-light-redbold dark:via-dark-200 to-light-redblack dark:to-light-dark-300 
                backdrop-blur-lg rounded
                translate-x-[var(--left)] translate-y-[var(--top)]
                left-0 top-0
                w-[var(--width)] h-[var(--height)]
                transition-all duration-500
                ease-in-out opacity-0 -z-10
                "
        ></div>
      );
    }

export default NavEffect