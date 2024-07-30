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

const CustomerHome = () => {
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
              onClick={() => {
              }}
            >
              Start Customizing
            </Button>
          </div>
        </Modal>
      </div>
    </ConfigProvider>
  );
};

export default CustomerHome;
