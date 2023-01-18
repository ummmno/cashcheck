import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

function getBalance() {
  const o = Math.floor(Math.random() * 200) - 100;
  if (o > 0) {
    return <h1 className="text-3xl text-green-900"> $ {o}</h1>;
  } else {
    return <h1 className="text-3xl text-red-900"> $ {o}</h1>;
  }
}

const names = ["John", "Paul", "George", "Ringo", "Pete"];
function getName() {
  return names[Math.floor(Math.random() * names.length)];
}

function AddPeople() {
  return (
    <>
      <div className="mb-5 flex flex-row justify-evenly">
        <h1 className="text-2xl">Name 1</h1>
        <p className="text-2xl">Balance</p>
      </div>
    </>
  );
}



function CreateGroup() {
  
  const [buttonText, setButtonText] = useState('+');
  function handleClick() {
    setButtonText('New text');
  }

  return (
    <div className="mr-10 mb-10 flex w-1/6 min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl">
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">Group 1</h1>
        <div className="flex flex-row justify-evenly">
          <h1 className="text-2xl">-13</h1>
          <button className="rounded bg-blue-100 py-2 px-4 font-bold drop-shadow-xl hover:bg-blue-200" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
      <div className="my-5 flex h-auto w-auto flex-col justify-between">
        <AddPeople />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-screen w-screen flex-col p-10 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="text-no-wrap w-1/3 rounded-3xl min-w-fit bg-gray-50 drop-shadow-xl">
        <div className="flex w-auto flex-row justify-between p-5">
          <div className="">
            <h1 className="pb-2 text-3xl">Hello,</h1>
            <h1 className="text-5xl">{getName()}</h1>
          </div>
        </div>
        <div className="my-10 flex w-auto flex-row justify-between p-5">
          <div className="w-1/2">
            <h1 className="text-2xl">Overall balance:</h1>
            {getBalance()}
          </div>
        </div>
        <div className="w-1/2">
          <h1></h1>
        </div>
      </div>
      <div className="flex-start my-10 flex w-auto flex-row flex-wrap">
        <CreateGroup/>
        <CreateGroup/>
        <CreateGroup/>
      </div>
    </div>
  );
}

export default App;
