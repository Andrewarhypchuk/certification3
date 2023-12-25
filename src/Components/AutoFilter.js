import React, { useState, useEffect } from "react";
import { highlightMatchingText } from "../Utils/highlightMatching";
const AutoFilterDropdown = ({ data, property, valueChange }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      item[property].toLowerCase().includes(inputValue?.toLowerCase())
    );
    setFilteredData(inputValue ? filteredItems : []);
  }, [data, property, inputValue, isSearching]);

  const handleInputChange = (event) => {
    setIsSearching(true);
    setInputValue(event.target.value);
  };

  const handleItemClick = (selectedItem) => {
    setInputValue(selectedItem[property]);
    valueChange(selectedItem);
    setIsSearching(false);
  };

  return (
    <div className="auto-filter-dropdown">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to filter..."
      />
      {inputValue && isSearching && (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              {highlightMatchingText(item[property], inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoFilterDropdown;
