import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, Heart, Star } from "lucide-react";

import {
  Select,
  Collapse,
  Typography,
  Button,
  ThemeConfig,
  ConfigProvider,
  Menu,
  Tag,
} from "antd";

const { Option } = Select;
const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const config: ThemeConfig = {
  token: {
    colorPrimary: "#9F57F9",
    colorPrimaryBg: "#F8F4F8",
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Dummy data for example purposes
  const productData = {
    id: productId,
    image: "https://via.placeholder.com/150",
    accountName: "Account Name",
    productName: "Short dress",
    price: "$19.99",
    rating: 4,
    description:
      "Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline.",
    reviews: 10,
  };

  const suggestedProducts = [
    {
      imageSrc: "https://via.placeholder.com/150",
      productName: "Long Dress",
      reviews: 5,
      price: 29.99,
      discountPrice: 24.99,
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      productName: "Summer Shirt",
      reviews: 3,
      price: 15.99,
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      productName: "Casual Pants",
      reviews: 4,
      price: 22.49,
      discountPrice: 19.99,
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      productName: "Denim Jacket",
      reviews: 4,
      price: 35.99,
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      productName: "Sneakers",
      reviews: 5,
      price: 50.0,
      discountPrice: 45.0,
    },
  ];

  const sizeMenu = (
    <Menu className="flex">
      <Menu.Item key="1">Small</Menu.Item>
      <Menu.Item key="2">Medium</Menu.Item>
      <Menu.Item key="3">Large</Menu.Item>
      <Menu.Item key="4">X-Large</Menu.Item>
    </Menu>
  );

  const colorMenu = (
    <Menu className="flex">
      <Menu.Item key="1">
        <Tag color="red">Red</Tag>
      </Menu.Item>
      <Menu.Item key="2">
        <Tag color="blue">Blue</Tag>
      </Menu.Item>
      <Menu.Item key="3">
        <Tag color="green">Green</Tag>
      </Menu.Item>
      <Menu.Item key="4">
        <Tag color="yellow">Yellow</Tag>
      </Menu.Item>
    </Menu>
  );

  return (
    <ConfigProvider theme={config}>
      <div className="relative h-screen bg-white">
        <div className="flex flex-col pb-16 px-6 pt-3 gap-3">
          <div className="flex w-full gap-5 items-center">
            <ArrowLeftIcon onClick={() => navigate(-1)} />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={productData.image}
              alt={productData.productName}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="mt-4 flex justify-between items-center w-full">
              <h1
                className="text-2xl font-semibold"
                style={{ fontFamily: "Questrial, sans-serif" }}
              >
                {productData.productName}
              </h1>
              <Heart size={24} color="#9B9B9B" />
            </div>
            <div className="flex flex-col gap-1 mt-2 justify-center">
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    color={i < productData.rating ? "#FFD700" : "#e0e0e0"}
                  />
                ))}
                <span className="text-lg ml-2 text-gray-500">
                  ({productData.reviews} reviews)
                </span>
              </div>

              <p className="text-2xl font-semibold mt-4">{productData.price}</p>
              <p className="text-md mt-2">{productData.description}</p>
            </div>

            {/* Size Dropdown */}
            <div className="mt-4 w-full">
              <p className="text-xl font-semibold">Select Size</p>
              {sizeMenu}
            </div>

            {/* Color Selection */}
            <div className="mt-4 w-full">
              <p className="text-xl font-semibold">Select Color</p>
              {colorMenu}
            </div>

            <Button
              type="primary"
              className="mt-6  text-white py-6 w-full rounded-full"
            >
              Add to Cart
            </Button>
          </div>

          {/* Shipping and Support Info */}
          <Collapse className="mt-8">
            <Panel header="Shipping Info" key="1">
              <Paragraph>
                Standard shipping takes 5-7 business days. Express shipping
                options are available at checkout.
              </Paragraph>
            </Panel>
            <Panel header="Support" key="2">
              <Paragraph>
                For any inquiries or support, contact us at support@example.com
                or call us at 1-800-123-4567.
              </Paragraph>
            </Panel>
          </Collapse>

          {/* Suggested Products */}
          <div className=" mt-8">
            <h2 className="text-xl font-semibold">You Might Also Like</h2>
            <div className="flex flex-wrap justify-between gap-4 mt-4">
              {suggestedProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[350px] rounded-xl shadow-lg bg-white flex-shrink-0 relative overflow-hidden"
                >
                  <img
                    src={product.imageSrc}
                    className="w-full h-2/3 object-cover"
                    alt={product.productName}
                  />
                  <div className="p-2 flex flex-col justify-between h-1/3">
                    <p className="text-lg font-semibold">
                      {product.productName}
                    </p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={
                              index < product.reviews
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      {product.discountPrice ? (
                        <div className="flex flex-col items-start">
                          <p className="text-lg font-semibold text-red-500">{`$${product.discountPrice.toFixed(
                            2
                          )}`}</p>
                          <p className="text-sm line-through text-gray-500">{`$${product.price.toFixed(
                            2
                          )}`}</p>
                        </div>
                      ) : (
                        <p className="text-lg font-semibold">{`$${product.price.toFixed(
                          2
                        )}`}</p>
                      )}
                      <Heart className="text-red-500 text-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ProductDetails;
