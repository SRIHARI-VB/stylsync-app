import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Modal,
  ThemeConfig,
  Select,
  Image,
} from "antd";
import BottomNavBar from "../../components/BottomNavBar";
import {
  Heart,
  Star,
  Package,
  Briefcase,
  VideoIcon,
  Layers,
} from "lucide-react";

const config: ThemeConfig = {
  token: {
    colorPrimary: "#9F57F9",
    colorPrimaryBg: "#9D9D9D",
  },
};

const outfitOptions = [
  { label: "Casual Shirt", value: "shirt" },
  { label: "Jeans", value: "jeans" },
  { label: "Jacket", value: "jacket" },
];

const cardData = [
  {
    imageSrc: "https://via.placeholder.com/150",
    productName: "Casual Shirt",
    reviews: 4,
    price: 29.99,
    discountPrice: 19.99,
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    productName: "Jeans",
    reviews: 5,
    price: 49.99,
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    productName: "Jacket",
    reviews: 3,
    price: 89.99,
    discountPrice: 69.99,
  },
  {
    imageSrc: "https://via.placeholder.com/150",
    productName: "Sweater",
    reviews: 4,
    price: 39.99,
  },
  // Add more items as needed
];

const Card = ({
  imageSrc,
  productName,
  reviews,
  price,
  discountPrice,
}: {
  imageSrc: string;
  productName: string;
  reviews: number;
  price: number;
  discountPrice?: number;
}) => (
  <div className="w-[200px] h-[350px] rounded-xl shadow-lg bg-white flex-shrink-0 relative overflow-hidden">
    <img
      src={imageSrc}
      className="w-full h-2/3 object-cover"
      alt={productName}
    />
    <div className="p-2 flex flex-col justify-between h-1/3">
      <p className="text-lg font-semibold">{productName}</p>
      <div className="flex items-center">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={index < reviews ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        {discountPrice ? (
          <div className="flex flex-col items-start">
            <p className="text-lg font-semibold text-red-500">{`$${discountPrice.toFixed(
              2
            )}`}</p>
            <p className="text-sm line-through text-gray-500">{`$${price.toFixed(
              2
            )}`}</p>
          </div>
        ) : (
          <p className="text-lg font-semibold">{`$${price.toFixed(2)}`}</p>
        )}
        <Heart className="text-red-500 text-xl" />
      </div>
    </div>
  </div>
);

const DesignerHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleItemChange = (value: string[]) => {
    setSelectedItems(value);
  };

  return (
    <ConfigProvider theme={config}>
      <div className="h-lvh relative bg-white">
        <div className="flex flex-col h-full px-6 pb-[6em] pt-3 gap-3">
          <div className="flex w-full justify-between">
            <p
              className="text-5xl"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              STYLSYNC
            </p>
          </div>
          <div className="w-full relative h-1/3 flex gap-2">
            <img
              src="/assets/poster.png"
              className=" h-full rounded-xl w-3/6 shadow-lg drop-shadow-lg object-cover"
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
              className="w-3/6 h-full rounded-xl relative p-3"
              style={{
                background:
                  "linear-gradient(to bottom right, #F4ECFF, #AE73F9)",
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
                onClick={showModal}
                className="absolute z-20 bottom-3 left-3 text-white text-md drop-shadow-lg shadow-lg bg-[#9F57F9] border-none w-auto rounded-3xl px-3"
                type="default"
              >
                Outfit Anyone
              </Button>
            </div>
          </div>

          {/* New Section */}
          <div className="flex gap-4 w-full p-4">
            <div className="flex flex-col items-center px-6 py-3 rounded-xl cursor-pointer bg-white shadow-md">
              <Package size={40} />
              <p className="mt-2">Orders</p>
            </div>
            <div className="flex flex-col items-center px-6 py-3 rounded-xl cursor-pointer bg-white shadow-md">
              <Briefcase size={40} />
              <p className="mt-2">Jobs</p>
            </div>
            <div className="flex flex-col items-center px-6 py-3 rounded-xl cursor-pointer bg-white shadow-md">
              <VideoIcon size={40} />
              <p className="mt-2 flex justify-center w-1/2">Master Class</p>
            </div>
            <div className="flex flex-col items-center px-6 py-3 rounded-xl cursor-pointer bg-white shadow-md">
              <Layers size={40} />
              <p className="mt-2">Fabrics</p>
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
              <div className="flex flex-row overflow-x-auto gap-4 py-4">
                {cardData.map((item, index) => (
                  <Card
                    key={index}
                    imageSrc={item.imageSrc}
                    productName={item.productName}
                    reviews={item.reviews}
                    price={item.price}
                    discountPrice={item.discountPrice}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p
                className="text-2xl flex justify-start"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                Hot Collection
              </p>
              <div className="flex flex-row overflow-x-auto gap-4 py-4">
                {cardData.map((item, index) => (
                  <Card
                    key={index}
                    imageSrc={item.imageSrc}
                    productName={item.productName}
                    reviews={item.reviews}
                    price={item.price}
                    discountPrice={item.discountPrice}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <BottomNavBar name="Home" />

        {/* Modal for Outfit Anyone feature */}
        <Modal
          title="Outfit Anyone"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={600}
          className="mobile-responsive-modal"
        >
          <div className="flex flex-col items-center">
            <p className="text-xl mb-4">
              Customize your outfit with AI! Select different clothing items and
              let our AI suggest the best combinations for you.
            </p>
            <div className="flex flex-col gap-4 w-full mb-4">
              <Select
                mode="multiple"
                placeholder="Select items"
                onChange={handleItemChange}
                value={selectedItems}
                className="w-full"
              >
                {outfitOptions.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
              {selectedItems.length > 0 && (
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src={`/assets/${selectedItems.join("-")}.jpeg`}
                    alt="Outfit Preview"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-lg text-center">
                    Here's a preview of your selected outfit.
                  </p>
                </div>
              )}
            </div>
            <Button
              type="primary"
              className="w-full rounded-3xl"
              onClick={() => {}}
            >
              Start Customizing
            </Button>
          </div>
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default DesignerHome;
