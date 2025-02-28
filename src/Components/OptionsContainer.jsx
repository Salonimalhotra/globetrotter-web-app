import React from 'react';
import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px
`;

const OptionButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  flex: 1 1 45%; /* Adjusts the button to take up approximately half the width */

  &:hover {
    background-color: #0056b3;
  }

`;

const options = ['dubai','paris','delhi','baglasdesh']

const OptionsContainer = ({handleOptionClick}) => {
  return (
    <OptionsWrapper>
      {options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick()}>
          {option}
        </OptionButton>
      ))}
    </OptionsWrapper>
  );
};

export default OptionsContainer;