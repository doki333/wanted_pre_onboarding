import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const SliderWrapper = styled.section`
  width: 100%;
  input {
    width: 400px;
  }
  .textInputLabel {
    position: relative;
    left: -36px;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    color: #bab6b6;
  }
`;

const TextInput = styled.input`
  margin: 0 auto;
  border: none;
  outline: none;
  padding: 1.3rem;
  padding-right: 3.5rem;
  height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  position: relative;
  background: #fafafa;
  border-radius: 8px;
  border: 2px solid #bab6b6;
`;

const RangeInput = styled.input`
  margin: 0 auto;
  appearance: none;
  margin-top: 2rem;
  height: 0.5rem;
  display: block;
  background: none;
  border-radius: 20px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    outline: 5px solid #ffffff;
    box-shadow: 0px 5px 5px #ccc;
    border-radius: 50%;
    background: #17a2b8;
    cursor: pointer;
    margin-top: -7px;
  }
  &::-webkit-slider-runnable-track {
    height: 0.3rem;
    border-radius: 20px;
  }
  ${(props) =>
    props.value &&
    css`
      &::-webkit-slider-runnable-track {
        background: linear-gradient(
          to right,
          #17a2b8 0% ${props.value}%,
          #fafafa ${props.value}% ${100 - props.value}%
        );
      }
    `}
`;

const LabelList = styled.ul`
  margin: 0 auto;
  margin-top: 1rem;
`;

const LabelBtn = styled.button`
    position: relative;
    cursor: pointer;
    margin-right: 2.3rem;
    padding: 0.3rem 0.9rem;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 20px;
    &:hover {
      background:#17a2b8;
      color: #fafafa;
    }
    &:first-child {
      &:before {
        content: "";
        position: absolute;
        top: -28px;
        left: 14px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
    }
    &:last-child {
      &:before {
        content: "";
        position: absolute;
        top: -28px;
        left: 34px;
        background: #fafafa;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: -28px;
      left: 20px;
      background: #fafafa;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      z-index: -1;
    }
  }
  ${(props) =>
    props.color &&
    css`
      &:before {
        background: #17a2b8;
      }
    `}
`;
const percentArr = [1, 25, 50, 75, 100];

function Slider() {
  const [num, setNum] = useState(1);
  const onChangeRange = useCallback((e) => {
    setNum(e.target.value);
  }, []);
  const onSetValue = useCallback((e) => {
    const number = e.target.dataset.value;
    setNum(number);
  }, []);

  return (
    <SliderWrapper>
      <h3>Slider</h3>
      <TextInput type="text" value={num} readOnly id="textInput" />
      <label htmlFor="textInput" className="textInputLabel">
        %
      </label>
      <RangeInput
        type="range"
        step={1}
        value={num}
        onChange={onChangeRange}
        min="1"
      />
      <LabelList>
        {percentArr.map((p, index) => {
          return (
            <LabelBtn
              key={`prev${index}`}
              onClick={onSetValue}
              data-value={p}
              color={num > p ? 1 : 0}
              id="numBtn"
            >
              {p}%
            </LabelBtn>
          );
        })}
      </LabelList>
    </SliderWrapper>
  );
}

export default Slider;
