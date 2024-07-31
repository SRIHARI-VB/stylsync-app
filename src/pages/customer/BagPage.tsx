import React from "react";
import BottomNavBar from "../../components/BottomNavBar";
import { Heart, Star } from "lucide-react";
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

const BagPage = () => {
  return (
    <div className="h-lvh relative bg-white">
      <BottomNavBar name="Bag" />
    </div>
  );
};

export default BagPage;
