import "./SearchField.scss";
import Icon from "../../../assets/icons";
import { useState } from "react";

const SearchField = ({
  name,
  placeholder,
  trigger,
  value,
  triggerOnInput = false,
  showsearchBtn = false,
  classNames = "",
  useControlledValue = false,
  setValue = () => {},
  isScan = false,
}) => {
  const [searchValue, setSearchValue] = useState(value);
  return (
    <div className={`search__field ${classNames}`}>
      <img
        className="mr-2"
        src={isScan ? Icon.search : Icon.search}
        alt="search transactions"
      />
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={useControlledValue ? value : searchValue}
        onKeyUp={(event) => {
          if (event.key === "Enter") trigger(event.target.value);
        }}
        onInput={(event) => {
          if (triggerOnInput) trigger(event.target.value);
        }}
        onChange={(event) => {
          if (useControlledValue) setValue(event.target.value);
          else setSearchValue(event.target.value);
          if (event.target.value === "") trigger(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchField;
