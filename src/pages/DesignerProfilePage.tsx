// DesignerProfilePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { Button, ConfigProvider, ThemeConfig } from "antd";
import BottomNavBar from "../components/BottomNavBar";

const config: ThemeConfig = {
  token: {
    colorPrimary: "#9F57F9",
    colorPrimaryBg: "#9D9D9D",
  },
};

const designersData = [
  // Existing designers data
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 2",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 3",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 4",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 5",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 6",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    followersCount: 200,
    reviews: 30,
    rating: 4, // Number of stars
    portfolio: [
      // Dummy data for portfolio
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  // Add other designers similarly
];

const DesignerProfilePage = () => {
  const { designerId } = useParams();
  const designer = designersData.find((d) => d.designerName === designerId);

  if (!designer) return <div>Designer not found</div>;

  return (
    <ConfigProvider theme={config}>
      <div className="relative h-screen bg-white">
        <div className="flex flex-col  pb-16 px-6 pt-3 gap-3">
          <div className="flex items-center mb-4">
            <img
              src={designer.image}
              alt={designer.designerName}
              className="w-24 h-24 rounded-full"
            />
            <div className="ml-4">
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                {designer.designerName}
              </h1>
              <p className="text-gray-500">{designer.bio}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      color={i < designer.rating ? "#FFD700" : "#e0e0e0"}
                    />
                  ))}
                  <span className="text-sm ml-2 text-gray-500">
                    {designer.reviews} reviews
                  </span>
                </div>
                <div className="ml-4">
                  <span className="font-semibold">
                    {designer.followersCount}
                  </span>{" "}
                  followers
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <Button type="primary" className="  py-2 px-4 rounded">
                  Follow
                </Button>
                <Button type="default" className=" py-2 px-4 rounded">
                  Contact
                </Button>
                <Button type="default" className="py-2 px-4 rounded">
                  Chat
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h2
              className="text-xl mb-4 bg-[#9F57F9] text-white p-2 rounded drop-shadow-lg justify-center flex"
              style={{ fontFamily: "Questrial, sans-serif" }}
            >
              Portfolio
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {designer.portfolio.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Portfolio ${index}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
        <BottomNavBar />
      </div>
    </ConfigProvider>
  );
};

export default DesignerProfilePage;
