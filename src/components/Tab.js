import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const TabWrapper = styled.section`
  width: 100%;
`;

const TabInner = styled.ul`
  position: relative;
  display: inline-block;
  list-style: none;
  background: #e1e1e1;
  padding: 0;
  padding-bottom: 3px;
  z-index: 1;
  overflow: hidden;
`;

const TabList = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  background: #fafafa;
  min-width: 210px;
  display: inline-block;
  padding: 1rem 0;

  &:first-child {
    &:after {
      transition: 0.3s ease-out;
      content: "";
      position: absolute;
      width: 12.5rem;
      height: 50px;
      background: #17a2b8;
      z-index: -1;
      cursor: pointer;
      top: 10px;
      ${(props) =>
        props.order === 0
          ? css`
              left: 11px;
            `
          : props.order === 1
          ? css`
              left: 220px;
            `
          : css`
              left: 424px;
            `}
    }
  }
`;

function Tab() {
  const [order, setOrder] = useState(0);
  const list = ["감자", "고구마", "카레라이스"];
  const onClickList = useCallback((e) => {
    const num = parseInt(e.target.dataset.index, 10);
    setOrder(num);
  }, []);
  return (
    <TabWrapper>
      <h3>Tab</h3>
      <TabInner>
        {list.map((l, index) => {
          return (
            <TabList
              key={`key${l}`}
              onClick={onClickList}
              order={order}
              data-index={index}
              style={{ color: order === index ? "#323235" : "#bab6b6" }}
            >
              {l}
            </TabList>
          );
        })}
      </TabInner>
    </TabWrapper>
  );
}

export default Tab;
