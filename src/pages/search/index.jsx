import { useState } from "react";

const Page = () => {
  const [searchValue, setSearchValue] = useState("");
  const names = ["Baldan", "dondog", "AnuJin", "doLgoR", "Dulmaa", "Temka"];

  const filteredName = names.filter((name) =>
    name.toLowerCase().includes(searchValue)
  );

  const handelInputChange = (e) => {
    const searchStrig = e.target.value;
    setSearchValue(searchStrig.trim().toLowerCase());
  };

  return (
    <div className="flex justify-center">
      <div>
        <input
          onChange={handelInputChange}
          className="border border-green-500 "
          type="text"
        />
        {filteredName.map((name) => {
          return <div className="p-3 border border-red-300">{name}</div>;
        })}
      </div>
    </div>
  );
};
export default Page;
