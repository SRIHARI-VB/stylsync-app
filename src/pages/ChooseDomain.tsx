import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseDomain = () => {
  const navigate = useNavigate();
  return (
    <div className="h-lvh bg-white">
      <div className="flex flex-col gap-20 justify-center items-center h-full px-10">
        <p
          className="text-5xl"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          STYLSYNC
        </p>
        <div className="flex flex-col gap-10">
          <div className="w-full bg-[#9F57F9] flex justify-center items-center p-5 rounded-2xl">
            <p
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "Questrial, sans-serif" }}
            >
              Opt Your Domain
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div
              className="flex flex-col items-center gap-2 rounded-xl cursor-pointer shadow-lg drop-shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
              onClick={() => {
                navigate("/customerHome");
              }}
            >
              <img
                src="/assets/customer.jpeg"
                className="rounded-xl h-[150px] w-[150px]  shadow-lg drop-shadow-lg"
                alt="Customer"
              />
              <p
                className="text-lg font-semibold"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                Customer
              </p>
            </div>
            <div
              className="flex flex-col items-center gap-2 rounded-xl cursor-pointer shadow-lg drop-shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
              onClick={() => {
                navigate("/designerHome");
              }}
            >
              <img
                src="/assets/designer.jpeg"
                className="rounded-xl h-[150px] object-cover w-[150px] "
                alt="Customer"
              />
              <p
                className="text-lg font-semibold"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                Designer
              </p>
            </div>

            <div
              className="flex flex-col items-center gap-2 rounded-xl cursor-pointer shadow-lg drop-shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
              onClick={() => {
                navigate("/companyHome");
              }}
            >
              <img
                src="/assets/company.jpeg"
                className="rounded-xl h-[150px] w-[150px] shadow-lg drop-shadow-lg"
                alt="Customer"
              />
              <p
                className="text-lg font-semibold"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                Company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseDomain;
