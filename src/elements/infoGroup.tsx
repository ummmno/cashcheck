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

export function CreateGroup(props: { groupName: string, names:string[] }) {
  return (
    <div
      className={`mr-10 mb-10 flex w-1/6 min-w-fit flex-col rounded-3xl bg-gray-50 px-5 drop-shadow-xl`}
    >
      <div className="flex h-auto w-auto flex-col">
        <h1 className="m-5 text-center text-2xl font-semibold">{props.groupName}</h1>
        <div className="flex flex-row justify-evenly">
          <h1 className="text-2xl">-13</h1>
          <button className="rounded bg-indigo-100 py-2 px-4 font-bold drop-shadow-xl hover:bg-indigo-200">
            +
          </button>
        </div>
      </div>
      <div className="my-5 flex h-auto w-auto flex-col justify-between">
        {props.names.map((e) => (
          <PersonBal name={e} balance={Math.floor(Math.random() * 200) - 100}/>
        ))}
      </div>
    </div>
  );
}