import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const DropDownWrapper = styled.section`
  width: 300px;
  margin: 0 auto;
  position: relative;
  label {
    font-size: 0.7rem;
    position: absolute;
    left: 314px;
    top: 50px;
  }
`;

const DropDownBtn = styled.input`
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 100%;
  outline: none;
  border: 1px solid #bab6b6;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const DropDownList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  left: 20px;
  position: relative;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  visibility: hidden;
  #search {
    position: absolute;
    left: -10px;
    top: 12px;
    z-index: 1;
  }
  input {
    width: 300px;
    position: relative;
    left: -1px;
    padding: 0.6rem 0.2rem;
    padding-left: 1.8rem;
    font-size: 0.9rem;
    &:focus {
      outline: none;
    }
  }
  li {
    cursor: pointer;
    text-align: left;
    padding: 0.8rem 1.6rem;
    &:hover {
      background: #fafafa;
    }
  }
`;

const ListWrapper = styled.div`
  border: 1px solid #bab6b6;
  border-top: 0px;
  width: 334px;
  position: relative;
  left: -20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const SymArr = [
  "BTCUSD.PERP",
  "LTCUSD.PERP",
  "ETHSUD.PERP",
  "BCHUSD.PERP",
  "XRPUSD.PERP",
  "1000SHIBUCD.PERP",
];

function Dropdown() {
  const [symbol, setSymbol] = useState("All Symbols");
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const onChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const onClick = useCallback((e) => {
    setSymbol(e.target.innerText);
    setIsVisible((prev) => !prev);
  }, []);
  const onClickDropDown = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);
  const onReturnFilteredArr = useCallback(() => {
    const filteredArr = SymArr.filter((sym) =>
      sym.toLowerCase().includes(search.toLowerCase())
    );
    return filteredArr.map((list, index) => {
      return (
        <li key={`list${index}`} onClick={onClick}>
          {list}
        </li>
      );
    });
  }, [onClick, search]);
  return (
    <DropDownWrapper>
      <h3>DropDown</h3>
      <DropDownBtn
        type="text"
        value={symbol}
        id="symbol"
        readOnly
        onClick={onClickDropDown}
      />
      <label htmlFor="symbol">▼</label>

      <DropDownList
        id="symList"
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <AiOutlineSearch size="1rem" id="search" />
        <ListWrapper>
          <input type="text" placeholder="Search Symbol" onChange={onChange} />
          <li onClick={onClick}>All Symbols</li>
          {onReturnFilteredArr()}
        </ListWrapper>
      </DropDownList>
    </DropDownWrapper>
  );
}

export default Dropdown;
