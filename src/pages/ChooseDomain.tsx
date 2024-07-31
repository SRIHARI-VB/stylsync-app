import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BubbleAnimation.css"; // Import the CSS file for bubble animations

const LoadingScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <BubbleAnimation />
      <svg
        width="300"
        height="100"
        viewBox="0 0 200 100"
        className="animate-pulse"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-7xl font-semibold"
          fontFamily="Bebas Neue, sans-serif"
          fill="#9F57F9"
        >
          STYLSYNC
        </text>
      </svg>
    </div>
  );
};

const BubbleAnimation = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
      bubble.style.opacity = `${Math.random()}`;
      document.body.appendChild(bubble);
      setTimeout(() => {
        bubble.remove();
      }, 3000); // Remove the bubble after the animation duration
    };

    const interval = setInterval(createBubble, 500);

    // Cleanup function to remove bubbles and clear the interval
    return () => {
      clearInterval(interval);
      document.querySelectorAll(".bubble").forEach((bubble) => bubble.remove());
    };
  }, []);

  return null;
};

const ChooseDomain = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-10 overflow-hidden">
      <p
        className="text-6xl font-semibold mb-10"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
      >
        STYLSYNC
      </p>
      <div className="w-full max-w-md text-center mb-10">
        <div className="bg-[#9F57F9] p-6 rounded-2xl shadow-lg">
          <p
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "Questrial, sans-serif" }}
          >
            Opt Your Domain
          </p>
        </div>
      </div>
      <div className="w-full  flex flex-wrap items-center justify-center gap-4">
        <DomainCard
          imageSrc="/assets/customer.jpeg"
          title="Customer"
          onClick={() => navigate("/customerHome")}
        />
        <DomainCard
          imageSrc="/assets/designer.jpeg"
          title="Designer"
          onClick={() => navigate("/designerHome")}
        />
        <DomainCard
          imageSrc="/assets/company.jpeg"
          title="Company"
          onClick={() => navigate("/companyHome")}
        />
      </div>
    </div>
  );
};

const DomainCard = ({ imageSrc, title, onClick }: any) => (
  <div
    className="flex flex-col items-center gap-4 p-4 rounded-xl cursor-pointer shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
    onClick={onClick}
  >
    <img
      src={imageSrc}
      className="rounded-xl h-[150px] w-[150px] object-cover shadow-md"
      alt={title}
    />
    <p
      className="text-lg font-semibold"
      style={{ fontFamily: "Questrial, sans-serif" }}
    >
      {title}
    </p>
  </div>
);

export default ChooseDomain;
