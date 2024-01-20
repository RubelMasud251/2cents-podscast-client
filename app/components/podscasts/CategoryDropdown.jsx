"use client";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CategoryDropdown = () => {
  const options = ["Entertainment", "Sports", "Spirituality"];
  const defaultOption = options[0];
  return (
    <div className=" flex justify-end">
      <Dropdown
        className="w-fit "
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default CategoryDropdown;
