import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const InputWrapper = styled.section`
  width: 100%;
`;

const InputInner = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  margin-top: 0.8rem;
  label {
    display: block;
    min-width: 100%;
    position: relative;
    left: -180px;
    top: -5px;
    font-size: 0.9rem;
    padding-bottom: 0.5rem;
  }
  input {
    margin: 0 auto;
    width: 400px;
    padding: 0.5rem 0.7rem;
    position: relative;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    outline: none;
    border: none;
    outline: 1px solid #bab6b6;
    background: #fafafa;
    border-radius: 3px;
    &:focus {
      outline: none;
      outline: 2px solid #bab6b6;
    }
    &::placeholder {
      color: #d3cfcf;
    }
  }
`;

const EmailInner = styled(InputInner)`
  label {
    left: -190px;
  }
  button {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    padding: 0;
    transform: translate(-24px, 10px);
  }
  p {
    visibility: hidden;
    color: red;
    margin: 0;
    font-size: 0.8rem;
    transform: translate(-145px, -24px);
    position: relative;
  }
`;

const PasswordInner = styled(InputInner)`
  button {
    background: none;
    outline: none;
    border: none;
    position: absolute;
    padding: 0;
    transform: translate(-30px, 6px);
  }
`;

function Input() {
  const warningMsg = document.getElementById("warningMsg");
  const [isText, setIsText] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const onChange = useCallback(
    (e) => {
      warningMsg.style.visibility = "hidden";
      let reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (reg.test(e.target.value) === true) {
        setIsCorrect(true);
        return;
      } else {
        setIsCorrect(false);
      }
    },
    [warningMsg]
  );
  const onBlur = useCallback(() => {
    if (isCorrect === false) {
      warningMsg.style.visibility = "visible";
    } else return;
  }, [isCorrect, warningMsg]);
  const onClick = useCallback(() => {
    setIsText(!isText);
  }, [isText]);
  return (
    <InputWrapper>
      <h3>Input</h3>
      <EmailInner>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          onChange={onChange}
          id="email"
          placeholder="E-mail"
          onBlur={onBlur}
        />
        <button>
          <FaCheckCircle
            size="1rem"
            color={isCorrect ? "#17a2b8" : "#d3cfcf"}
          />
        </button>
        <p id="warningMsg">Invalid e-mail address.</p>
      </EmailInner>
      <PasswordInner>
        <label htmlFor="password">Password </label>
        <input
          type={isText ? "text" : "password"}
          id="password"
          autoComplete="false"
          placeholder="Password"
        />
        <button onClick={onClick}>
          {isText ? (
            <FaEye size="1.3rem" color="#18a2b8" />
          ) : (
            <FaEyeSlash size="1.3rem" color="#d3cfcf" />
          )}
        </button>
      </PasswordInner>
    </InputWrapper>
  );
}

export default Input;
