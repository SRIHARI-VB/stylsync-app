import { Button } from "antd";
import { MessageCircleMore } from "lucide-react";
import React from "react";

const nav = [
  {
    path: "/assets/home.svg",
    name: "Home",
  },
  {
    path: "/assets/search.svg",
    name: "Search",
  },
  {
    path: "/assets/bag.svg",
    name: "Bag",
  },
  {
    path: "/assets/cart.svg",
    name: "Shop",
  },
  {
    path: "/assets/profile.svg",
    name: "Profile",
  },
];

const CustomerHome = () => {
  return (
    <div className="h-lvh relative bg-white">
      <div className="flex flex-col h-full px-10 pb-[6em] pt-3 gap-3">
        <div className="flex justify-between">
          <p
            className="text-5xl"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            STYLSYNC
          </p>
        </div>
        <div className="w-full relative h-1/3 flex justify-between">
          <img
            src="/assets/poster.png"
            className=" h-full rounded-xl w-[220px] shadow-lg drop-shadow-lg object-cover"
            alt="Poster"
          />
          <Button
            className="absolute bottom-3 left-3 text-white text-lg bg-[#9F57F9] border-none auto rounded-3xl px-8 py-3"
            type="default"
          >
            Check
          </Button>
          <img
            className="absolute opacity-[0.3] top-2 right-0 z-10"
            src="/assets/Ellipse 15.svg"
            alt=""
          />
          <img
            className="absolute opacity-[0.3] bottom-2 right-3 z-10"
            src="/assets/Ellipse 16.svg"
            alt=""
          />

          <div
            className="w-[200px] h-full rounded-xl relative p-3"
            style={{
              background: "linear-gradient(to bottom right, #F4ECFF, #AE73F9)",
            }}
          >
            <img
              src="/assets/Sparkle.svg"
              alt="sparkle"
              height={36}
              width={36}
            />
            <div className="flex gap-2">
              <p className="text-7xl text-white ">AI</p>
              <p className="text-xl text-white flex flex-col justify-end">
                Featured
              </p>
            </div>
            <Button
              className="absolute z-20 bottom-14 left-3 text-white text-lg drop-shadow-lg shadow-lg bg-[#9F57F9] border-none w-auto rounded-3xl px-4"
              type="default"
            >
              AI Customize
            </Button>
            <Button
              className="absolute z-20 bottom-3 left-3 text-white text-md drop-shadow-lg shadow-lg bg-[#9F57F9] border-none w-auto rounded-3xl px-3"
              type="default"
            >
              Outfit Anyone
            </Button>
          </div>
        </div>
        <div className="h-full flex flex-col gap-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <p
              className="text-2xl flex justify-start"
              style={{ fontFamily: "Questrial, sans-serif" }}
            >
              Trending
            </p>
            <div className=" flex flex-row overflow-x-auto gap-4 py-4">
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p
              className="text-2xl flex justify-start"
              style={{ fontFamily: "Questrial, sans-serif" }}
            >
              Hot Collection
            </p>
            <div className=" flex flex-row overflow-x-auto gap-4 py-4">
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
              <div className="w-[200px] h-[200px] rounded-xl shadow-lg bg-white flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0 -8px 32px -4px rgba(0, 0, 0, 0.1)" }}
        className="bg-white p-5 absolute bottom-0 w-full h-[5em] rounded-t-3xl"
      >
        <div className="flex w-full h-full justify-between">
          {nav.map((item) => {
            return (
              <div
                key={item.name}
                className="flex flex-col justify-center items-center gap-1"
              >
                <img
                  className=""
                  src={item.path}
                  alt={item.name}
                  height={28}
                  width={28}
                />
                <p
                  className="text-md"
                  style={{
                    color: item.name === "Home" ? "#9F57F9" : "#9B9B9B",
                  }}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;
