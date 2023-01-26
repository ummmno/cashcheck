import { useState } from "react";

interface Props {
  setState: (state: boolean) => void;
  name: string;
  balance: number;
}

function PersonPayment(props: Props) {
  const {setState, name, balance} = props;
  function changeState() {
    setState(false);
  }
  return (
    <div className="mb-5 flex flex-row justify-between">
      <button
        className="rounded bg-indigo-100 py-2 px-4 hover:bg-indigo-200"
        onClick={changeState}
      >
        $
      </button>
      <h1 className="text-xl">{name}</h1>
      <p className="text-xl">{balance}</p>
    </div>
  );
}

export function InitialPayment(props: { groupName: string, names:string[] }) {
  const [state, setState] = useState(true);
  return (
    <div className="ml-10 flex w-1/6 min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl">
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">{props.groupName}</h1>
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
      <div className="my-5 flex h-min w-auto flex-col justify-between">
        {props.names.map((e) => state && <PersonPayment setState={setState} name={e} balance={Math.floor(Math.random() * 200) - 100} />)}
      </div>
    </div>
  );
}