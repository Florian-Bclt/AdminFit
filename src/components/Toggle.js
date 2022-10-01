import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  

  &:checked + span {
    background-color: #b1147d;

    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color : #bfbfbf;
  position: relative;
  trasition: background-color 0.2s, box-shadow 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.2s;
    background: #252041;
    box-shadow: 0 2px 4px rgba(0, 35, 11, 0.2);
  }

  a:active:before {
    width: 28px;
  }
`;

const Toggle = ({onChange, label}) => (
  <InputWrapper>
    <Input type="checkbox" onChange={onChange} />
    <Slider />
    {label}
  </InputWrapper>
);

export default Toggle