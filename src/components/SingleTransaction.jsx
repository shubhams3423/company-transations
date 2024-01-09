import React from "react";

const SingleTransaction = () => {
  const transactionList = [
    {
      id: "#281209",
      orderDate: "7 July, 2023",
      orderAmt: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      orderDate: "7 July, 2023",
      orderAmt: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      orderDate: "7 July, 2023",
      orderAmt: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      orderDate: "7 July, 2023",
      orderAmt: "₹1,278.23",
      fees: "₹22",
    },
    {
      id: "#281209",
      orderDate: "7 July, 2023",
      orderAmt: "₹1,278.23",
      fees: "₹22",
    },
  ];
  return (
    <div className="absolute h-full right-0 left-0 overflow-hidden ">
      {transactionList.map((transaction, key) => {
        return (
          <div className="relative left-0 right-0" key={key}>
            <div className="px-3 py-[10px] grid grid-cols-4 gap-x-2  ">
              <div className="mr-auto">
                <p className="font-medium text-sm text-[#146EB4]">
                  {transaction.id}{" "}
                </p>
              </div>
              <div className="mr-auto">
                <p className="font-medium text-sm text-[#1A181E]">
                  {transaction.orderDate}
                </p>
              </div>
              <div className="ml-auto">
                <p className="font-medium text-sm text-[#1A181E]">
                  {transaction.orderAmt}
                </p>
              </div>
              <div className="ml-auto">
                <p className="font-medium text-sm text-[#1A181E]">
                  {transaction.fees}
                </p>
              </div>
            </div>
            <span className="absolute left-3 bottom-0 w-[97.5%] border-b-[0.5px] border-solid border-[#afafaf63]"></span>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTransaction;
