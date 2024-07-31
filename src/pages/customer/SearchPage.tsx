import React, { useState } from "react";
import BottomNavBar from "../../components/BottomNavBar";
import { ArrowLeftIcon, Search } from "lucide-react";
import { ConfigProvider, Input, Radio, ThemeConfig } from "antd";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { Star, Heart } from "lucide-react"; // Import icons for review stars and favorite

const config: ThemeConfig = {
  token: {
    colorPrimary: "#9F57F9",
    colorPrimaryBg: "#9D9D9D",
  },
};

const cardData = [
  // Dummy data for cards
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 1",
    productName: "Product 1",
    price: "$10",
    rating: 4, // Number of stars
  },
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 2",
    productName: "Product 2",
    price: "$20",
    rating: 3,
  },
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 3",
    productName: "Product 3",
    price: "$20",
    rating: 5,
  },
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 4",
    productName: "Product 2",
    price: "$20",
    rating: 3,
  },
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 5",
    productName: "Product 5",
    price: "$20",
    rating: 3,
  },
  {
    image: "https://via.placeholder.com/150",
    accountName: "Account 6",
    productName: "Product 6",
    price: "$20",
    rating: 3,
  },
];

const designersData = [
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 1",
    reviewCount: 30,
    rating: 4, // Number of stars
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 2",
    reviewCount: 15,
    rating: 3,
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 3",
    reviewCount: 22,
    rating: 5,
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 4",
    reviewCount: 10,
    rating: 4,
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 5",
    reviewCount: 40,
    rating: 5,
  },
  {
    image: "https://via.placeholder.com/100",
    designerName: "Designer 6",
    reviewCount: 25,
    rating: 3,
  },
];
const boutiquesData = [
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 1",
    reviewCount: 20,
    rating: 4, // Number of stars
  },
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 2",
    reviewCount: 10,
    rating: 3,
  },
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 3",
    reviewCount: 25,
    rating: 5,
  },
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 4",
    reviewCount: 8,
    rating: 4,
  },
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 5",
    reviewCount: 30,
    rating: 5,
  },
  {
    image: "https://via.placeholder.com/100",
    boutiqueName: "Boutique 6",
    reviewCount: 15,
    rating: 3,
  },
  // Add more boutique data as needed
];

const Card = ({ card }:any) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${card.accountName}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="border rounded-lg p-4 flex flex-col cursor-pointer"
    >
      <img
        src={card.image}
        alt={card.productName}
        className="w-full h-32 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              color={i < card.rating ? "#FFD700" : "#e0e0e0"}
            />
          ))}
        </div>
        <Heart size={16} color="#9B9B9B" />
      </div>
      <div className="mt-2 flex-1">
        <h3 className="text-lg font-semibold">{card.productName}</h3>
        <p className="text-sm text-gray-500">{card.accountName}</p>
      </div>
      <p className="text-lg font-semibold mt-2">{card.price}</p>
    </div>
  );
};

const SearchPage = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setSelectedTab(e.target.value);
  };

  const handleSwipe = (direction: string) => {
    if (direction === "Left" && selectedTab !== "3") {
      setSelectedTab((prev) => (parseInt(prev) + 1).toString());
    } else if (direction === "Right" && selectedTab !== "1") {
      setSelectedTab((prev) => (parseInt(prev) - 1).toString());
    }
  };

  const handleDesignerClick = (designerName: string) => {
    navigate(`/designer/${designerName}`);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <ConfigProvider theme={config}>
      <div className="relative h-screen bg-white" {...swipeHandlers}>
        <div className="flex flex-col  pb-16 px-6 pt-3 gap-3">
          <div className="flex w-full gap-5 items-center">
            <ArrowLeftIcon onClick={() => navigate(-1)} />
            <Input
              prefix={<Search size={24} />}
              className="h-12 w-full rounded-2xl" // Full width for input
              placeholder="Search"
            />
          </div>
          <div className="h-12 w-full">
            <Radio.Group
              optionType="button"
              value={selectedTab}
              onChange={handleChange}
              className="w-full h-full flex border-[#9F57F9] "
            >
              <Radio.Button
                value="1"
                className="h-12 flex-1 text-lg flex  justify-center items-center"
              >
                Designs
              </Radio.Button>
              <Radio.Button
                value="2"
                className="h-12 flex-1 text-lg flex justify-center items-center"
              >
                Designers
              </Radio.Button>
              <Radio.Button
                value="3"
                className="h-12 flex-1 text-lg flex justify-center items-center"
              >
                Boutiques
              </Radio.Button>
            </Radio.Group>
            <div className="mt-4 flex-1 overflow-auto">
              {selectedTab === "1" && (
                <div className="grid grid-cols-2 gap-4">
                  {cardData.map((card) => (
                    <Card key={card.accountName} card={card} />
                  ))}
                </div>
              )}
              {selectedTab === "2" && (
                <div className="space-y-4">
                  {designersData.map((designer, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 flex items-center cursor-pointer"
                      onClick={() => handleDesignerClick(designer.designerName)}
                    >
                      <img
                        src={designer.image}
                        alt={designer.designerName}
                        className="w-24 h-24 object-cover rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {designer.designerName}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              color={
                                i < designer.rating ? "#FFD700" : "#e0e0e0"
                              }
                            />
                          ))}
                          <span className="text-sm ml-2 text-gray-500">
                            ({designer.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTab === "3" && (
                <div className="space-y-4">
                  {boutiquesData.map((boutique, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 flex items-center"
                    >
                      <img
                        src={boutique.image}
                        alt={boutique.boutiqueName}
                        className="w-24 h-24 object-cover rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {boutique.boutiqueName}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              color={
                                i < boutique.rating ? "#FFD700" : "#e0e0e0"
                              }
                            />
                          ))}
                          <span className="text-sm ml-2 text-gray-500">
                            ({boutique.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <BottomNavBar name="Search" />
      </div>
    </ConfigProvider>
  );
};

export default SearchPage;
