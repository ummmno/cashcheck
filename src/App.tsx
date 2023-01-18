import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function getBalance() {
  const o = Math.floor(Math.random() * 200) - 100;
  if (o > 0) {
    return <h1 className="text-5xl font-semibold text-lime-600"> $ {o}</h1>;
  } else {
    return <h1 className="text-5xl font-semibold text-rose-800"> $ {o}</h1>;
  }
}

const names = ["John", "Paul", "George", "Ringo", "Pete"];
function getName() {
  return names[Math.floor(Math.random() * names.length)];
}

interface Person {
  name: string;
  balance: number;
}

function PersonBal(person:Person) {
  return (
      <div className="mb-5 flex flex-row justify-evenly">
        <h1 className="text-xl">{person.name}</h1>
        <p className="text-xl">{person.balance}</p>
      </div>
  );
}

function CreateGroup() {
  const [divWidth, setDivWidth] = useState("w-1/6");
  function changeDivWidth() {
    setDivWidth("w-full")
  }

  return (
    <div className={`mr-10 mb-10 flex ${divWidth} min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl`}>
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">Group 1</h1>
        <div className="flex flex-row justify-evenly">
          <h1 className="text-2xl">-13</h1>
          <button
            className="rounded bg-indigo-100 py-2 px-4 font-bold drop-shadow-xl hover:bg-blue-200"
            onClick={changeDivWidth}
          >
            +
          </button>
        </div>
      </div>
      <div className="my-5 flex h-auto w-auto flex-col justify-between">
        <PersonBal name="Tom" balance={15}/>
        <PersonBal name="John" balance={-20}/>
        <PersonBal name="Paul" balance={-5}/>
        <PersonBal name="George" balance={10}/>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-10">
      <div className="text-no-wrap w-1/3 min-w-fit rounded-3xl bg-gray-50 drop-shadow-xl">
        <div className="flex w-auto flex-row justify-between p-5">
          <div className="">
            <h1 className="pb-2 text-3xl">Hello,</h1>
            <h1 className="text-5xl">{getName()}</h1>
          </div>
        </div>
        <div className="my-6 flex w-auto flex-row justify-between p-5">
          <div className="w-1/2">
            <h1 className="text-2xl pb-2">Overall balance:</h1>
            {getBalance()}
          </div>
        </div>
        <div className="w-1/2">
          <h1></h1>
        </div>
      </div>
      <div className="flex-start my-10 flex w-auto flex-row flex-wrap">
        <CreateGroup />
        <CreateGroup />
        <CreateGroup />
      </div>
    </div>
  );
}

export default App;
