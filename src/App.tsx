import React from "react";
import "./App.css";
import { useState } from "react";
import { InitialPayment } from "./elements/paymentGroup";
import { CreateGroup } from "./elements/infoGroup";

const groups = ["Group 1", "Group 2", "Group 3"];
const names = ["JohnNNNNNN", "Paul", "George", "Ringo", "Pete"];

function getBalance() {
  const o = Math.floor(Math.random() * 200) - 100;
  if (o > 0) {
    return <h1 className="text-5xl font-semibold text-lime-600"> $ {o}</h1>;
  } else {
    return <h1 className="text-5xl font-semibold text-rose-800"> $ {o}</h1>;
  }
}

function getName() {
  return names[Math.floor(Math.random() * names.length)];
}

function ReturnGroups() {
  return (
    <>
      {groups.map((e) => (
        <CreateGroup groupName={e} names={names}/>
      ))}
    </>
  );
}

function RetrunPayments() {
  return (
    <>
      {groups.map((e) => (
        <InitialPayment groupName={e} names={names} />
      ))}
    </>
  );
}

function App() {
  return (
    <div>
      <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
        <div className="flex h-auto w-auto flex-col px-10 pt-10">
          <div className="text-no-wrap w-1/3 min-w-fit rounded-3xl bg-gray-50 drop-shadow-xl">
            <div className="flex w-auto flex-row justify-between p-5">
              <div className="">
                <h1 className="pb-2 text-3xl">Hello,</h1>
                <h1 className="text-5xl">{getName()}</h1>
              </div>
            </div>
            <div className="my-6 flex w-auto flex-row justify-between p-5">
              <div className="w-1/2">
                <h1 className="pb-2 text-2xl">Overall balance:</h1>
                {getBalance()}
              </div>
            </div>
            <div className="w-1/2">
              <h1></h1>
            </div>
          </div>
          <div className="flex-start my-10 flex w-auto flex-row flex-wrap">
            {/*info groups*/}
            <ReturnGroups />
          </div>
        </div>
        {/*<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bg-fixed fill-inherit"
        >
          <path
            fill-opacity="1 "
            d="M0,64L34.3,74.7C68.6,85,137,107,206,144C274.3,181,343,235,411,240C480,245,549,203,617,176C685.7,149,754,139,823,144C891.4,149,960,171,1029,165.3C1097.1,160,1166,128,1234,112C1302.9,96,1371,96,1406,96L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>*/}
      </div>
      <div className="flex flex-row bg-indigo-200 py-10">
        {/*payment groups*/}
        <RetrunPayments />
      </div>
    </div>
  );
}

export default App;
