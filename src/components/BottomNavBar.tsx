import React from "react";
import { Link } from "react-router-dom";

// Define the navigation items with SVGs having `fill="currentColor"`
const nav = [
  {
    path: "/customerHome",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 29 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z"
          fill="currentColor" // Use currentColor for CSS control
        />
      </svg>
    ),
    name: "Home",
  },
  {
    path: "/search",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
          fill="currentColor" // Use currentColor for CSS control
        />
      </svg>
    ),
    name: "Search",
  },
  {
    path: "/bag",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.4558 20.5187L23.4583 20.542L23.4629 20.565C23.4867 20.6823 23.5 20.796 23.5 20.9091C23.5 21.8094 22.8081 22.5 22 22.5H12H2C1.19186 22.5 0.5 21.8094 0.5 20.9091C0.5 20.796 0.513314 20.6823 0.537055 20.565L0.541717 20.542L0.544199 20.5187L2.4972 2.14375L2.5 2.11741V2.09091C2.5 1.19065 3.19186 0.5 4 0.5H12H20C20.8081 0.5 21.5 1.19065 21.5 2.09091V2.11741L21.5028 2.14375L23.4558 20.5187ZM17.5 6.27273V5.44368C18.1009 5.08516 18.5 4.41815 18.5 3.65909C18.5 2.53849 17.6249 1.59091 16.5 1.59091C15.3751 1.59091 14.5 2.53849 14.5 3.65909V6.27273C14.5 7.74695 13.3571 8.90909 12 8.90909C10.6429 8.90909 9.5 7.74695 9.5 6.27273V3.65909C9.5 2.53849 8.62486 1.59091 7.5 1.59091C6.37514 1.59091 5.5 2.53849 5.5 3.65909C5.5 4.41815 5.89908 5.08516 6.5 5.44368V6.27273C6.5 9.41001 8.94614 12 12 12C15.0539 12 17.5 9.41001 17.5 6.27273Z"
          stroke="currentColor" // Use currentColor for CSS control
        />
      </svg>
    ),
    name: "Bag",
  },
  {
    path: "/shop",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
          stroke="currentColor" // Use currentColor for CSS control
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          opacity="0.5"
          d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
          stroke="currentColor" // Use currentColor for CSS control
          strokeWidth="1.5"
        />
        <path
          opacity="0.5"
          d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
          stroke="currentColor" // Use currentColor for CSS control
          strokeWidth="1.5"
        />
        <path
          d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
          stroke="currentColor" // Use currentColor for CSS control
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Shop",
  },
  {
    path: "/profile",
    icon: (
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1408 25L11.1408 24.5H11.1408L11.1408 25ZM1 19.5577L0.500057 19.5502L0.497722 19.705L0.583336 19.8341L1 19.5577ZM21.2817 19.5577L21.6984 19.8341L21.784 19.705L21.7816 19.5502L21.2817 19.5577ZM11.1408 1.5C13.6703 1.5 15.7113 3.54093 15.7113 6.07042H16.7113C16.7113 2.98865 14.2226 0.5 11.1408 0.5V1.5ZM15.7113 6.07042C15.7113 8.59991 13.6703 10.6408 11.1408 10.6408V11.6408C14.2226 11.6408 16.7113 9.1522 16.7113 6.07042H15.7113ZM11.1408 10.6408C8.61134 10.6408 6.57041 8.59991 6.57041 6.07042H5.57041C5.57041 9.1522 8.05906 11.6408 11.1408 11.6408V10.6408ZM6.57041 6.07042C6.57041 3.54093 8.61134 1.5 11.1408 1.5V0.5C8.05906 0.5 5.57041 2.98865 5.57041 6.07042H6.57041ZM11.1408 24.5C7.22971 24.5 3.57865 22.5406 1.41666 19.2813L0.583336 19.8341C2.9306 23.3727 6.89454 25.5 11.1408 25.5L11.1408 24.5ZM1.49994 19.5653C1.50991 18.904 1.84489 18.2784 2.47245 17.6902C3.10211 17.1002 3.99222 16.5826 5.01476 16.1549C7.06188 15.2987 9.51897 14.8521 11.1408 14.8521V13.8521C9.38244 13.8521 6.79445 14.3266 4.6289 15.2324C3.5451 15.6857 2.53697 16.2593 1.78865 16.9606C1.0382 17.6638 0.51544 18.5297 0.500057 19.5502L1.49994 19.5653ZM11.1408 14.8521C12.7541 14.8521 15.2113 15.2986 17.2608 16.155C18.2845 16.5827 19.1762 17.1004 19.8072 17.6906C20.4362 18.2789 20.7718 18.9045 20.7817 19.5653L21.7816 19.5502C21.7662 18.5293 21.242 17.6633 20.4903 16.9603C19.7407 16.2591 18.731 15.6855 17.6463 15.2323C15.4789 14.3267 12.891 13.8521 11.1408 13.8521V14.8521ZM20.865 19.2813C18.703 22.5406 15.052 24.5 11.1408 24.5L11.1408 25.5C15.3872 25.5 19.3511 23.3727 21.6984 19.8341L20.865 19.2813Z"
          fill="currentColor" // Use currentColor for CSS control
        />
      </svg>
    ),
    name: "Profile",
  },
];

const BottomNavBar = ({ name }: { name?: string }) => {
  return (
    <div
      style={{ boxShadow: "0 -8px 32px -4px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-5 fixed bottom-0 w-full h-[5em] rounded-t-3xl"
    >
      <div className="flex w-full h-full justify-between">
        {nav.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col justify-center items-center gap-1"
          >
            <div
              className="icon"
              style={{
                color: item.name === name ? "#9F57F9" : "#9B9B9B",
                width: "24px",
                height: "24px",
              }}
            >
              {item.icon}
            </div>
            <p
              className="text-md"
              style={{
                color: item.name === name ? "#9F57F9" : "#9B9B9B",
              }}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;
