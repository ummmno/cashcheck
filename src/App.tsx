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

function PersonBal(person: Person) {
  return (
    <div className="mb-5 flex flex-row justify-evenly">
      <h1 className="text-xl">{person.name}</h1>
      <p className="text-xl">{person.balance}</p>
    </div>
  );
}

function updateGroups(groupName: string) {
  //hide one group
  //show another group
}

function CreateGroup(Group: { name: string }) {
  const [divWidth, setDivWidth] = useState("w-1/6");
  function changeDivWidth() {
    setDivWidth("w-3/4");
  }

  return (
    <div
      className={`mr-10 mb-10 flex w-1/6 min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl`}
    >
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">{Group.name}</h1>
        <div className="flex flex-row justify-evenly">
          <h1 className="text-2xl">-13</h1>
          <button
            className="rounded bg-indigo-100 py-2 px-4 font-bold drop-shadow-xl hover:bg-indigo-200"
            onClick={changeDivWidth}
          >
            +
          </button>
        </div>
      </div>
      <div className="my-5 flex h-auto w-auto flex-col justify-between">
        <PersonBal name="Tom" balance={15} />
        <PersonBal name="John" balance={-20} />
        <PersonBal name="Paul" balance={-5} />
        <PersonBal name="George" balance={10} />
      </div>
    </div>
  );
}

function PersonPayment(person: Person) {
  return (
    <div className="mb-5 flex flex-row justify-between">
      <button className="rounded bg-indigo-100 py-2 px-4 hover:bg-indigo-200">
        $
      </button>
      <h1 className="text-xl">{person.name}</h1>
      <p className="text-xl">{person.balance}</p>
    </div>
  );
}

function CreatePayment(Group: { name: string }) {
  const [divWidth, setDivWidth] = useState("w-1/6");
  function changeDivWidth() {
    setDivWidth("w-3/4");
  }

  return (
    <div
      className={`ml-10 flex w-1/6 min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl`}
    >
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">{Group.name}</h1>
        <div className="flex flex-row justify-evenly">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-transparent bg-indigo-50 pl-7 pr-12 focus:border-indigo-200 focus:ring-indigo-200 sm:text-sm"
                placeholder="0.00"
              ></input>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-transparent bg-indigo-50 py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-200 focus:ring-indigo-200 sm:text-sm"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex h-auto w-auto flex-col justify-between">
        <PersonPayment name="Tom" balance={15} />
        <PersonPayment name="John" balance={-20} />
        <PersonPayment name="Paul" balance={-5} />
        <PersonPayment name="George" balance={10} />
      </div>
    </div>
  );
}

const groups = ["Group 1", "Group 2", "Group 3"];

function ReturnGroups() {
  return (
    <>
      {groups.map((e) => (
        <CreateGroup name={e} />
      ))}
    </>
  );
}

function RetrunPayments() {
  return (
    <>
      {groups.map((e) => (
        <CreatePayment name={e} />
      ))}
    </>
  );
}

function App() {
  return (
    <div>
      <div className="flex h-auto w-auto flex-col bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-10">
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
          <ReturnGroups />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,192C672,181,768,203,864,218.7C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
      <div className="flex flex-row bg-indigo-200 py-10">
        <RetrunPayments />
      </div>
    </div>
  );
}

export default App;
