import React, { useState } from "react";
import BottomNavBar from "../../components/BottomNavBar";

const orders = [
  {
    id: "1947034",
    trackingNumber: "IW3475453455",
    quantity: 3,
    totalAmount: "112$",
    date: "05-12-2019",
    status: "Delivered",
  },
  {
    id: "1947035",
    trackingNumber: "IW3475453456",
    quantity: 2,
    totalAmount: "89$",
    date: "06-12-2019",
    status: "Processing",
  },
  {
    id: "1947036",
    trackingNumber: "IW3475453457",
    quantity: 1,
    totalAmount: "45$",
    date: "07-12-2019",
    status: "Delivered",
  },
  {
    id: "1947037",
    trackingNumber: "IW3475453458",
    quantity: 4,
    totalAmount: "150$",
    date: "08-12-2019",
    status: "Delivered",
  },
  {
    id: "1947038",
    trackingNumber: "IW3475453459",
    quantity: 2,
    totalAmount: "90$",
    date: "09-12-2019",
    status: "Processing",
  },
  {
    id: "1947039",
    trackingNumber: "IW3475453460",
    quantity: 3,
    totalAmount: "120$",
    date: "10-12-2019",
    status: "Cancelled",
  },
];

const OrderCard = ({ order }: any) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <div className="flex flex-col sm:flex-row justify-between">
      <div>
        <h2 className="text-lg font-bold" style={{ fontFamily: "Questrial, sans-serif" }}>Order No: {order.id}</h2>
        <p className="text-sm text-gray-500">
          Tracking number: {order.trackingNumber}
        </p>
        <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
        <p className="text-sm text-gray-500">
          Total Amount: {order.totalAmount}
        </p>
      </div>
      <div className="text-right sm:text-left mt-2 sm:mt-0">
        <p className="text-sm text-gray-500">{order.date}</p>
        <p
          className={`font-bold ${
            order.status === "Delivered"
              ? "text-green-500"
              : order.status === "Processing"
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {order.status}
        </p>
      </div>
    </div>
    <button className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg w-full sm:w-auto">
      Details
    </button>
  </div>
);

const ShopPage = () => {
  const [filter, setFilter] = useState("Delivered");

  const filteredOrders = orders.filter((order) => order.status === filter);

  return (
    <div className="h-screen relative bg-gray-100 ">
      <div className="flex flex-col  pb-16 px-6 pt-3 gap-3">
        <h1 className="text-2xl font-bold " style={{ fontFamily: "Questrial, sans-serif" }}>My Orders</h1>
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 px-4 ${
              filter === "Delivered"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-lg mr-2`}
            onClick={() => setFilter("Delivered")}
          >
            Delivered
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              filter === "Processing"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-lg mr-2`}
            onClick={() => setFilter("Processing")}
          >
            Processing
          </button>
          <button
            className={`flex-1 py-2 px-4 ${
              filter === "Cancelled"
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded-lg`}
            onClick={() => setFilter("Cancelled")}
          >
            Cancelled
          </button>
        </div>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found</p>
        )}
      </div>
      <BottomNavBar name="Shop" />
    </div>
  );
};

export default ShopPage;
