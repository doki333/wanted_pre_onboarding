import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const ToggleWrapper = styled.section`
  margin-bottom: 3rem;
  width: 100%;
`;

const ToggleInner = styled.div`
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  z-index: 3;
  margin: 0 auto;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  display: inline-block;
  padding: 0.2rem;
  overflow: hidden;
  position: relative;
  background: #ebebeb;
  input {
    display: none;
  }
`;

const ToggleElement = styled.label`
  cursor: pointer;
  padding: 0.4rem 5.5rem;
  display: inline-block;
  color: #b3b9bc;

  &:nth-child(1) {
    &:after {
      transition: 0.3s ease-out;
      content: "　　";
      position: absolute;
      background: #fdfdfd;
      z-index: -1;
      top: 2.5px;
      left: 3px;
      height: 25px;
      padding: 0.4rem 5.5rem;
      border-radius: 2rem;
      ${(props) =>
        !props.isChecked &&
        css`
          left: 215px;
        `}
    }
  }
  ${(props) =>
    props.isChecked &&
    css`
      color: #323235;
    `}
`;

function Toggle() {
  const [check, setCheck] = useState(true);
  const onCheckChange = useCallback(() => {
    setCheck((prev) => !prev);
  }, []);
  return (
    <ToggleWrapper>
      <h3>Toggle</h3>
      <ToggleInner>
        <ToggleElement isChecked={check} htmlFor="first">
          기본
        </ToggleElement>
        <input
          type="radio"
          name="toggle"
          id="first"
          defaultChecked
          onChange={onCheckChange}
        />
        <ToggleElement isChecked={!check} htmlFor="second">
          상세
        </ToggleElement>
        <input
          type="radio"
          name="toggle"
          onChange={onCheckChange}
          id="second"
        />
      </ToggleInner>
    </ToggleWrapper>
  );
}

export default Toggle;
